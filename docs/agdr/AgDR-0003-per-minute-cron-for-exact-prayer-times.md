# AgDR-0003 — Per-Minute Cron for Exact Prayer Time Notifications

> In the context of the GitHub Actions prayer reminder cron, facing the limitation that an hourly schedule fires at :00 regardless of the prayer's actual minute, I decided to switch from `0 0-20 * * *` to `* 0-20 * * *` to achieve notifications at the exact prayer minute, accepting the increase from 21 to ~1,260 runs/day.

## Context

The previous hourly cron matched prayer times by hour only — Asr at 16:28 fired a notification at 16:00, 28 minutes early. Users expected reminders at the exact call to prayer.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| Every-minute cron `* 0-20 * * *` | Exact-minute match; simple logic change | ~1,260 runs/day (free on public repo) |
| Hourly cron with ±tolerance | Fewer runs | Notification can still be several minutes off; complex logic |
| External scheduler (cron.io, etc.) | Exact time, minimal CI runs | Extra dependency, cost, secrets management |

## Decision

Chosen: **every-minute cron**, because the repo is public and GitHub Actions minutes are free and unlimited for public repositories. The script exits in <1s when no prayer matches and it's not minute :00, so resource cost is negligible.

## Consequences

- Prayer notifications fire at the exact minute returned by the aladhan.com API
- Dhikr messages retain once-per-hour cadence via a `minutes !== 0` early-return guard
- ~1,260 workflow runs/day, each completing in under 5 seconds for non-matching minutes
