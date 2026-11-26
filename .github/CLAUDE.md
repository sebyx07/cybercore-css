# .github/ — workflows, Dependabot, issue and pull-request forms

Read before editing anything here. A change under `.github/` never shares a pull request with framework or demo code, and outside contributors' changes to it are declined (owner only).

## What runs when

| File | Trigger | Does |
|---|---|---|
| `workflows/ci.yml` | every pull request, push to `main`, and `workflow_call` from `release.yml` | jobs `workflows` (actionlint + zizmor), `check` (`bin/check`), `audit` (`npm audit`; the size budget and `npm pack` + install run inside `bin/check`), `visual` (Playwright in a pinned Docker image), then the aggregate **`CI OK`** |
| `workflows/release.yml` | push to `main` touching `package.json`, or manual on `main` | publishes to npm only when the version is not on npm yet: `version` → `verify` (calls `ci.yml`) → `publish` (trusted publishing, environment `release`) → `github-release` (tag + release from CHANGELOG) |
| `workflows/deploy.yml` | push to `main` touching `demo/`, `src/`, `package*.json`; pull requests build only | builds the CSS and the demo, deploys `demo/dist` to GitHub Pages |
| `dependabot.yml` | weekly, Monday | npm and GitHub Actions: minor+patch as one PR per ecosystem, security updates batched into one more, majors individually, at most 3 open version-update PRs per ecosystem (security updates have Dependabot's own cap), 14-day cooldown; no auto-merge workflow |
| `zizmor.yml` | read by the `workflows` job | the one accepted zizmor exception, with its reason |

The release procedure, its failure modes and the one-time setup: `RELEASE.md`.

## Rules (each one has bitten somewhere)

- **`CI OK` is the only required check.** Add or rename jobs freely, but list every job in `ci-ok`'s `needs`, or it stops gating. Never `continue-on-error` on a job under it. `bin/repo-guards` fails if the job disappears.
- **The `check` job runs `bin/check`, bare.** Not `bin/check fast`, not a copy of its steps: that line is what makes "green locally" mean "green in CI". Guard: `bin/repo-guards`.
- **Pin every third-party action to a 40-character commit SHA**, with the tag as a trailing comment (`# v7.0.1`). Look one up: `gh api repos/<owner>/<action>/git/ref/tags/<tag> --jq .object.sha` (an annotated tag needs a second hop: `gh api repos/<owner>/<action>/git/tags/<sha> --jq .object.sha`). Guard: `bin/repo-guards`.
- **No dependency cache** in `ci.yml` or `release.yml` (`package-manager-cache: false`): `release.yml` calls `ci.yml` before it publishes, and a cache a pull request wrote must never be restored in that chain.
- **No token publishes.** `release.yml` uses npm trusted publishing (`id-token: write`, environment `release`). Never add `NPM_TOKEN` or `NODE_AUTH_TOKEN`. Guard: `bin/repo-guards`.
- **`permissions: contents: read` at the top** of every workflow; a job widens only what it needs. `persist-credentials: false` on every checkout. Never `pull_request_target`. Never an auto-merge workflow: the maintainer agent is the only merger.
- **The Playwright image is pinned three times**: `ci.yml` (`visual` job), `scripts/visual.sh`, and it must match `@playwright/test` in `package.json`. Bump all three together, then re-render the baselines (`npm run build && npm run test:visual:update`). Dependabot does not track the image.
- **`deploy.yml` keeps its file name**: the health checkup (`.dz/schedules/health.md`) and Pages read it by name. Same for `ci.yml` and `release.yml`.
- **Untrusted input never reaches a `run:` line by interpolation.** Pass `${{ … }}` values through `env:` and quote the variable, as the existing steps do. zizmor enforces it.

## Lint a workflow change locally

```bash
docker run --rm -v "$PWD:/repo" -w /repo rhysd/actionlint:1.7.12 -color
pipx run zizmor==1.33.1 .github/workflows
bin/repo-guards
```

Keep the two tool versions equal to the ones `ci.yml` names.

## Issue and pull-request forms

`ISSUE_TEMPLATE/*.yml` ask for what triage needs (`.dz/maintainer/maintainer.yml` `required_fields`): minimal HTML, expected, actual, version, browser. The version placeholder in `bug_report.yml` is static text; a release pull request may refresh it. `PULL_REQUEST_TEMPLATE.md` mirrors the checklist in `CONTRIBUTING.md`: change both together. Keep the tone welcoming: these are the first thing a new contributor reads.
