## What and why

One or two sentences. Link issues: `Fixes #123`.

## Before / after

A screenshot of the change, if it is visible (the demo at `bin/dev`, or your own page).

## Checklist

Not sure about one? Leave it unchecked and say so: the maintainer can help finish it.

- [ ] `bin/check` passes (the same gate CI runs), or `npm run lint && npm test && npm run build`
- [ ] Classes are `cyber-*` BEM; no existing class or token was renamed or removed
- [ ] Values come from the design tokens (`var(--cyber-…)`, `var(--space-…)`), none hardcoded
- [ ] Ships no JavaScript (state comes from native HTML state or ARIA attributes); hover, `:focus-visible` and disabled states are styled
- [ ] Animations stop under `prefers-reduced-motion: reduce`; text contrast meets WCAG AA
- [ ] A new class or token has a test in `tests/` and an example in the demo
- [ ] `CHANGELOG.md` `## [Unreleased]` has a line for a user-visible change
- [ ] `README.md`, `llms.txt` and `docs/` updated if classes, tokens or usage changed

Keep the pull request a draft until it is ready: the maintainer agent reviews it and merges it once CI is green. Thank you for contributing!
