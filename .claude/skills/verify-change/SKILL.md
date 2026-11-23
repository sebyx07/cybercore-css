---
name: verify-change
description: Use when proving a change in cybercore-css before a commit or pull request, when bin/check, stylelint, eslint, prettier, vitest, the Sass build or a visual test fails, when a script exits 75, or when asked how to run the tests, the linters, the demo site or how to check that a class or token was not removed.
---

# Verify a change

`bin/check` is the gate. CI runs the same steps, so green locally is green there (`bin/repo-guards` fails when the two drift).

| Tier | Command | When |
|---|---|---|
| tightest | `bin/check files <paths>` | after each edit; the only tier allowed when agents share the checkout |
| fast | `bin/check fast` | after a slice works |
| full | `bin/check` | once, before the pull request |

`bin/check --help` lists exactly what each tier runs and what `fast` and `files` do not see.

Other commands: `bin/docs-check [files]` (every class and token named in README, `llms.txt` and `docs/` exists; part of the full tier) · `bin/setup` (install, idempotent) · `bin/dev [--detach]` (the demo, http://127.0.0.1:5173/cybercore-css/) · `bin/stop` · `bin/api-diff [version]` (classes and tokens removed or added against the published package).

## Exit codes

| Exit | Means | Do |
|---|---|---|
| 0 | green | commit |
| 75 | environment missing: Node, `node_modules`, Docker. Nothing was graded | `bin/setup`, rerun. Never treat it as a failing change |
| other | a check ran and is red | read the `failing command` / `rerun` lines at the end of the output |

## Rules

1. Run from anywhere; the scripts `cd` to the repo root and pick the Node from `.nvmrc`.
2. Changed `package.json` or `package-lock.json` → `bin/setup` before `bin/check` (otherwise exit 75).
3. Fail one, fix one: rerun only the failing step (`npx stylelint <file>`, `npx vitest run <file>`, `npx vitest run <file> -t "<name>"`, `npx prettier --check <file>`), then the tier. `npm run lint:fix` and `npm run format` apply the autofixes.
4. A new class, modifier or token gets an assertion in `tests/` that it is in the built CSS. Write it first and see it fail: a green run that never went red proves nothing.
5. Changed or removed a selector or a custom property → `bin/api-diff`. Exit 1 means a published class or token is gone: that is a breaking change, stop and say so.
6. Red gate → fix the cause. Never a `stylelint-disable`, `eslint-disable`, loosened rule, skipped test, or a step removed from `bin/check`.
7. Never trust a piped exit code: `bin/check | tail` reports `tail`. Run it bare, or read `${PIPESTATUS[0]}`.
8. Sharing the checkout with other agents: `bin/check files <your paths>` only. Never bare `bin/check` or `fast` (they grade everyone's uncommitted work), never `bin/dev` on the default port (`PORT=<free port> bin/dev --detach`).

## Visible changes

Tests assert that rules exist, not how they look. After `bin/check`:

1. `bin/dev --detach`, open the changed component's page with the browser tools at 1440 and 390 wide.
2. Hand it to the `visual-a11y-reviewer` agent (contrast, focus, keyboard, reduced motion); fix every finding in one batch; recapture.
3. `npm run build && npm run test:visual` (Docker: the pinned Playwright image CI uses; exit 75 without Docker, and CI's `visual` job is then the judge). Re-render a baseline only for an intended change (`npm run test:visual:update`) and say so in the pull request.
4. `bin/stop`.

A style that does not apply is almost always the cascade: the rule is in the wrong `@layer`, or the demo's own CSS outranks it. Check the computed style and the layer before raising specificity.
