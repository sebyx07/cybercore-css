# src/scss/ — the framework: design rules

Everything here ships to users, as `dist/cybercore.css` (built from `cybercore.scss`) and as Sass sources (`cybercore-css/scss/*`). A class or a custom property is public API from the release that carries it. Read the nearest existing partial before writing: `components/_switch.scss` is a good model of a complete one.

## Map

| Dir | Holds | Emits CSS |
|---|---|---|
| `cybercore.scss` | entry of the default bundle | yes |
| `abstracts/` | `_tokens.scss` (Sass maps: palette anchors, spacing, type scale, durations, themes…), `_mixins.scss` (public: breakpoints, container queries, `font-face`), `_manifest.scss` (every partial that emits CSS, in cascade order, and which are `$sass-only`). Public as `@use "cybercore-css/scss/abstracts" as cyber;` | no |
| `core/` | `_layers.scss` (the layer order statement, loaded first), `_variables.scss` (the custom properties, generated from the token maps), `_reset.scss`, `_base.scss`, `_typography.scss`, `_mixins.scss`. `_index.scss` forwards all of it plus `themes/`: `@use "cybercore-css/scss/core";` is everything a single component module builds on | yes |
| `themes/` | `_accents.scss` (`data-theme`), `_contrast.scss` (`prefers-contrast`, `data-contrast="high"`), `_motion.scss` (`prefers-reduced-motion`, `data-motion="reduce"`), `_index.scss` | yes |
| `components/` | one partial per component; `_kit.scss` = mixins every component shares; `_index.scss` forwards them all | yes |
| `effects/` | glitch, neon-border, scanlines, noise, datastream | yes |
| `utilities/` | one partial per family (display, flex, grid, spacing, text, …) | yes |

## Wiring: a partial nothing loads ships nothing

A new partial is registered in three places, in the same position in each:

1. the group's `_index.scss` (`@forward "<name>";`),
2. `abstracts/_manifest.scss`: the group's list, in cascade (source) order, and also `$sass-only` when it stays out of the default bundle,
3. `cybercore.scss`: one `@use` line, unless it is `$sass-only`.

`tests/css-modules.test.ts` holds the three in step: a partial on disk that the manifest lacks, an entry that drifts from the manifest's order, or a module that does not compile on its own fails the suite. It cannot tell you the right place in the order: later rules win inside a layer, so a module goes after the ones it must override.

Default bundle or `$sass-only`? The bundle is what every CDN user downloads: `npm run check:size` enforces the gzip budget (`scripts/check-size.ts`), and raising it is a reviewed decision, not a fix. Moving a module **out** of the bundle removes its classes from the CDN build: breaking (`bin/api-diff`). A `$sass-only` module still ships as source; the demo and `llms.txt` mark it.

A new class also gets an assertion in `tests/css-output.test.ts`, and a new token one in `tests/variables.test.ts`.

## Layers

Order, lowest priority first: `reset, base, theme, components, utilities`. Tokens and themes go in `theme`, element defaults in `base`, components and effects in `components`, helpers in `utilities`.

- Every rule sits inside its `@layer`. One unlayered rule outranks all layered CSS, the user's layered overrides included.
- The order is a contract: users rely on "utilities beat components" and "my unlayered CSS beats everything". Never reorder, rename or add a layer without the owner.
- Fix a cascade problem with the layer or with source order (the manifest), never with specificity or `!important` (allowed only inside `utilities`).

## Naming

- `.cyber-<block>`, `.cyber-<block>__<element>`, `.cyber-<block>--<modifier>`; lowercase kebab-case. Stylelint (`selector-class-pattern`) rejects anything else.
- Colour modifiers are the same words everywhere: `--magenta`, `--yellow`, `--green`, `--chrome` (cyan is the default, no modifier). Sizes: `--sm`, `--lg`.
- Utilities: `.cyber-<property>-<value>` with the token key as value (`.cyber-p-md`, `.cyber-gap-sm`, `.cyber-text-cyan`).
- Component-private custom properties are prefixed with the block (`--switch-width`, `--frame-cut`): users may set them, so they are API too. Private Sass members start with `-` (`@mixin -reduced-motion`).
- Keyframes: `cyber-<name>`.
- Add, never rename or remove. A better name for a shipped class is a new class in a major release, decided by the owner.

## Tokens

