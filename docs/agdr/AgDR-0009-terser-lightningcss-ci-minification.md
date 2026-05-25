# Terser + lightningcss for CI Minification

> In the context of the GitHub Pages deploy pipeline, facing unminified JS/CSS being served to users, I decided to add Terser (JS) and lightningcss (CSS) as CI minification tools to achieve a ~30–40% reduction in JS size and faster CSS parsing, accepting a small CI step overhead and pinned devDependency versions.

## Context

The app ships raw, unminified source files (~288KB JS + ~129KB CSS). No bundler is in use — vanilla JS/HTML/CSS. Minification must fit into the existing `deploy.yml` pipeline after secret injection and cairo-times baking, and before the GitHub Pages upload step.

## Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Terser + lightningcss** (chosen) | Industry-standard tools; Terser is the de facto JS minifier, lightningcss is Rust-based and extremely fast; both available via npx; separate tools give independent control | Two tools instead of one |
| esbuild | Single tool for both JS and CSS; very fast | Requires a build entrypoint/config; changes the module resolution model for a vanilla JS project; more invasive |
| swc + cssnano | Also high quality; cssnano is mature | swc requires config; cssnano slower than lightningcss |
| UglifyJS + clean-css | Legacy, widely used | UglifyJS doesn't support ES2015+ syntax present in app.js; clean-css less actively maintained |

## Decision

Chosen: **Terser for JS + lightningcss for CSS**, because:
- Both work on individual files without a bundler or entrypoint config — exactly what the vanilla JS pipeline needs
- Terser supports modern ES syntax in app.js; UglifyJS does not
- lightningcss is faster than cssnano and produces equivalent or smaller output
- `dh-skeleton.js` is excluded (synchronous inline script, already tiny — minifying it adds no meaningful gain)
- `src/js/vendor/` is excluded (pre-minified Firebase SDK bundles)
- Both are pinned as `devDependencies` to avoid supply-chain drift

## Consequences

- CI step adds ~15–20s to deploy time (npm install + minification)
- Deployed `app.js`, `duas.js`, `cairo-times.js`, `ui-init.js`, and `modern.css` are minified in the GitHub Pages artifact; source files in the repo remain readable
- Terser `--mangle` renames local variables — no impact since there is no external consumer of these files
- lightningcss may normalise some CSS shorthand properties — visually equivalent output

## Artifacts

- PR: https://github.com/Noor-Nights/noor-nights.github.io/pull/63
- Issue: https://github.com/Noor-Nights/noor-nights.github.io/issues/62
