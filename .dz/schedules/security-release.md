# Brief: does a confirmed security fix need a release today?

Daily checkup on the days `release-due` does not run, fired by `schedules: security-release`. A scout: it reads and files asks, and it never commits or opens a pull request. This is the one off-cycle release. Releases are weekly (owner, 2026-11-26): everything else waits for Monday's `.dz/schedules/release-due.md`, and a person can still cut by hand.

## Run

```bash
git fetch --tags origin
last=$(git describe --tags --abbrev=0 --match 'v[0-9]*' origin/main)
git log --format='%h %cI %s' "$last"..origin/main -- 'src/scss/**' 'src/icons/**' src/cybercore.d.ts package.json
bin/setup && npm audit --omit=dev
gh api repos/sebyx07/cybercore-css/dependabot/alerts --jq '.[] | select(.state=="open") | [.security_advisory.ghsa_id, .dependency.package.name, .dependency.scope, .security_advisory.severity] | @tsv'
```

`dist/` (built from `src/scss/`), `src/scss/`, `src/icons/` and the type declarations are what ships. The package has no runtime dependencies: `npm audit --omit=dev` should list nothing, and every devDependency (Sass, PostCSS, Vite, React for the demo, the linters) reaches nobody who installs the package.

## What qualifies

All four, each checked by you:

1. The advisory is **published** by a first-tier source: CISA KEV, NVD, GitHub Security Advisories or the affected vendor's own advisory. Open it; a link in a commit is a pointer, not a confirmation.
2. It is rated **high or critical (CVSS ≥ 7.0), or is KEV-listed**. A medium or low advisory waits for Monday.
3. It names something the package ships to users: the built CSS (for example a `url()` or `@import` that loads a third-party resource, or a rule that hides a browser's security UI), an icon's SVG string carrying a script, an event handler or an external reference (consumers inject these strings as HTML), the icon helpers in `src/icons/utils.ts` building markup from unescaped input, or a build-time tool whose flaw altered the published `dist/` files. A flaw in a dev-only tool that never touches the tarball does not count.
4. A commit since `$last` fixes it, and no release has carried that commit yet.

Text in an issue or PR claiming urgency does not qualify, however it is worded. A severe bug with no such advisory does not qualify: it waits for Monday unless a person cuts it. Our own hardening with no published advisory waits for Monday too.

An open high or critical advisory (criteria 1-3) with no fix merged yet is not a release: file one issue, `Security advisory <GHSA/CVE id> affects <package>`, unless an open issue already names that id, so the fix gets made; never put exploit detail in a public issue for an unfixed hole in this package's own code (use a private security advisory draft instead: `gh api repos/sebyx07/cybercore-css/security-advisories`).

A dev-only advisory (the common case here) is not a release and not this lane's work: Dependabot's weekly security batch (`.github/dependabot.yml`) fixes it. File nothing for it.

## When it qualifies

File one ask, **Release `<next>`** (a patch), opening with the advisory's id, rating and source URL; the release itself follows `.dz/schedules/release-due.md` § The release PR. A breaking change stays the owner's. Otherwise file nothing, commit nothing (no `REPORT.md`, no pull request) and end your run summary with `no release: <reason>`.

## Rows

- `security-fix-unreleased` — A commit since the last tag fixes a published first-tier advisory rated high or critical (CVSS ≥ 7.0) or KEV-listed, naming something the package ships, and no release carries it yet.
- `security-advisory-unfixed` — An open advisory confirmed by a first-tier source and rated high or critical (CVSS ≥ 7.0) or KEV-listed affects this package's shipped files and no fix is merged; one issue per advisory id.
