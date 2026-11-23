# Releasing cybercore-css

`"version"` in `package.json` is the single source of truth. **Merging a pull request that
changes it is the release.** Nobody tags or runs `npm publish` by hand: the tag is an output of
the release, created only after npm has the package.

## Cutting a release

1. Bump the version without tagging: `npm version <patch|minor|major> --no-git-tag-version`
   (Semantic Versioning; a prerelease such as `1.0.0-rc.1` is published under the `next`
   dist-tag and marked as a prerelease on GitHub). This updates `package.json` and
   `package-lock.json`; commit both.
2. In `CHANGELOG.md`, move the `## [Unreleased]` entries into a new
   `## [<version>] - YYYY-MM-DD` section and leave an empty `Unreleased` on top. That
   section's body becomes the GitHub Release notes verbatim, so write it for users. Check it:
   `scripts/changelog-notes.sh <version>`.
3. Update every `cybercore-css@<x.y.z>` URL in `README.md` and `llms.txt` to the new version
   (`bin/repo-guards` fails until they match).
4. `bin/check`, then open the pull request titled `release: <version>` with only the release
   in it. Let `CI OK` go green, merge.

## What CI does (`.github/workflows/release.yml`)

On a push to `main` that touches `package.json` (or a manual run on `main`):

1. **version**: reads the version, asks registry.npmjs.org whether it exists, and checks
   whether the GitHub Release exists. A tag already pointing at another commit for an
   unpublished version fails the run. When the release is still to be created, the CHANGELOG
   section must exist.
2. **verify**: runs the whole CI workflow (`ci.yml`) — only if the version is not on npm yet.
3. **publish**: `npm run build:css`, then
   `npm publish --provenance --access public --tag <latest|next>` through npm trusted
   publishing (OIDC, environment `release`, no token). Skipped when the version is already
   on npm: a published version is never published again.
4. **github-release**: creates tag `v<version>` and the GitHub Release with the CHANGELOG
   notes, attaching the tarball npm serves plus `cybercore.css` and `cybercore.min.css` from
   it (never a rebuild). After a publish in the same run the tag is the commit that was
   built; otherwise it is the newest commit on `main` that set that version.

A `package.json` change that keeps the version (a dependency bump) runs only the **version**
job: the version is on npm and the release exists, so nothing else runs.

Once published, the CDNs serve it with no further step:

- `https://cdn.jsdelivr.net/npm/cybercore-css@<version>/dist/cybercore.min.css`
- `https://unpkg.com/cybercore-css@<version>/dist/cybercore.min.css`

## If a release fails

- Before npm had the package: fix on `main` (keep the same version) — the next push to
  `package.json` or a manual run (Actions → Release → Run workflow, on `main`) starts over.
- After npm had it (only the GitHub step failed): run the workflow by hand, or re-run the
  failed job. It sees the version on npm, skips verify and publish, and creates the tag and
  release. Do this before the next version bump merges: the run reads the version from
  `main`, so once `main` names a newer version the older release has to be created by hand
  (`gh release create v<version> --target <the commit that set it>`).
- A version that reached npm is never republished or reused. A broken one is deprecated
  (`npm deprecate cybercore-css@<version> "<why>"`) and fixed in a new patch version.

## One-time setup

- npmjs.com → `cybercore-css` → Settings → Trusted publisher → GitHub Actions: organization
  or user `sebyx07`, repository `cybercore-css`, workflow filename `release.yml`, environment
  `release`. Then, under Publishing access, choose "Require two-factor authentication and
  disallow tokens" and revoke any old automation token.
- GitHub → Settings → Environments: an environment named `release` (deployment branches:
  `main` only). No secrets are needed; delete any old `NPM_TOKEN` secret.
- GitHub → Settings → Pages: source "GitHub Actions" (`deploy.yml` publishes the demo).
- Branch ruleset on `main`: require the `CI OK` status check.
