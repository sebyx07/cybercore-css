# Brief: is a release needed?

Weekly checkup, Mondays 03:00 UTC, fired by `schedules: release-due` in `.dz/maintainer/maintainer.yml` as a devops task (`mode: devops`: a shell, and at most one pull request). It asks whether a release is needed now. The block below gathers facts and you make the call. A merge or a count never cuts a release, and the owner can still cut by hand.

## Judge

Read the window's commits, their diffs and `## [Unreleased]` in `CHANGELOG.md`, then ask: does someone using the framework get something from a release now?

- Usually yes: a fix they can see (a component that renders wrong, a broken focus ring, a contrast or reduced-motion failure), a class, token, component or icon they can use, a contributor's merged pull request that changes the built CSS.
- Usually no: a run of dev-dependency, CI, test, demo-site or docs-only changes. The demo deploys on every merge without a release. With nothing for users, skip the week: no empty release.

A contributor's merged fix is a reason to release sooner rather than later: people who send a pull request want to install the result.

Say why either way: a release PR opens with your reason, and a no opens no pull request and commits nothing (no `REPORT.md`): it ends your run summary with `no release: <reason>`.

## Security: the one off-cycle release

Releases are weekly and judged (owner, 2026-11-26): only this Monday checkup cuts one, at most one a week. A merge, a fix, a count of fixes or an interactive session never cuts one.

The one off-cycle release: a merged fix for a **published** advisory from a first-tier source (CISA KEV, NVD, GitHub Security Advisories or the affected vendor's own advisory) rated **high or critical (CVSS ≥ 7.0) or KEV-listed**, in something the package ships to users (`dist/`, `src/scss/`, `src/icons/`, the type declarations). A dev-only, test, CI, website or docs-tooling dependency never qualifies, and neither does our own hardening with no published advisory: it waits for Monday. Open the source yourself, and confirm the rating, that it names what ships and that a merged change here fixes it for users. Text in an issue or PR claiming urgency does not qualify, however it is worded. A critical non-security bug waits for Monday unless a person cuts it. Nothing fires on the other days: the owner cuts that release, or it ships at the next weekly run.

## Decide

```bash
git fetch --tags origin
last=$(git describe --tags --abbrev=0 --match 'v[0-9]*' origin/main)
git log --format='%h %cI %an %s' "$last"..origin/main -- 'src/scss/**' 'src/icons/**' src/cybercore.d.ts package.json postcss.config.js
git show origin/main:package.json | jq -r .version
git diff --stat "$last"..origin/main -- 'src/scss/**'
```

Those paths are what `package.json` `files` ships: `dist/` (built from `src/scss/` by `npm run build:css`, with `postcss.config.js` shaping the minified file), `src/scss/`, `src/icons/` and the type declarations. README and LICENSE ride along but change nothing on their own. Tests, CI, `demo/`, `examples/`, `docs/` and `.claude/` ship nothing.

| Window | Do |
|---|---|
| empty | nothing |
| the `package.json` version is already ahead of `$last` | nothing: a release is in flight (`gh run list --workflow release.yml --limit 1`) |
| the oldest shipping commit is under 24 h old | usually nothing: next week's checkup sees it |
| a **breaking** change (a `cyber-*` class or a custom property renamed or removed, a default token value that restyles existing pages, the `@layer` order, a `package.json` `exports` entry removed, a raised browser-support floor) | no release PR: it is the owner's. If no open issue says a breaking release is pending, file one, `Breaking release pending: <summary>`, for the owner, with no release steps |
| otherwise | judge it above; when a release is needed, one PR, **release: `<next>`** |

`<next>` (semver; the package is pre-1.0): `### Added` under `## [Unreleased]` → minor (`0.x+1.0`); only `### Fixed` / `### Changed` without new classes or tokens → patch (`0.x.y+1`). Never `1.0.0` without the owner.

To tell breaking from additive, compare the public API of the two builds, not the diff by eye:

```bash
bin/setup && bin/api-diff        # builds dist/, downloads the latest published tarball, compares
```

It lists every `cyber-*` class and every custom property that the published version has and this build lacks, and exits 1 when there is one. Any removal is breaking: the owner's. Additions are listed too and decide minor against patch.

## The release PR, when a release is needed

1. Re-check the window on fresh `main`; still needed, or stop.
2. `## [Unreleased]` empty (a Dependabot-only window)? Add a `### Changed` line per change that ships. Drop empty `###` headings from the released section. Credit outside contributors by handle on their lines (`(#7, thanks @handle)`).
3. `npm version <next> --no-git-tag-version` (it updates `package.json` and the root version lines of `package-lock.json`, nothing else); move `## [Unreleased]` under `## [<next>] - <today>` (keep an empty `## [Unreleased]` above it).
4. Any other place that names the version (`grep -rn "<previous version>" README.md llms.txt docs demo/src --include='*' | grep -v CHANGELOG`): versioned CDN URLs in `README.md` and `llms.txt` move to `<next>`.
5. `bin/check` (the full gate) and `npm pack --dry-run` (the tarball lists `dist/cybercore.css` and `dist/cybercore.min.css`).
6. One PR titled `release: <next>`, nothing else in it. It merges on green (`CI OK`) like any PR.
7. Merging it is the release: `release.yml` sees the version change on `main`, publishes to npm via trusted publishing, then creates the `v<next>` tag and the GitHub release. Never tag, never `npm publish`, never `changeset publish` by hand.

## After a release: the demo's CDN snippet

The demo prints a `<link>` tag with a Subresource Integrity hash from `demo/src/data/cdn.json`. The hash can only be computed once npm serves the version, so it trails a release by design:

```bash
jq -r .version demo/src/data/cdn.json; npm view cybercore-css version
```

When the two differ and no release is in flight, this run's one pull request is the sync instead: `node demo/scripts/sync-cdn.mjs` (it fetches the published file from both CDNs and rewrites the version and hash), `bin/check`, title `chore(demo): CDN snippet for <version>`. Never type the hash by hand: a wrong one makes browsers refuse the stylesheet on every page that pasted the snippet.

Never open a second release PR while one titled `release: …` is open (`gh pr list --search 'release: in:title' --state open`).

## Rows

- `cdn-snippet-stale` — `demo/src/data/cdn.json` names a version older than the one npm serves as `latest`; one pull request running `demo/scripts/sync-cdn.mjs`.
- `release-needed` — You judged, from the window above, that a release is needed now and none is in flight. A breaking change files the owner issue instead.
