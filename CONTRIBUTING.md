# Contributing to CYBERCORE CSS

Bug reports, ideas and pull requests are welcome, including small ones: a one-line CSS fix is a real contribution, and several of this project's fixes came from people sending exactly that. AI-assisted contributions are welcome too; the same checks apply.

Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md). Security problems go to [SECURITY.md](SECURITY.md), not to a public issue.

## Setup

You need Node (the version in `.nvmrc`, or newer) and npm.

```bash
git clone https://github.com/YOUR_USERNAME/cybercore-css.git
cd cybercore-css
bin/setup          # installs dependencies (npm ci)
bin/dev            # demo site with hot reload: http://127.0.0.1:5173/cybercore-css/
```

Edit a file under `src/scss/` and the demo updates at once.

## Before you open a pull request

```bash
bin/check          # the same gate CI runs: guards, linters, formatting, types, tests, build
```

`bin/check fast` is the quick version while you iterate, and `bin/check --help` lists what each mode runs. If something fails, the last lines name the failing command and how to rerun only that step. `npm run lint:fix` and `npm run format` fix most style complaints for you. Exit code 75 means your environment is missing something (run `bin/setup`), not that your change is wrong.

Prefer plain npm? `npm ci`, then `npm run lint && npm test && npm run build` covers most of it.

Stuck on a failing check you cannot make sense of? Open the pull request anyway as a draft and say where you are stuck. The maintainer can help finish it.

## What a good change looks like

The full rules, with the reasons, are in [`src/scss/CLAUDE.md`](src/scss/CLAUDE.md). The short version:

1. **Pure CSS.** The framework ships no JavaScript. State is styled from native HTML state (`:checked`, `:disabled`, `<details>`, `<dialog>`, `popover`) or from ARIA attributes (`[aria-selected="true"]`, `[aria-expanded="true"]`), rather than from a new script-only class. Prefer designs that need no script at all.
2. **`cyber-` BEM names.** `.cyber-block`, `.cyber-block__element`, `.cyber-block--modifier`.
3. **Names are forever.** A class or a custom property that has shipped is public API: add new ones, do not rename or remove existing ones. `bin/api-diff` shows what a change adds or removes against the published package.
4. **Use the tokens.** `var(--cyber-cyan-500)`, `var(--space-md)`, not hardcoded colours, spacing or fonts.
5. **Stay in the layer.** Component rules go inside `@layer components`, utilities inside `@layer utilities`.
6. **Accessible by default.** Style `:hover`, `:focus-visible` and disabled states; keep text contrast at WCAG AA (4.5:1); give every animation a `prefers-reduced-motion: reduce` rule.

For a new component, variant, utility or token, also add:

- a test in `tests/` asserting the class or token is in the built CSS,
- an example in the demo (`demo/src/`),
- a line in [`llms.txt`](llms.txt) (the reference AI tools read) and, for a utility, [`docs/UTILITIES.md`](docs/UTILITIES.md),
- a line under `## [Unreleased]` in [CHANGELOG.md](CHANGELOG.md).

Missing one of these on a first contribution is fine: say so and the maintainer adds it.

Icons: see [`src/icons/README.md`](src/icons/README.md). 24x24 viewBox, `stroke="currentColor"`, 1.5 stroke width, and `npm run validate:icons` must pass.

## Pull requests

1. Branch from `main`; one concern per pull request.
2. Commit messages follow [Conventional Commits](https://www.conventionalcommits.org) where you can (`fix: center the spinner`, `feat: add cyber-input-group`). It is not a reason to reject a pull request.
3. For a visible change, add a before/after screenshot.
4. Keep it a draft until it is ready for review.

## How pull requests get merged

This repository is maintained by [developerz.ai](https://developerz.ai). Its agent reviews every pull request, may ask for changes, and merges every pull request (contributors, members, bots) once you mark it ready for review and the `CI OK` check passes. The policy is in [`.dz/maintainer/maintainer.yml`](.dz/maintainer/maintainer.yml). Good to know:

- On your first pull request, GitHub waits for a maintainer to approve the CI run. No check results yet means it is waiting for that, not that something is broken.
- Commit with an email linked to your GitHub account so the contribution is credited to you.
- Changes to CI, release and publishing automation (`.github/`, `bin/`, `.dz/`, `.claude/`, and the `version`, `scripts`, `files` and `exports` of `package.json`) are made by the owner only. Leave them out of your pull request so the rest can merge.
- Breaking changes (removing or renaming a class or token, raising the browser-support floor) are the owner's decision: open an issue first.

You do not need to do anything for a release. Releases are cut by merging a version bump; your change ships in the next one and you are credited in the changelog and the README.

## Reporting bugs and asking for features

Use the issue forms. For a bug, the most useful thing is the smallest HTML that shows it, the `cybercore-css` version, and the browser. A screenshot helps for anything visual.

## Working with AI coding agents

[`CLAUDE.md`](CLAUDE.md) holds the agent instructions (`AGENTS.md` points at the same file): commands, layout, invariants, how to verify a change. Skills and reviewer agents live in `.claude/`.

## License

By contributing you agree that your contributions are licensed under the [MIT License](LICENSE).
