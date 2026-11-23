---
description: Prepare a cybercore-css release pull request — bump package.json, move CHANGELOG Unreleased into a dated section, update versioned URLs, verify. Merging that pull request publishes to npm through CI.
argument-hint: "[patch|minor|<version>]"
---

Prepare the release pull request for cybercore-css. Merging it is the release: `.github/workflows/release.yml` publishes to npm when `package.json`'s version changes on `main`, then creates the tag and the GitHub release. Never `npm publish`, `changeset publish`, `git tag` or `gh release create` by hand.

The procedure, the judgment (is a release needed, patch or minor, what is breaking) and the checks are in `.dz/schedules/release-due.md`: follow § Decide and § The release PR exactly. `$ARGUMENTS` overrides only the choice of `<next>`.

Stop and ask the owner when `bin/api-diff` reports a removal, when the next version would be `1.0.0`, or when a release pull request is already open.
