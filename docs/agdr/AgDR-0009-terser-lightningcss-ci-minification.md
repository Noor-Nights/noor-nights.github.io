# Terser + clean-css for CI Minification

> In the context of the GitHub Pages deploy pipeline, facing unminified JS/CSS being served to users, I decided to add Terser (JS) and clean-css-cli (CSS) as CI minification tools to achieve a ~30–40% reduction in JS size, accepting a small CI step overhead.

## Context

The app ships raw, unminified source files (~288KB JS + ~129KB CSS). No bundler is in use — vanilla JS/HTML/CSS. Minification must fit into the existing `deploy.yml` pipeline after secret injection and cairo-times baking, and before the GitHub Pages upload step.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Terser + clean-css-cli** (chosen) | Terser is the de facto JS minifier; clean-css-cli has a reliable, well-tested CLI (`npx cleancss`) with no platform-specific binaries; both work on individual files without a bundler | Two tools instead of one |
| Terser + lightningcss | lightningcss is faster; Rust-based | `lightningcss` npm package is an API-only library — `npx lightningcss` fails with "could not determine executable to run" on the GitHub Actions runner (confirmed failure in CI run) |
| esbuild | Single tool for both JS and CSS; very fast | Requires a build entrypoint/config; changes the module resolution model for a vanilla JS project; more invasive |
| swc + cssnano | Also high quality | swc requires config; more setup overhead |
| UglifyJS + clean-css | Legacy, widely used | UglifyJS doesn't support ES2015+ syntax present in app.js |

## Decision

Chosen: **Terser for JS + clean-css-cli for CSS**, because:
- Both work on individual files without a bundler or entrypoint config
- Terser supports modern ES syntax in app.js; UglifyJS does not
- `clean-css-cli` has a proven, platform-independent CLI (`npx cleancss`) — unlike `lightningcss` which failed on the GitHub Actions Linux runner
- `dh-skeleton.js` is excluded (synchronous inline script, already tiny)
- `src/js/vendor/` is excluded (pre-minified Firebase SDK bundles)
- Versions pinned inline in the workflow (`--no-save`) to keep `package.json` clean

## Consequences

- CI step adds ~15–20s to deploy time (npm install + minification)
- Deployed `app.js`, `duas.js`, `cairo-times.js`, `ui-init.js`, and `modern.css` are minified in the artifact; source files in the repo remain readable
- Terser `--mangle` renames local variables — no impact since there is no external consumer of these files

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/63
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/62
