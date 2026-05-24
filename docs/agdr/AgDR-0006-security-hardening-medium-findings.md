# AgDR-0006 — Security Hardening: SDK Vendoring, CF Worker OAuth2, Workflow Least-Privilege

> In the context of the post-FCM-migration security review (Medium findings M1–M4), facing supply-chain risk from CDN-loaded scripts, an unauditable Cloudflare Worker using deprecated server-key auth, and an over-permissioned GitHub Actions workflow, I decided to vendor the Firebase SDK locally, rewrite the CF Worker to use OAuth2 Bearer tokens, and restrict the workflow permissions — accepting the one-time cost of committing ~70 KB of vendored JS.

## Context

Four medium-severity findings were identified:

- **M4**: The cron workflow inherits default GitHub token permissions (read/write on most scopes) despite needing none — a compromised npm package installed by `npm ci` could exfiltrate the token.
- **M2**: `importScripts` in `sw.js` loaded Firebase SDK from `www.gstatic.com` without any integrity check — the service worker runs in a privileged context and a CDN compromise would silently execute attacker code.
- **M1**: The Cloudflare Worker source was not in the repo, making the deployed CORS policy unauditable.
- **M3**: The CF Worker used the Firebase Legacy server key (`key=` auth) to call the IID API — deprecated since mid-2023 and revocable without notice.

## Options Considered

### M2 — Firebase SDK loading

| Option | Pros | Cons |
|--------|------|------|
| Vendor locally (`src/js/vendor/`) | Eliminates external script execution; files in git are auditable; same bytes every deploy | ~70 KB committed to repo; manual upgrade step |
| Keep CDN with SRI hash | Integrity guaranteed; no repo bloat | `importScripts` in service workers does not support the `integrity` attribute — SRI is browser-only for `<script>` tags; SW importScripts bypasses SRI entirely |
| Use Firebase modular SDK (bundle) | Modern, tree-shaken | Requires a build step — incompatible with the current no-build GitHub Pages setup |

### M3 — CF Worker auth

| Option | Pros | Cons |
|--------|------|------|
| OAuth2 Bearer token (service account JWT via Web Crypto) | Uses non-deprecated auth; same service account JSON already used by the cron script | ~60 lines of JWT/crypto boilerplate in the Worker |
| Keep server key (`key=` auth) | No code change | Deprecated; can be revoked without notice; Legacy API unavailable on new Firebase projects |
| Migrate to FCM HTTP v1 topic management | Modern API | FCM HTTP v1 does not have a topic subscribe/unsubscribe endpoint; topic management still requires the IID API |

### M4 — Workflow permissions

| Option | Pros | Cons |
|--------|------|------|
| `permissions: {}` at workflow level | Least-privilege; GitHub token has no scopes, cannot be abused by a compromised dependency | None — this workflow calls only external APIs and needs no GitHub token |
| Leave at default | No change | Any npm dependency installed by `npm ci` could read/write the repo via the injected `GITHUB_TOKEN` |

## Decision

- **M4**: `permissions: {}` — zero-risk, zero-tradeoff, always correct for workflows that don't touch GitHub resources.
- **M2**: Vendor locally — SRI on `importScripts` is not supported by any browser, making the CDN-load inherently unverifiable regardless of any integrity attribute. Vendoring is the only correct fix.
- **M1 + M3**: Rewrite the CF Worker with OAuth2 Bearer token auth (RFC 7523 JWT flow, signed with Web Crypto RSA-PKCS1-v1_5). Source committed to `cloudflare-worker/subscribe.js`. CORS pinned to `https://noor-nights.github.io`. The `FIREBASE_SERVICE_ACCOUNT_JSON` secret already exists in CF from Phase 2 redesign; the old `FIREBASE_SERVER_KEY` can be removed.

## Consequences

- Firebase SDK upgrades now require a manual download-and-commit step (documented in `cloudflare-worker/README.md` upgrade note pattern)
- PWA ASSETS cache bumped to `v26` so existing users get the new local SDK paths on next activation
- CF Worker must be updated in the Cloudflare dashboard with the new `subscribe.js` source and the `FIREBASE_SERVER_KEY` secret can be deleted
- Workflow `GITHUB_TOKEN` is now effectively inert (no scopes) — safe to add future steps without audit risk from npm dependencies

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/41
- Security review comment: https://github.com/Noor-Nights/noor-nights.github.io/pull/39#issuecomment-4529437412
