# CDN release check

## Symptom

The demo CDN snippet names 0.3.0 although npm serves 0.4.0. The scheduled check also asked whether another release is due. The prior checkup filings signal was unavailable.

## Evidence

The npm registry latest endpoint returned version 0.4.0. Before the change, `demo/src/data/cdn.json` named 0.3.0. `git log v0.4.0..HEAD` restricted to shipped source, package metadata and PostCSS configuration printed no commits. `CHANGELOG.md` has an empty Unreleased section. The only open pull request listed was #25, not a release PR. The latest Release workflow runs listed were completed, not in flight.

`node demo/scripts/sync-cdn.mjs 0.4.0` printed `cdn.json -> cybercore-css@0.4.0 sha384-WyCCl+C5Ikkr1xXPvujOomV7GKlsHUrbi47FyEUCrjbi5a3xmS7bVwWneQq90rTT` after comparing both CDNs. The initial `npm view` failed because the shell used Node 22 rather than the required Node 24; the public registry endpoint confirmed the version, and `bin/setup` installed dependencies with Node 24.

## Root cause

The release was published but the demo's separately maintained CDN data had not been refreshed. There are no subsequent shipping commits to justify another release.

## Fix

Regenerated `demo/src/data/cdn.json` using the repository script, which checks both CDN responses before writing their shared integrity hash. No release bump was made. The checkout's `origin/main` was at the same commit as HEAD; a fresh fetch is not available under the runner's git restrictions.

## Verify

Run `bin/check`. This run printed `bin/check full: GREEN`. The running Vite server returned the new version and integrity from `/cybercore-css/src/data/cdn.json`. Browser verification was not completed: the browser tool refused the open request with `[code.browser] give role/name OR selector for one target, not both`, so rendering and browser console logs remain unverified.

no release: no shipped changes since v0.4.0.

# Security release check

## Symptom

The scheduled security-release check asks whether a shipped security fix needs an off-cycle release, or whether an open advisory needs follow-up. The previous checkup's filings signal was unavailable.

## Evidence

The checkout and the current default branch resolve to `ce5b8ee`, later than the scheduled signal. `git describe --tags --abbrev=0 --match 'v[0-9]*' HEAD` returned `v0.4.0`. `git log --format='%h %cI %s' v0.4.0..HEAD -- 'src/scss/**' 'src/icons/**' src/cybercore.d.ts package.json postcss.config.js` and the corresponding `git diff --stat` returned no output. `CHANGELOG.md` has an empty Unreleased section.

The first `npm audit --omit=dev` failed because Node 22 did not satisfy the required Node 24: `EBADDEVENGINES Invalid semver version ">=24" does not match "v22.23.2"`. `bin/setup` selected Node v24.22.3 and installed dependencies. With that Node, both `npm audit --omit=dev` and `npm audit` printed `found 0 vulnerabilities` and exited 0.

GitHub's open issues listing returned `(none)`. The available GitHub reader does not expose Dependabot alerts or pull request listings, and no connected MCP server supplies them. Thus alert state, alert age, and matching Dependabot pull requests were not checked. Tags were not fetched because this run has read-only git access; the local tag agrees with the release version in the checkout, but remote tag freshness is unverified.

## Root cause

No failure or confirmed advisory affecting shipped files was reproduced. The local post-release shipping window is empty, and the npm audit found no known dependency vulnerabilities. These observations do not establish that GitHub has no open alerts, particularly alerts not represented by the npm audit.

## Fix

No release or dependency change was made: there is no confirmed qualifying fix or known overdue dependency advisory in the evidence available. Access to a GitHub Dependabot alerts and pull requests reader is needed to complete the scheduled alert and age checks. No production changes were made.

## Verify

Run `source bin/_dx.sh; use_node; npm audit --omit=dev && npm audit`. Both audits printed `found 0 vulnerabilities` here. Separately, an authorized GitHub reader must inspect open Dependabot alerts and matching pull requests.

no release: no confirmed unreleased security fix was found; GitHub alert coverage remains unverified.
