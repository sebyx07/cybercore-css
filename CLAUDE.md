# cybercore-css

Pure CSS cyberpunk design framework: neon components, effects, utilities, design tokens, SVG icons. npm `cybercore-css`, served by jsDelivr and unpkg, demo at https://sebyx07.github.io/cybercore-css/. Sass sources → `dist/cybercore.css`. Public repo with outside contributors, default branch `main`, maintained by the developerz.ai agent (`.dz/`). Companion: cybercore-charts.

## Response rules

- Execute. No preamble. Lead with the action or the answer; disagree once, with the reason, when the request is wrong.
- Read the code before claiming anything about it. Report what you verified, never what you assume.
- Terse. Commands, paths, class names and token names stay exact.

## Coding rules

- Smallest change that solves the problem correctly. No abstraction before its second caller, no dead code, no shims.
- Mirror the nearest existing partial before writing a new pattern.
- A new class, modifier or token gets a test asserting it is in the built CSS. A bug fix starts with the failing test where one can express it.
- Red gate → fix the cause. Never a `stylelint-disable`, `eslint-disable`, skipped test, raised size budget or removed guard to get to green.
- Outside contributors are welcome here: finish their pull request rather than redo it, keep their authorship, thank them by handle.

## Invariants (the product's promises)

1. **Pure CSS, no JavaScript runtime.** The package ships CSS, SCSS sources and icon definitions; no script, no runtime dependency (`dependencies` stays empty; guard: `bin/repo-guards`). A component works from a `<link>` tag. State lives in HTML and CSS: native state (`:checked`, `:disabled`, `:focus-visible`, `<details>`, `<dialog>`, `popover`) and ARIA attributes (`[aria-selected="true"]`, `[aria-expanded="true"]`, `[aria-current="page"]`). Where a page must toggle an attribute itself (tabs, modal, dropdown, toast, mobile nav), the framework styles the attribute and documents the markup; it never ships the script. The few shipped state modifiers (`cyber-modal--open`, `cyber-dropdown--open`, `cyber-nav--open`) stay as API; add no new one where native state or ARIA can carry it.
2. **`cyber-*` BEM names are stable.** `.cyber-block`, `.cyber-block__element`, `.cyber-block--modifier` (Stylelint enforces the pattern). A shipped class is never renamed or removed outside a major release: sites on a CDN `<link>` break silently. Guard: `bin/api-diff`.
3. **Tokens are public API.** Every custom property on `:root` (`--cyber-<hue>-<100..900>`, `--color-*`, `--space-*`, `--text-*`, `--font-*`, `--radius-*`, `--duration-*`, `--glow-*`, `--z-*`, …) can be overridden by users and is read by their CSS. Same rule as classes: add, never rename or remove; a changed default that restyles existing pages is a breaking change.
4. **Reduced motion is respected.** Duration tokens collapse to `0ms` under `prefers-reduced-motion: reduce` and `data-motion="reduce"`; every decorative keyframe animation is also guarded in its own partial. Nothing flashes more than three times a second.
5. **WCAG 2.2 AA.** Text 4.5:1, large text and control boundaries 3:1, in every colour variant; a visible `:focus-visible` ring on everything interactive; `prefers-contrast: more` and `forced-colors` keep controls usable.
6. **Layered and overridable.** Every rule sits in its cascade layer (order: reset, base, theme, components, utilities), with low specificity, so a user's unlayered one-class rule always wins. Dark-only by design: there is no light palette.
7. **The CDN bundle has a size budget.** `dist/cybercore.min.css` gzipped stays under the budget in `scripts/check-size.ts`.

Breaking any of 2, 3 or 6, or raising the browser-support floor, is the owner's decision: stop and ask.

## The loop

| Tier | Command | Runs | When |
|---|---|---|---|
| tightest | `bin/check files <paths>` | stylelint / eslint / prettier on those files, vitest on what they affect | after each edit; the only tier allowed when agents share the checkout |
| fast | `bin/check fast` | repo guards + stylelint + unit tests | after a slice works |
| full | `bin/check` | repo guards, lint, format, typecheck, tests, icon validation, build (CSS + demo), size budget, package check, docs truth check, workflow lint, audit and visual regression | once, before the PR |

Exit 0 green · **75 environment missing, nothing was graded** (install prerequisites) · other exits mean a check failed; see the last lines for the command and rerun. CI also runs workflow lint, `npm audit` and visual regression as separate jobs.

## Commands

```bash
bin/setup                      # Node from .nvmrc (mise or nvm) + npm ci. Idempotent
bin/dev                        # demo site with hot reload, http://127.0.0.1:5173/cybercore-css/
PORT=5199 bin/dev --detach     # background server for browser tools; bin/stop ends it
bin/check [fast|files <paths>] # the gate; --help lists each tier's steps
bin/api-diff [version]         # classes and tokens removed/added against the published package
bin/docs-check                 # every class and token named in README, llms.txt, docs/ exists
bin/repo-guards                # CI parity, agent-surface scan, CLAUDE.md size, package invariants
npm run build:css              # dist/cybercore.css + dist/cybercore.min.css
npx vitest run tests/css-output.test.ts          # one test file (-t "<name>" for one test)
npm run lint:fix && npm run format              # stylelint/eslint autofix, prettier --write
npm run build && npm run test:visual             # screenshots against baselines (Docker)
npm run validate:icons         # icon registry rules
```

No `.env` or secrets are needed. The full gate needs Docker and registry access; `bin/setup` installs Node dependencies only. Without pipx, zizmor runs in its pinned Docker image.

## Layout

