# Principles

The product's promises are the invariants in `CLAUDE.md` § Invariants; this page says why they
exist, and does not restate them.

- **A `<link>` tag is the contract.** Most users copy a pinned CDN URL and never read a changelog,
  so a renamed class, a removed token or a changed layer order breaks their page silently. Public
  names only grow; removals wait for a major release and the owner (`bin/api-diff`).
- **CSS only.** Shipping no script keeps the framework usable from any stack, server-rendered or
  not, and leaves behaviour to the page. Native state and ARIA carry what a class used to.
- **Users win the cascade.** Everything sits in cascade layers with low specificity, so a user's
  one-class rule overrides the framework without `!important`. Theming is overriding tokens.
- **Accessible by default.** Visible focus, WCAG AA contrast, reduced motion, high contrast and
  forced colours are the framework's job, not each user's.
- **Small for every user.** The CDN bundle is what every page downloads: it has a gzip budget
  (`scripts/check-size.ts`), and a module joins the default bundle only when most users need it.
- **Docs are true.** A class or token named in `README.md`, `llms.txt` or `docs/` exists in the
  build (`bin/docs-check`).
