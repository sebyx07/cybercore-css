# Deployment

Two lanes, both from `main`, both through GitHub Actions. Nothing is published by hand.

- **The npm package.** Merging a pull request that changes `version` in `package.json` is the
  release: `.github/workflows/release.yml` runs the whole CI workflow on that commit, publishes to
  npm through trusted publishing (OIDC, with provenance; no token), then creates the tag and the
  GitHub release from the version's `CHANGELOG.md` section. jsDelivr and unpkg serve the published
  `dist/` files. The weekly `release-due` checkup decides when a release is due and opens that pull
  request. Procedure and recovery: `RELEASE.md`.
- **The demo site.** `.github/workflows/deploy.yml` builds the CSS and the demo on every push to
  `main` and deploys it to GitHub Pages at https://sebyx07.github.io/cybercore-css/.

Outcome checks: the daily `health` checkup (`.dz/schedules/health.md`) verifies that `main` is
green, the site answers, npm serves the `package.json` version, the release is tagged and the CDN
serves the file.
