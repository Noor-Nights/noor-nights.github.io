# AgDR-0017 — Remove OneSignal fallback from push pipeline

> In the context of the Noor Nights push notification pipeline, facing a live OneSignal fallback that could cause duplicate notifications if FCM throws a transient error, I decided to remove the fallback entirely to achieve a single delivery path, accepting that a transient FCM failure will result in a missed notification rather than a duplicate.

## Context

FCM (direct) has been the primary push channel since the OneSignal migration. After monitoring runs over several weeks, the OneSignal fallback has never triggered — FCM delivers successfully on every run. Meanwhile, the fallback is a live duplicate risk: if FCM throws and the user still holds an active OneSignal subscription from before the migration, they receive the notification twice.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| Keep fallback | Resilience if FCM is down | Duplicate delivery risk; dead code; two secrets to rotate |
| Remove fallback | Single delivery path; no duplicate risk; simpler pipeline | Missed notification on transient FCM error (rare, self-recovering next run) |
| Replace with retry only | Already done (`sendPushWithRetry` with 2 retries) | Redundant with keeping the fallback |

## Decision

Chosen: **remove fallback**, because FCM has proven stable, `sendPushWithRetry` already handles transient errors with 2 retries, and the duplicate risk outweighs the resilience benefit of a second delivery channel.

## Consequences

- A sustained FCM outage (not a transient error) would miss notifications until FCM recovers. Acceptable: prayers repeat daily and the next scheduled run will catch the next prayer.
- `ONESIGNAL_APP_ID` and `ONESIGNAL_REST_API_KEY` GitHub secrets can be deleted.
- `OneSignalSDK.sw.js` and `OneSignalSDKWorker.js` leftover files are a separate cleanup (tracked separately).

## Artifacts

- Closes #153
