# AgDR-0005 — FCM HTTP v1 API with Service Account OAuth2 for Server-Side Sending

> In the context of the GitHub Actions cron job that broadcasts prayer and dhikr notifications, facing the removal of the OneSignal sender, I decided to use the FCM HTTP v1 API authenticated with a Google service account via `google-auth-library`, accepting the addition of an npm dependency to the Actions job.

## Context

The OneSignal REST API sender in `automated_hourly_push.js` must be replaced with a direct FCM call. Two FCM server-side API versions exist, and two authentication approaches are available. The Firebase Legacy API (`fcm.googleapis.com/fcm/send`) was the only server-side option when this project was designed, but it is deprecated and unavailable on new Firebase projects (the Legacy API enable toggle is removed from the Firebase Console for projects created after mid-2023).

## Options Considered

### API version

| Option | Pros | Cons |
|--------|------|------|
| FCM HTTP v1 (`/v1/projects/{id}/messages:send`) | Current, Google-supported, supports per-platform overrides (`webpush`, `android`, `apns`), required for new projects | Requires OAuth2 Bearer token |
| FCM Legacy API (`/fcm/send`) | Simple — one static server key, no token refresh | Deprecated; unavailable on new Firebase projects (no enable toggle) |

### OAuth2 token acquisition

| Option | Pros | Cons |
|--------|------|------|
| `google-auth-library` (Node.js) | Official Google library; handles JWT signing, token refresh, and caching automatically | Adds ~3 MB npm dependency; requires `npm install` step in workflow |
| Manual JWT signing (pure Node.js) | No npm dependency; similar to the Cloudflare Worker approach | ~80 lines of crypto boilerplate; error-prone; no token caching |
| Cloudflare Worker as OAuth2 proxy | No npm in Actions job | Extra round-trip; wrong responsibility boundary (CF Worker already handles subscribe; sender should be self-contained in Actions) |

## Decision

**FCM HTTP v1 + `google-auth-library`** — the Legacy API is unavailable on this project, so v1 is the only option. `google-auth-library` is the correct tool for server-to-server OAuth2 in a Node.js Actions job: it signs the JWT, handles token refresh, and is maintained by Google. The npm install step adds ~10 s to the workflow run time, which is negligible given the workflow already takes ~30 s for checkout + Node.js setup.

The access token is cached in a module-level variable (`_fcmAccessToken`) so a single workflow run (which may call `sendPush()` twice — once for prayer, once for dhikr) only requests one token.

## Consequences

- `package.json` created with `google-auth-library ^9.0.0` as the sole dependency
- `npm install` step added to the workflow before the node run step
- `ONESIGNAL_APP_ID` and `ONESIGNAL_REST_API_KEY` secrets are no longer used (can be removed from repo settings after this PR merges)
- `FIREBASE_PROJECT_ID` and `FIREBASE_SERVICE_ACCOUNT_JSON` secrets (already set in Phase 1) are the only required secrets
- Notifications are sent to FCM topic `daily-reminders` — all subscribers who opted in via the Phase 3–4 web app receive the broadcast

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/37
- FCM migration plan: `projects/noor-nights/fcm-migration-plan.md` § Phase 5
