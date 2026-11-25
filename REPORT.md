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
