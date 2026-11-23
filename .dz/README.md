# `.dz/`

Repo-scoped configuration for the [developerz.ai](https://developerz.ai) maintainer agent, which runs
this repository as an AI-managed project.

- `maintainer/maintainer.yml`: the maintainer policy (triage, PRs, review, releases, schedules).
- `maintainer/reviewer.md`: this repo's layer of the reviewer prompt (what to reject, what never to flag).
- `pipeline/agent-pipeline.json`: the agent pipeline definition.
- `schedules/`: the scheduled checkup briefs (`health`, `release-due`, `security-release`, `improve`) the policy fires.
- `onboarding/scorecard.md`: the AI-first scorecard; each onboarding run rewrites it.

Releasing is merging a `package.json` version bump to `main`: `.github/workflows/release.yml`
publishes `cybercore-css` to npm through trusted publishing (OIDC, no token), then tags it and
creates the GitHub release. Nobody tags or runs `npm publish` by hand.

Outside contributors are welcome: their CSS, demo and docs pull requests merge on green like
anyone's. Changes to CI, release or publish automation stay with the owner.

Agent instructions for working on the code live in `CLAUDE.md`. The gate is `bin/check` locally and
the `CI OK` check on GitHub.
Docs: https://developerz.ai/docs/maintainer-yml
