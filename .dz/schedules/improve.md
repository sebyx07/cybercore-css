# Brief: monthly improvement

Fired on the first Friday of the month (UTC days 1-7, `weeks_of_month: [1]`) by `schedules: improve`
in `.dz/maintainer/maintainer.yml`. It runs as a devops task (`mode: devops`): a shell on a
checkout, delivering one pull request.

cybercore-css is a public CSS framework maintained by agents, with outside contributors. Once a
month, leave it measurably better: nobody's pull request waiting, current dependencies, no
accessibility or visual regression, and one step ahead of what browsers now support. Read
`CLAUDE.md` first: its invariants (pure CSS, no JavaScript shipped, stable `cyber-*` BEM names,
tokens as public API, reduced motion respected, WCAG AA) bind every change. `bin/check` must be
green before any pull request.

## Rows

- `community-pr-waiting`: a contributor's pull request or issue has waited more than 7 days on the maintainer (§1).
- `dep-major`: a dependency or action major that Dependabot proposed and could not land, or does not propose (§2).
- `a11y-regression`: a contrast, focus, keyboard or reduced-motion failure in a component or on the demo site (§3).
- `visual-regression`: a component renders differently from its committed snapshot, or breaks at 390 px wide (§3).
- `css-feature-adoptable`: a CSS feature became Baseline widely available and replaces a workaround here, or one the framework relies on needs a newer floor than the README states (§4).
- `docs-drift`: a claim in `README.md`, `llms.txt`, `docs/`, `CLAUDE.md` or the demo no longer matches the built CSS (§5).
- `dead-code`: an unused token, mixin, dependency, asset or duplicated rule (§5).

## 1. People first

```bash
R=sebyx07/cybercore-css
gh pr list -R $R --state open --json number,title,author,isDraft,createdAt,updatedAt,reviewDecision,statusCheckRollup,mergeable
gh issue list -R $R --state open --json number,title,author,createdAt,updatedAt,labels,comments
```

A contributor's ready pull request that is green and reviewed should already be merged: if one is
open, find out why (a first-time contributor's CI run waiting for approval, a conflict, an
unanswered question) and say so in the answer. A pull request that is red on something its author
cannot fix from a fork (a flaky visual snapshot, a formatting rule) is yours: push the fix to their
branch when the fork allows maintainer edits, or open a follow-up that carries their commits with
authorship kept, and thank them by handle. Never close a contributor's pull request to re-do it
under the bot's name. A merged outside contribution gets its author added to the README's
contributors list in this run's pull request if missing
(`gh api repos/$R/contributors --jq '.[].login'`).

## 2. Dependencies

```bash
bin/setup
npm outdated --long || true
gh pr list -R $R --author app/dependabot --state open --json number,title,createdAt,statusCheckRollup
cat .nvmrc && grep -n '"node"' package.json
```

Minors and patches are Dependabot's. Yours are the majors: each one alone on its branch, reading
the upstream migration guide, with `bin/check` green and the built CSS unchanged unless the major
is meant to change it:

```bash
mkdir -p tmp && npm run build:css && cp dist/cybercore.css tmp/before.css   # on main, before the bump
# after the bump:
npm run build:css && diff tmp/before.css dist/cybercore.css && echo "dist identical"
```

Sass, PostCSS, cssnano and autoprefixer majors can change the output: a diff there is reviewed line
by line, and a changed browserslist default is a browser-support change (§4). Node: when a new
LTS line is the active one (`https://nodejs.org/en/about/previous-releases`), move `.nvmrc` and
`engines.node` together. Every devDependency stays a devDependency: the package has no runtime
dependencies.

## 3. Accessibility and visual regressions

```bash
bin/check                                   # includes the unit suite and the build
npm run build && npm run test:visual        # Playwright screenshots of every demo page, in the pinned Docker image
bin/dev --detach                            # the demo at http://127.0.0.1:5173/cybercore-css/
```

With the browser tools (Playwright MCP, `.mcp.json`), on the demo's component, effect and
utility pages (`/cybercore-css/components/<name>` and so on; the index pages link them all):

- **Keyboard**: Tab through every interactive example. Each has a visible focus ring
  (`:focus-visible`), in an order that follows the layout; tabs, modal, dropdown and
  accordion open, close and are reachable without a pointer, with the keys their demo page documents.
