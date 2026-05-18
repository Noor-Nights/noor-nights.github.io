# Node.js 22 upgrade and graceful secret skip in CI

> In the context of the hourly push reminder workflow, facing Node.js 20 deprecation and hard failure on missing secrets, I decided to upgrade to Node.js 22 and exit(0) on missing secrets to achieve a green CI that skips gracefully when not configured, accepting no meaningful trade-offs.

## Context

GitHub Actions began deprecating Node.js 20 runners; forced migration to Node.js 24 begins June 2026. The `send-push-reminders` job was also exiting with code 1 when `ONESIGNAL_APP_ID` or `ONESIGNAL_REST_API_KEY` secrets were absent, causing the scheduled workflow to show as failed even though no notification was expected.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| Upgrade to Node.js 22 (LTS) | Supported until April 2027, avoids deprecation warning | None |
| Upgrade to Node.js 24 | Latest, future-proof | Not yet LTS; less battle-tested |
| Keep Node.js 20 | No change | Deprecated; forced migration June 2026 |
| exit(0) on missing secrets | Action shows green, skips gracefully | Slightly less visible than a warning annotation |
| exit(1) on missing secrets (current) | Immediately visible | Marks the run as failed even when correct behaviour is "skip" |

## Decision

Chosen: **Node.js 22** (LTS, supported until April 2027) and **exit(0)** for missing secrets, because the job's purpose is to send a notification when secrets are available — absence of secrets is not an error, it's a configuration state.

## Consequences

- CI runs green when secrets are not set
- Deprecation warning removed
- Requires GitHub repo secrets `ONESIGNAL_APP_ID` and `ONESIGNAL_REST_API_KEY` to be set for actual notifications to fire

## Artifacts

- Closes #13
