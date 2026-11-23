# AI-first scorecard

> Hand-written for the AI-maintenance onboarding pass of 2026-11-22, describing the repository as
> it stands once that pass's pull request merges. The next developerz.ai onboarding run rewrites
> this file whole; the latest run wins, and the same card is stored on the platform.

- Computed: 2026-11-23
- Proof: **not yet proved on GitHub** — written before the pass merged. Local results are named
  per item; the workflows have not run on GitHub yet, and items marked _pending_ depend on a
  repository or registry setting.
- Score: 13 of 15 items ok, 2 pending

## `policy` — ok

- .dz/maintainer/maintainer.yml established (validates against maintainer.v1.json; `dz-contract` answers ok)
- .dz/maintainer/reviewer.md established (CSS, accessibility and visual focus; community tone)
- .dz/schedules/{health,release-due,security-release,improve}.md established
- .dz/pipeline/agent-pipeline.json established

## `brain` — ok

- CLAUDE.md rewritten (it described a tag-push release, hash routes and husky, all gone); under the 12,000-character cap, enforced by bin/repo-guards
- nested: src/scss/CLAUDE.md (design rules), demo/CLAUDE.md, .github/CLAUDE.md

## `roster` — ok

- .claude/agents/visual-a11y-reviewer.md (replaces browser-visual-debugger) and svg-artist.md

## `skills` — ok

- .claude/skills/verify-change and .claude/skills/add-component established

## `scripts` — ok

- bin/setup, bin/dev, bin/stop, bin/check, bin/repo-guards, bin/api-diff, bin/docs-check established
- bin/check exits 75 when Node or node_modules is missing
- down: bin/stop

## `wiring` — ok

- .mcp.json established: playwright, pinned to an exact version, no secret

## `commands` — ok

- .claude/commands/release.md (prepares the release pull request; never publishes)

## `access` — pending

- no secret is needed: npm publishing is trusted publishing (OIDC) from the `release` environment
- the trusted publisher must be configured once on npmjs.com by the owner (RELEASE.md § One-time setup); until then the first release run fails at `npm publish`

## `layout` — ok

- single package at the root; demo/ is the documentation site and is not published

## `smoke_test` — ok

- `npm run check:package` packs the tarball, installs it into an empty project and uses it (Sass `pkg:` import, CSS entry points, the icons module); tests/visual shoots every demo page

## `env_example` — ok

- nothing to configure: no .env is read, .mcp.json interpolates no variable

## `agents_md` — ok

- AGENTS.md is a symlink to CLAUDE.md (bin/repo-guards checks); llms.txt is the reference for tools that use the framework (bin/docs-check proves every class it names exists)

## `per_workspace_brains` — ok

- single-package repository: 0 workspaces

## `docs_readme` — ok

- README.md rewritten; docs/UTILITIES.md, CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md, RELEASE.md, CHANGELOG.md

## `gate_proved` — pending

- bin/check: see the pass's pull request for the run at head
- ci.yml (`CI OK` aggregate), release.yml and the hardened deploy.yml have not run on GitHub yet
- no ruleset exists on `main` yet (`gh api repos/sebyx07/cybercore-css/rulesets` answers `[]`): the required check `CI OK` is a repository setting the owner adds
