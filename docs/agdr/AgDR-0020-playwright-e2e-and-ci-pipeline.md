# AgDR-0020 — Playwright E2E suite + CI pipeline on GitHub Actions

> In the context of a no-build vanilla-JS PWA with zero tests, facing regressions that only users discover after deploy, I decided to add a Playwright E2E suite served by a zero-dependency static server and run it in a new `ci.yml` workflow on every PR and push to `main`, accepting ~1–2 min of CI time per run and E2E-only (no unit) coverage for now.

## Context

- The app is a single `index.html` + `src/js/app.js` (~5.7k lines) of globals with no module system and no build step — functions can't be imported into a unit-test runner without refactoring.
- Most regressions so far (#211, #213) were visible UI/state bugs, which E2E catches directly.
- The page talks to many third parties (Supabase, Firebase, GoatCounter, AlAdhan, Nominatim, Cloudflare worker, CDNs). Tests must not depend on them.
- Existing scheduled workflows run `npm ci`; adding dev dependencies must not slow them or leak into the Pages artifact.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Playwright (`@playwright/test`)** | Real browser, mobile emulation, network interception, clock control, traces/HTML report, MCP server for interactive exploration | Browser download in CI (~cached) |
| Cypress | Good DX | Heavier, weaker multi-tab/mobile emulation, no first-party MCP |
| Vitest + jsdom unit tests | Fast | App code isn't importable without refactor; jsdom misses layout/visibility |
| Static server: `http-server`/`serve` package | Familiar | Extra dependency for ~30 lines of code |
| **Static server: `tests/serve.mjs` (node:http)** | Zero deps, matches "no build step" philosophy | Small file to maintain |

## Decision

Chosen: **Playwright + `tests/serve.mjs`**, because it tests the app exactly as users get it, without refactoring, and supports the determinism we need:

- All non-`localhost` requests are aborted in a shared fixture → offline-safe, no flakiness from third parties.
- Clock pinned to a Dhul Hijjah 1447 evening (`Africa/Cairo`) so date-driven UI is stable.
- Service workers blocked so interception is reliable.
- Two projects: Desktop Chrome + Pixel 7 (the app is mobile-first).
- CI: new `ci.yml` (not merged into `deploy.yml`) so PRs get a gate without touching the deploy path. Browsers cached by lockfile hash; report uploaded only on failure.
- Existing workflows switched to `npm ci --omit=dev` / `npm install --omit=dev` so Playwright never installs in scheduled jobs or ships in the Pages artifact.

## Consequences

- `npm test` runs the suite locally; `npm run check` does a `node --check` syntax pass.
- Deploy is **not** yet gated on CI (deploy still runs on push to `main`). Make `CI` a required status check in branch protection to enforce it.
- Unit coverage of pure helpers (`numFmt`, prayer-time baking, verse fetching) remains a follow-up.
- `.mcp.json` registers `@playwright/mcp` so the suite can be extended interactively from Claude Code.

## Artifacts

- Refs #215
