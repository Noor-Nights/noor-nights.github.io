# Tabler Icons — CDN webfont vs self-hosted SVG paths

> In the context of replacing bespoke icon SVGs with a consistent icon system, facing the choice between a CDN-delivered icon webfont and self-hosted SVG paths, I decided to use the jsDelivr CDN for the Tabler webfont and self-hosted SVG files for all img-tag icons, to achieve visual consistency across inline and image-tag icons while keeping the asset pipeline simple, accepting the addition of a versioned CDN dependency and a widened CSP.

## Context

The app previously used hand-drawn SVG files for navigation and section chips, and plain emoji/text characters for inline indicators (home page stats, suggestions, onboarding chips). These were inconsistent in stroke weight, style, and visual language. The decision was taken to adopt Tabler Icons as the single icon system.

Two delivery methods exist side-by-side:

- **Webfont (CDN)** — `<i class="ti ti-*">` elements in JS-generated HTML strings where raw `<img>` tags are impractical.
- **SVG paths (self-hosted)** — `<img src="assets/icons/*.svg">` for navigation and section chips where the file already exists and HTTP caching applies.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **CDN webfont (jsDelivr)** | Zero build step; works in JS template literals; single `<link>` tag; jsDelivr has high uptime and global CDN | External origin in CSP; new network dependency; supply-chain risk if CDN tampered (mitigated by SRI) |
| **Self-hosted webfont** | No external dependency; CSP stays tight | Requires vendoring ~500 KB font files; adds a maintenance step on version bumps |
| **SVG sprite (self-hosted)** | One HTTP request; no external dependency; works in `<use>` tags | Build tooling required; JS template literals can't reference `<use>` without DOM access; migration scope too large for this PR |
| **Inline SVG in JS strings** | No external dependency; full control | Bloats JS bundle; hard to maintain; already used for `<img>` icons — acceptable for those |

## Decision

Chosen: **CDN webfont for inline icons + self-hosted SVG paths for img-tag icons**, because:

1. Inline icons appear in JS template literals (home stats, suggestion row, book label) — injecting full SVG paths there would bloat the strings. The webfont class syntax (`ti ti-*`) is minimal and readable.
2. img-tag icons are already file-based; keeping them as SVG files preserves HTTP caching and avoids a CSP widening for `font-src`.
3. The SRI hash (`sha384-…`) pins the CDN asset so the browser rejects any tampering. Version is pinned (`@3.31.0`).

The CSP addition is: `style-src cdn.jsdelivr.net` and `font-src cdn.jsdelivr.net` (webfont files served from the same origin).

## Consequences

- `index.html` carries a render-blocking `<link>` for the webfont. Acceptable — the existing `<link rel="preconnect">` for the CDN host mitigates the connection cost.
- Version bumps require updating both the `href` and the `integrity` hash.
- If jsDelivr is unavailable, inline icons (home stats, suggestion chip, verse label, onboarding chips) fall back to unstyled text — navigation and section chip icons (SVG files) are unaffected.
- Future work: migrate inline icons to a self-hosted SVG sprite to eliminate the CDN dependency entirely.

## Artifacts

- `index.html` line 18 — `<link>` with SRI hash
- `assets/icons/*.svg` — self-hosted Tabler SVG paths (13 icons)
- Refs #139
