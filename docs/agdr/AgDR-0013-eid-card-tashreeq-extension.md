# AgDR-0013 — Extend Eid al-Adha card visibility through Ayyam al-Tashreeq (days 11–12)

> In the context of the VirtueCards section lifecycle, facing the question of
> what to show after the 10 blessed days of Dhul Hijjah end, I decided to keep
> the day-10 Eid al-Adha card visible through Dhul Hijjah days 11 and 12
> (Ayyam al-Tashreeq) and then hide the entire section, to achieve continuous
> Eid content during the 3-day celebration window, accepting that a -1 sentinel
> is added to the `_currentDay()` return contract.

## Context

`VirtueCards._currentDay()` returns 1–10 during the 10 days of Dhul Hijjah,
with day 10 being the Eid al-Adha card. Before this change, any `diff >= 10`
(day 11+) returned `10`, so the Eid card was shown indefinitely — no hiding
logic existed post-DH.

The 10 days of Dhul Hijjah ended on 2026-05-27. Ayyam al-Tashreeq are the days
of Eid al-Adha celebration (Dhul Hijjah 11 and 12). Hiding the section
immediately after day 10 would end the Eid content mid-celebration.

After day 12, the section has no purpose — the Dhikr and WorshipTracker
sections already show a rich post-DH completion summary via `_renderOffState`.
Continuing to show VirtueCards would be dead UI.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Extend to day 12, then hide (chosen)** | Covers full Eid + Tashreeq celebration; clean removal after | Adds -1 sentinel to `_currentDay()` contract |
| Keep showing Eid card indefinitely (status quo) | No code change | Shows Eid content year-round; stale UI |
| Hide after day 10 immediately | Simplest | Ends Eid content while Eid celebration is still ongoing |
| Show a generic post-DH message after day 10 | More content | Needs new copy + design; scope creep |

## Decision

Chosen: **extend to day 12, hide after.**

`_currentDay()` now returns:
- `0` — before Dhul Hijjah (show locked cards preview)
- `1–9` — Dhul Hijjah days 1–9 (Virtue of the Day cards)
- `10` — days 10–12 (Eid al-Adha card; diff 9–11)
- `-1` — day 13+ (after Ayyam al-Tashreeq; `diff >= 12`)

`renderSection()` guards on `today < 0` and hides the entire `.vc-section-card`
(heading + cards), not just the inner container.

## Consequences

- The `-1` return value is a new contract addition. Any future caller of
  `_currentDay()` must treat negative values as "outside active window".
- `CONFIG.WT_TEST_DAY` still overrides the date calculation — testers can pass
  `-1` to test the hidden state, or any value 1–10 to test specific cards.
- `WorshipTracker._renderOffState()` already handles the post-DH completion
  summary independently; the two features compose cleanly.

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/106
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/104
