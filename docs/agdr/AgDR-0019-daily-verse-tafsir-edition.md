# AgDR-0019 — Daily verse: add ar.muyassar tafsir edition

> In the context of fixing the daily verse workflow, facing a verse card with no explanation and a failed push due to missing npm ci, I decided to add the ar.muyassar edition to the AlQuran API call and a npm ci step to the workflow, accepting a slightly longer push notification body.

## Context

The daily verse workflow (AgDR-0018) was missing `npm ci`, causing `google-auth-library` to be absent at runtime. Separately, the verse card showed no explanation — the hardcoded `_HOME_VERSES` entries have hand-written `ar_meaning` but the live API verses had no equivalent field.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **ar.muyassar** (التفسير الميسر) | Free, same API call, concise Arabic, official Quran.com tafsir | Arabic only (no English tafsir) |
| en.maududi (English tafsir) | English explanation | Verbose, separate API call needed |
| No tafsir | Simpler | Verse card feels incomplete without explanation |

## Decision

Chosen: **ar.muyassar** as third edition in the existing API call. Concise, same request, matches the app's primary Arabic audience, and mirrors the existing `ar_meaning` field in hardcoded verses.

## Consequences

- `daily-verse.json` gains a `tafsir` field used by `renderVerseCard` as `ar_meaning`
- Push notification body is longer (~120 chars of tafsir appended)
- `npm ci` step added to `daily-verse.yml` — adds ~10s to the workflow

## Artifacts

- Closes #165
