# Prayer Notification Dedup — Wider Window + File Markers

> In the context of per-minute GH Actions cron prayer reminders, facing scheduler jitter that silently missed every prayer, I decided to widen the match window to ±5 min combined with per-prayer-per-day sent markers to achieve reliable delivery with no duplicates.

## Context

The original implementation used a ±1 minute window in `getPrayerAtTime`. GH Actions scheduled workflows routinely fire 3–15 minutes late during peak runner demand. This meant virtually every prayer notification was silently dropped — the cron would arrive 8 minutes after Fajr and `|8| > 1` caused no match.

FCM `tag` (webpush collapse key) already deduplicates at the browser, but without server-side dedup a wider window would fire multiple FCM calls for the same prayer. We also took this opportunity to remove all Dhul Hijjah seasonal content and reduce the script to year-round prayer + general dhikr only.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| Keep ±1 min, switch to external scheduler (Cloudflare Cron Triggers, AWS EventBridge) | Sub-second precision, no jitter | Adds infra dependency, needs new credentials, migration cost |
| Widen to ±5 min + FCM `tag` collapse only | Simple, no new infra | User can see duplicate if they dismiss the first one within the window |
| **Widen to ±5 min + file-based dedup markers (chosen)** | Exactly-once server-side send, no new infra, tolerates jitter | Requires `.prayer-sent/` GH Actions cache step; race condition if two runs overlap exactly |

## Decision

Chosen: **±5 min window + `.prayer-sent/` file markers cached per day**, because it fixes the miss problem with no external dependencies. The overlap race (two runs firing within the window before the first marker is cached) is extremely rare and harmless — FCM `tag` handles browser-level dedup as the backstop.

Cache pattern: `key: prayer-sent-{date}-{run_id}` with `restore-keys: prayer-sent-{date}-` ensures each run saves a new entry while restoring the most recent one from today.

## Consequences

- All 5 prayers reliably delivered even on heavily loaded runners
- At most one FCM call per prayer per day (marker prevents retrigger)
- Seasonal Dhul Hijjah / Arafah / Eid logic removed — script is now year-round only
- Two new workflow cache steps (prayer times bake + prayer-sent markers)

## Artifacts

- `automated_hourly_push.js` — `PRAYER_WINDOW_MIN`, `prayerAlreadySent`, `markPrayerSent`
- `.github/workflows/ramadan_hourly_push.yml` — `🔔 Restore prayer-sent markers` step
