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

Outcome checks: a workflow run is its own verdict, and the platform files a fix when `main` is red. Nothing polls the published package or the site on a schedule: the `health` checkup was removed on 2026-11-28 (across the fleet it fired 270 times in 30 days and produced no merged fix).
