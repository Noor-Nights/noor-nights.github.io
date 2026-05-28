# AgDR-0014 — Daily Tracker Storage Key Migration

> In the context of generalising the WorshipTracker from a Dhul Hijjah season tracker to a perpetual daily checklist, facing the choice of what to do with existing data stored under `noor_tracker_dhulhijjah_1447`, I decided to start a new key (`noor_tracker_daily`) and leave the old key in place — read-only via a legacy getter — to achieve a clean general-purpose tracker while preserving badge data, accepting that Dhul Hijjah tracker progress will not carry forward into the new daily view.

## Context

The original WorshipTracker stored all data under `noor_tracker_dhulhijjah_1447` keyed by numeric day integers (1–10), tightly coupled to the Dhul Hijjah 1447 season (May 18–27, 2026). After the season ended, the tracker showed an off-state summary. The goal is to make the tracker a year-round daily worship log with no season framing.

Three users were affected during the Dhul Hijjah 1447 season. The season ended before this change ships, so the "currently mid-season data loss" risk is zero. Any Dhul Hijjah data that exists is historical.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **New key `noor_tracker_daily`, keep old key for badges only** | Clean separation; no old numeric-keyed format bleeds into new date-string format; badge system backward-compatible via legacy getter | Dhul Hijjah progress doesn't appear in the general tracker's streak counter (by design — different data format) |
| Migrate old data on first load (copy numeric keys to date keys) | Streak continuity for existing users | Requires mapping numeric day 1→10 back to absolute dates; fragile if clock was wrong; complex migration code for 3 users' data; Dhul Hijjah has already ended — no new data will be written |
| Keep the same key, change key format to date strings | Single key, no migration | Old numeric keys and new date string keys would coexist in the same object; undefined sort order; badge system breaks without guard code |

## Decision

Chosen: **new key `noor_tracker_daily`, leave `noor_tracker_dhulhijjah_1447` as a read-only legacy source for the badge system.**

Justification:
- The Dhul Hijjah 1447 season ended before this change ships — there is no active tracking data at risk of mid-session loss.
- The numeric 1–10 key format is incompatible with ISO date strings; mixing them in one object would require constant type guards.
- Badge system needs numeric-keyed data to evaluate `earlyBird`, `generousHeart`, `scholar` — the `_dhulHijjahDays` getter satisfies this without touching the new key.
- The post-season summary view is intentionally removed — users returning after the season see the general daily tracker, not a historical summary. This is a deliberate scope reduction: the season is over, and the future feature set will address historical views if needed.

## Consequences

- Users with Dhul Hijjah 1447 tracker data will not see that data in the new general tracker's streak count. Their badge eligibility is preserved.
- New daily tracker starts at day-0 streak for all users — clean slate.
- Old localStorage key `noor_tracker_dhulhijjah_1447` is never written again; it is read-only via `_dhulHijjahDays`. It can be pruned in a future cleanup PR once the badge system is updated to use a more general history source.
- No migration script is needed.

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/120
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/119