- **Contrast**: read computed `color` and `background-color` for body text, button labels, badge
  and alert text, placeholders and disabled states in each colour variant. 4.5:1 for text, 3:1 for
  large text and for the boundaries of controls. Neon on dark usually passes; dark text on a neon
  fill and dimmed "ghost" variants are where it fails.
- **Reduced motion**: emulate `prefers-reduced-motion: reduce`; nothing animates beyond a fade,
  glitch and scanline effects are still. Then `grep -rLn 'prefers-reduced-motion' $(grep -rl -E '@keyframes|animation:' src/scss)`
  lists SCSS files that animate with no reduced-motion rule.
- **Small screens**: 390 px wide, no horizontal scroll, tables and the nav still usable.
- **Forced colours**: emulate `forced-colors: active`; controls keep a visible boundary.

A failure is a row: fix it in the SCSS with a test that asserts the rule is in the built CSS, and
re-render a baseline only for an intended change (`npm run build && npm run test:visual:update`,
with the before and after images in the pull request). `bin/stop` when done.

## 4. Browser support and new CSS

The README states a support floor and the framework is built on cascade layers, `color-mix()`,
container queries and custom properties. Each month, check what moved:

| Question | Where to look |
|---|---|
| Which features became Baseline widely available since last month? | `https://web-platform-dx.github.io/web-features/` and `curl -s https://unpkg.com/web-features/data.json \| jq -r '.features \| to_entries[] \| select(.value.status.baseline=="high") \| [.value.status.baseline_high_date, .key] \| @tsv' \| sort \| tail -40` |
| Does the built CSS use anything newer than the stated floor? | `npx --yes doiuse@latest --browsers "$(cat .browserslistrc 2>/dev/null \|\| echo 'chrome >= 111, firefox >= 121, safari >= 16.2')" dist/cybercore.css` (use the floor the README states) |
| What do the release notes say? | `https://developer.chrome.com/release-notes`, `https://www.mozilla.org/firefox/releases/`, `https://webkit.org/blog/` |

Worth adopting when widely available and when it removes a workaround or a JavaScript need:
`light-dark()` and `color-scheme`, `@property` for animatable tokens, `@starting-style` and
`transition-behavior: allow-discrete` (entry and exit animation for `<dialog>` and popover),
the `popover` attribute and anchor positioning (dropdowns and tooltips with no script),
`interpolate-size` (animate to `height: auto`), `:has()`, `text-wrap: balance`, `field-sizing`,
native nesting, `@scope`, scroll-driven animations, relative colour syntax, `oklch()`. A feature
that is only newly available may ship behind `@supports` as an enhancement with a fallback that
works on the stated floor. Raising the floor itself is breaking: it escalates to the owner. The
README's browser table and `llms.txt` must state exactly what the built CSS needs.

## 5. Pick at most three improvements, in this order

1. A row from §1 or §3: a person waiting, or something a user sees.
2. A major from §2 that blocks security updates or a current Node.
3. A row from §4.
4. Docs drift: every class, token, import path and CDN URL in `README.md`, `llms.txt`,
   `docs/UTILITIES.md` and the demo's code samples exists in `dist/cybercore.css` at head
   (`grep -oE 'cyber-[a-z0-9_-]+' llms.txt | sort -u` against the classes in the build); every
   command in `CLAUDE.md` and `CONTRIBUTING.md` still runs.
5. Simplification: a token nothing reads, a duplicated rule, a mixin with one caller, an unused
   devDependency (`npx --yes knip`), an asset nothing links.

## 6. Ship

This run delivers one pull request: the highest-ranked improvement, small and reviewable, titled
with what it changes. File each of the others (two at most) as its own ask, with the evidence. The
body gives the evidence: the contrast ratio before and after, the snapshot diff, the upstream
release URL, the Baseline date. A visible change carries screenshots at 1440 and 390 wide.
User-visible changes get a CHANGELOG `## [Unreleased]` entry. Never bump the version here (the
`release-due` checkup does that); a breaking change (a class or token removed or renamed, a raised
floor) escalates to the owner instead of merging.

A change under `.github/` (a matrix row, a new job or step, a workflow) never shares a pull request
with code. Open it on its own and say in the body that it changes CI: the platform's merge gate
proves only an action pinned to a commit SHA or a narrowed permission on the agent's own pull
requests, and holds every other workflow edit for the owner. Never edit `.dz/maintainer/` here.

If nothing is worth changing this month, do nothing: no empty PRs, no churn.