```
src/scss/cybercore.scss   entry of the default bundle (what the CDN serves)
src/scss/abstracts/       Sass-only API: token maps, mixins, module manifest. Emits no CSS
src/scss/core/            layer order, custom properties (tokens), reset, base, typography
src/scss/themes/          accent themes (data-theme), high contrast, reduced motion
src/scss/components/      one partial per component; _kit.scss = shared mixins (frame, focus ring, guards)
src/scss/effects/         glitch, neon-border, scanlines, noise, datastream
src/scss/utilities/       single-purpose helper classes
src/icons/                SVG icon definitions + TypeScript helpers, shipped as source
dist/                     build output, NOT committed, built at release
tests/                    vitest: the SCSS compiles, classes and tokens are in the build, icons are valid
tests/visual/             Playwright screenshots of every demo page
demo/                     documentation site (React + Vite), deployed to GitHub Pages; not in the package
examples/                 standalone HTML previews of dist/
scripts/                  check-size, check-package, validate-icons, visual.sh, changelog-notes.sh
bin/                      setup, dev, stop, check, repo-guards, api-diff, docs-check
docs/                     UTILITIES.md, idea/ (intent, direction), standards/ (rule → guard)
.github/                  ci.yml, release.yml, deploy.yml, dependabot, issue and PR forms
.dz/                      developerz.ai maintainer policy, reviewer prompt, scheduled briefs
llms.txt                  class and token reference for AI tools that use the framework
```

## Release

Merging a `package.json` version bump to `main` is the release: `release.yml` proves the commit, publishes to npm (trusted publishing), then tags and creates the GitHub release from `CHANGELOG.md`. The weekly `release-due` checkup opens that pull request; procedure: `RELEASE.md`. The demo deploys on every merge.

## Preventive rules (these bite before any symptom appears)

- **A partial nothing loads ships nothing.** Register it in the group `_index.scss`, `abstracts/_manifest.scss` and (unless `$sass-only`) `cybercore.scss`, in cascade order. Guard: `tests/css-modules.test.ts`. Moving a module out of the entry removes its classes from the CDN build: breaking.
- **Unlayered CSS outranks every layer**, including users' layered overrides. Never write a rule outside `@layer`.
- **Hardcoded values break theming.** Colour, spacing, type, radius, duration and z-index come from tokens (`var(--…)`); `data-theme` and user overrides only reach what reads them. No token for the value → add the token.
- **Duration tokens alone do not stop a keyframe loop.** An infinite animation needs its own reduced-motion rule (`animation: none`) at the end of the partial.
- **`:focus` is not `:focus-visible`**, and `outline: none` without a replacement removes the ring for keyboard users. Use the kit's focus-ring mixin.
- **Overlay effects must not eat input.** Scanlines, noise and datastream layers are `pointer-events: none` and sit under focus rings.
- **Versioned URLs follow `package.json`.** Every `cybercore-css@x.y.z` in `README.md` and `llms.txt` equals the package version (guard: `bin/repo-guards`); the demo's snippet and SRI hash come from `demo/src/data/cdn.json`, rewritten by `node demo/scripts/sync-cdn.mjs` after a release is on npm.
- **Docs are part of the change.** A class, token or usage change updates `llms.txt` (lists: `npm run docs:llms`), the demo docs (`demo/src/data/`), `docs/UTILITIES.md` for utilities, and `CHANGELOG.md` `## [Unreleased]`, in the same pull request. A doc naming a class or token that does not exist fails `bin/docs-check`.
- **Agent-read files are code.** `CLAUDE.md`, `.claude/`, `.dz/`, `.mcp.json`, `llms.txt`: no HTML comments, no invisible characters; this file stays under 12,000 characters (`bin/repo-guards`).

## Never

- **No git worktrees.** No `git worktree add`, no `isolation: worktree`. One checkout; parallel agents get disjoint file sets, run only `bin/check files <their paths>`, and do no git at all. The coordinator owns git.
- **Stage by path.** `git add <paths>`, never `-A` or `.`. Never `git stash` (one shared stack), never force-push `main`.
- **Never publish or tag by hand.** No `npm publish`, `npm version` with a tag, `git tag`, `gh release create`. Release = merge the version bump. A published version is never republished.
- **Never commit `dist/`**, a secret, or an npm token (publishing is OIDC).
- **No runtime dependency, no shipped JavaScript**, no framework wrappers, no remote `url()` / `@import` / font in the framework.
- **No renamed or removed class or token**, changed layer order or raised browser floor without the owner.
- **No weakened gate**: see Coding rules.

## PR conventions

Branch `<type>/<slug>` off `main`. Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`). One concern per PR; a `.github/` change never shares a PR with code; outside contributors' changes to `.github/`, `bin/`, `.dz/`, `.claude/` are owner-only. Visible change → before/after screenshots at 1440 and 390. User-visible change → a `CHANGELOG.md` `## [Unreleased]` line (credit contributors by handle). Required check: `CI OK` (verify the ruleset: `gh api repos/sebyx07/cybercore-css/rulesets`). Skills: `verify-change`, `add-component`. Command: `/release`. Agents: `visual-a11y-reviewer`, `svg-artist`.

## Where to look (load on demand)

- Design rules (layers, naming, tokens, states, motion, contrast), how partials are wired → `src/scss/CLAUDE.md`
- Demo site: data files, routes, snippet rules → `demo/CLAUDE.md`
- Workflows, pinning, release lane → `.github/CLAUDE.md`, `RELEASE.md`
- Maintainer policy, review rules, scheduled checkups → `.dz/README.md`
- Icons → `src/icons/README.md`
- Product intent and direction (draft) → `docs/idea/`, index `docs/README.md`
- What users are told: `README.md`, `llms.txt`, `docs/UTILITIES.md`, `CONTRIBUTING.md`
