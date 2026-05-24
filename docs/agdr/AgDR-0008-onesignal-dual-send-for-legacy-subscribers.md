# AgDR-0008 — OneSignal Dual-Send for Legacy Subscribers

> In the context of needing to reach both new FCM subscribers and existing OneSignal subscribers, facing the choice of how to keep legacy users notified without requiring them to re-subscribe, I decided to send each notification through both FCM and OneSignal simultaneously, to achieve full subscriber coverage with no user action required, accepting that two API calls are made per notification run.

## Context

Noor Nights migrated from OneSignal to Firebase Cloud Messaging (FCM) topics in 2026 (#43–#51). New users subscribe via the FCM flow and receive notifications via the `daily-reminders` topic. However, users who subscribed via the legacy OneSignal SDK are not reached by the current `automated_hourly_push.js`, which only calls `sendPush()` (FCM HTTP v1).

OneSignal credentials (`ONESIGNAL_APP_ID`, `ONESIGNAL_REST_API_KEY`) already exist as GitHub Actions secrets. The OneSignal SDK files are still present in the PWA, meaning existing OneSignal subscribers are still registered on OneSignal's side.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Dual-send (chosen)** | Reaches all subscribers immediately, no user action needed, non-fatal if OneSignal fails | Two API calls per run, dual channel adds minor complexity |
| Migrate OneSignal subscribers to FCM | Single channel long-term | Requires user interaction (re-subscribe prompt), some subscribers will be lost in transition |
| Keep only OneSignal | No migration work | Abandons FCM infrastructure already built; can't track subscriber count in Supabase |
| Topic bridge via OneSignal webhooks | Single trigger | Complex infrastructure, webhook reliability concerns |

## Decision

Chosen: **dual-send**, because it reaches 100% of existing subscribers immediately with a one-line `await sendOneSignalPush(...)` call added at each notification call site. The OneSignal call is non-fatal — a failure logs a warning and does not affect FCM delivery. Both channels carry identical content.

The `sendOneSignalPush()` function reads `ONESIGNAL_APP_ID` and `ONESIGNAL_REST_API_KEY` from `process.env` and exits with a warning if either is absent, so the function is safe to call in any environment.

## Consequences

- All subscribers — FCM and OneSignal — receive prayer and dhikr reminders
- No user-facing changes or re-subscribe prompts needed
- `ONESIGNAL_APP_ID` and `ONESIGNAL_REST_API_KEY` must be set as GitHub Actions secrets (already done)
- OneSignal API errors are non-fatal; FCM delivery is unaffected
- When OneSignal subscriber base drops to zero (all users have migrated to FCM), the dual-send can be removed

## Artifacts

- PR #53: feat(#52): dual-send push via OneSignal for legacy subscribers
- Issue #52
