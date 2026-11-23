---
name: add-component
description: Use when adding a component, a modifier or variant of one, an effect, a utility or a design token to cybercore-css, or when a contributor's pull request adds one and needs finishing (test, demo example, docs, changelog).
---

# Add a component, variant, utility or token

Read `src/scss/CLAUDE.md` first (layers, naming, tokens, states, motion): it holds the design rules this checklist only points at. Mirror the nearest existing file before writing a new pattern.

A class or token is public API from the release that ships it: choose the name once.

## The places a change lives

| # | What | Where |
|---|---|---|
| 1 | The SCSS, inside its `@layer` | `src/scss/components/_<name>.scss` (or `effects/`, `utilities/`, the tokens file under `core/`) |
| 2 | Wired into the build | the `@use`/`@forward` list that the entry `src/scss/cybercore.scss` reaches (a new file that nothing uses ships nothing, silently) |
| 3 | A test that the class or token is in the built CSS | `tests/` (mirror `tests/css-output.test.ts`) |
| 4 | A copy-pasteable example | the demo, `demo/src/` (read `demo/CLAUDE.md`) |
| 5 | The reference for people | `README.md` components overview when it is a new component; `docs/UTILITIES.md` for a utility |
| 6 | The reference for AI tools | `llms.txt`: a `### <module>` section with a snippet for a new module, then `npm run docs:llms` regenerates its class and token lists |
| 7 | The changelog | `CHANGELOG.md`, under `## [Unreleased]` → `### Added` |

## Rules of the component itself

1. `.cyber-<block>`, `.cyber-<block>__<element>`, `.cyber-<block>--<modifier>`. Colour variants reuse the existing modifier names (`--magenta`, `--yellow`, `--green`).
2. Values are tokens: `var(--cyber-…)`, `var(--space-…)`. A value with no token → add the token, do not hardcode.
3. No script is shipped, ever. State is styled from native state (`:checked`, `:disabled`, `:focus-within`, `:has()`, `<details>`, `<dialog>`, `popover`) or from an ARIA attribute the page sets (`[aria-selected="true"]`, `[aria-expanded="true"]`, `[aria-current="page"]`). Prefer a design that needs no script; do not add a script-only state class (`.is-open`) where an attribute can carry the state.
4. States: `:hover`, `:focus-visible` (a ring that is visible on the dark background), `:active`, disabled (`:disabled`, `[aria-disabled="true"]`).
5. Motion: any `animation`, and any transition longer than a state change, has a `@media (prefers-reduced-motion: reduce)` rule.
6. Contrast: 4.5:1 for text, 3:1 for large text and control boundaries, in every colour variant.
7. Low specificity: one class where possible, never an id, never `!important` outside utilities.

## Prove it

```bash
bin/check files src/scss/components/_<name>.scss tests/<file>.test.ts
bin/api-diff            # the new names under "added", nothing under "REMOVED"
bin/docs-check          # README, llms.txt and docs/ name only classes and tokens that exist
bin/check               # before the pull request
```

Then look at it: the `verify-change` skill, § Visible changes.
