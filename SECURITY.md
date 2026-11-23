# Security Policy

## Supported versions

Only the latest release on [npm](https://www.npmjs.com/package/cybercore-css) gets security fixes. Fixes land on `main` and ship in the next release.

## Reporting a vulnerability

**Report privately. Do not open a public issue or pull request:** both are public, and an AI agent triages them in the open.

- Preferred: [open a private security advisory](https://github.com/sebyx07/cybercore-css/security/advisories/new) (GitHub's "Report a vulnerability" form on the Security tab).
- Or by email to sebyx07.pro@gmail.com.

Include:

- what is affected: the `cybercore-css` version and how you load it (npm, a CDN `<link>`, the SCSS sources, the icon module)
- steps to reproduce, ideally a small HTML file
- the impact as you understand it

There is no fixed response time. Reports are read and fixed as maintainer time allows, and you are credited in the changelog unless you ask not to be.

## In scope

- The published CSS making a network request the user did not ask for (a remote `url()`, `@import` or font)
- An icon's SVG string carrying a script, an event-handler attribute, `<foreignObject>` or an external reference: these strings are meant to be injected as HTML
- The icon helpers (`cybercore-css/icons`) building markup from their arguments without escaping
- CSS that hides or spoofs browser security UI, or enables data exfiltration through selectors when the stylesheet is used as documented
- Anything in the published package, or in the workflow that builds and publishes it, that would let someone ship code the maintainers did not write (supply chain)

## Out of scope

- The demo site (`demo/`) and the `examples/` pages: they are documentation and are not part of the npm package
- Vulnerabilities in development-only dependencies that do not change the published files (report them upstream; Dependabot tracks them here)
- User-supplied CSS or HTML: a stylesheet cannot make untrusted markup safe, and sanitizing the content you render is your application's job
- Rendering differences or accessibility bugs: please open a normal issue, they are welcome
