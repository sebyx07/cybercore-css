# Data model

A CSS framework has no database: its "data" is the public API users write against. All of it is
stable from the release that ships it.

- **Classes:** `cyber-<block>`, `cyber-<block>__<element>`, `cyber-<block>--<modifier>` (BEM,
  enforced by stylelint). One partial per component under `src/scss/components/`.
- **Tokens:** CSS custom properties on `:root`, generated from the Sass maps in
  `src/scss/abstracts/` and emitted by `src/scss/core/`: hue scales from 100 to 900 derived from
  each hue's 500 shade with `color-mix()`, semantic colour roles, spacing, type, radius, duration,
  glow and z-index. Users override them to theme.
- **Theme attributes:** `data-theme` (accent themes), `data-contrast="high"`,
  `data-motion="reduce"`, on the page or any subtree (`src/scss/themes/`).
- **Sass modules:** the package `exports` (`package.json`) map `cybercore-css/scss/*` to
  `src/scss/*`; `abstracts` exposes maps and mixins without emitting CSS.
- **Icons:** definitions with a name, a category and an SVG string (24x24 viewBox,
  `currentColor` stroke), exported from `cybercore-css/icons`, `/icons/individual` and per-category
  `/icons/defs/<category>`.

The full, current list of classes and tokens is `llms.txt` (`npm run docs:llms` regenerates its
lists); `bin/api-diff` compares it with the published package.