- The source of a scale is a Sass map in `abstracts/_tokens.scss`; `core/_variables.scss` turns it into custom properties on `:root`; components and utilities read those custom properties. Add a step to the map, not a literal to a partial.
- `:root` holds raw values. Tokens computed from other tokens (accent tints, glows, transitions) live in the "derived" rule, which also matches `[data-theme]`, `[data-contrast]`, `[data-glow]`, `[data-motion]`, so a theme set on a subtree re-derives there. A new derived token goes in that rule, or scoped themes will not reach it.
- Palette: `--cyber-<hue>-<100..900>`; only the anchor shades are hand-tuned, the rest are `color-mix()` from the hue's 500, so overriding `--cyber-cyan-500` retints the scale. Neutrals (`--cyber-void-*`, `--cyber-chrome-*`) are fully hand-tuned: they carry text contrast.
- Components read **semantic** tokens (`--color-accent`, `--color-bg-secondary`, `--color-text-secondary`, `--color-border-default`, `--color-danger`, `--focus-ring-color`), not palette steps, wherever one exists: that is what makes `data-theme` work. A colour variant sets the component's own accent variable; it does not restyle each property.
- Components read tokens with a literal fallback (`var(--color-accent, var(--cyber-cyan-500))`) so a single partial still renders when loaded without `core/variables`.
- Spacing, type, radius, border width, control height, z-index, duration and easing all have tokens. A hardcoded value is a finding unless it is geometry private to the component (a 2px thumb inset).
- Dark-only by design: no light palette, `color-scheme: dark`. Do not add `prefers-color-scheme: light` rules.
- Fonts are not bundled. `--font-display`, `--font-body`, `--font-mono` fall back to system fonts; never add an `@import` or `url()` to a remote font or image.

## States, without shipping JavaScript

- Style native state first: `:hover` (through `kit.hover`, so touch never gets a stuck hover), `:focus-visible`, `:active`, `:disabled`, `:checked`, `:invalid` / `:user-invalid`, `[open]` on `<details>` and `<dialog>`, `:popover-open`.
- State the page sets is an ARIA attribute, the same one assistive technology needs: `[aria-selected="true"]`, `[aria-expanded="true"]`, `[aria-current="page"]`, `[aria-pressed="true"]`, `[aria-disabled="true"]`, `[aria-busy="true"]`, `[aria-invalid="true"]`, `[aria-sort]`. A few shipped state modifiers exist and stay as API (`cyber-modal--open`, `cyber-dropdown--open`, `cyber-nav--open`, `cyber-tabs__panel--active`); do not add a new one where an attribute can carry the state: a class lets the visual state and the announced state drift apart.
- Disabled covers both `:disabled` and `[aria-disabled="true"]`.
- Prefer a design that needs no script (a checkbox, `<details>`, `popover`). If a component cannot, its demo page says so and shows the few lines; nothing executable ships from here.

## Focus

- Every interactive element gets the ring from `kit.focus-ring` on `:focus-visible`. It is an `outline` (not a `box-shadow`) so it survives forced colours and is not clipped by the cut-corner frame.
- Never `outline: none` without that replacement. Never clip a focusable host with `clip-path` or `overflow: hidden`: the frame is drawn on `::before` (`kit.cut-frame`) precisely so rings, glows and menus are not cut off.

## Motion

- Time everything with `--duration-*` and `--ease-*`. Under `prefers-reduced-motion: reduce` or `data-motion="reduce"` the duration tokens become `0ms`, so token-timed transitions stop by themselves.
- That does not stop a keyframe loop. Each partial that animates ends with a `-reduced-motion` mixin applied in **both** `@media (prefers-reduced-motion: reduce)` and `[data-motion="reduce"]`, setting `animation: none` (and a static end state that still reads: a spinner stays visible, a skeleton keeps its fill).
- Never `transition: all`. Animate `transform` and `opacity`; no layout properties, no large animated `box-shadow`.
- Nothing flashes more than three times a second (WCAG 2.3.1): glitch and flicker effects stay under it.

## Contrast and preferences

- WCAG 2.2 AA: 4.5:1 for text, 3:1 for large text, control boundaries and the focus ring, in every colour variant, including placeholder, muted and disabled-but-readable text. Text on a neon fill uses `--color-text-on-accent`.
- Smallest text: `--text-xs` floors at 11px; small labels use `kit.label-text`.
- Preference overrides are plain at-rules at the **end** of the partial (they must follow what they override), in this order: reduced motion, `prefers-contrast: more`, `forced-colors: active`. In forced colours use system colours (`ButtonText`, `Highlight`, `CanvasText`) and keep state visible without colour (position, border, a glyph).
- Glow is decoration: sizes scale with `--glow-intensity`, which high contrast lowers. Never carry meaning by glow or colour alone.
- Overlay effects (scanlines, noise, datastream) are `pointer-events: none`, sit below focus rings, and read `--scanline-opacity` / `--noise-opacity`.

## Specificity and compatibility

- One class where possible. Stylelint caps specificity at `0,4,2`, nesting at 4. Element selectors only inside a block (`.cyber-switch input`) or in `reset` / `base`.
- Logical properties (`inset-inline-start`, `margin-inline`, `padding-block`) so RTL needs no override.
- No vendor prefixes in source (autoprefixer adds them to the minified build).
- The README states the browser floor. A feature newer than it ships only as an enhancement: inside `@supports`, or where its absence leaves a working fallback (`@starting-style`, `:user-invalid`, `popover`). Raising the floor is the owner's decision.
- Sass: `@use` / `@forward`, never `@import`; the build treats deprecations as fatal. Quote map keys that are also CSS colour names (`"aqua"`).

## Verify

```bash
bin/check files src/scss/components/_<name>.scss   # stylelint, prettier, the unit suite
bin/api-diff                                       # nothing under REMOVED
bin/check                                          # before the pull request
```

Then look at it: skill `verify-change` § Visible changes, agent `visual-a11y-reviewer`. Adding something new: skill `add-component`.
