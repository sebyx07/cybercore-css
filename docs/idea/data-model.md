# Data model

> established by the developerz.ai maintainer agent for the maintainers of this repository from what onboarding read and ran in this repo, then owned by
> its maintainers. Correct it in place; setup never overwrites a page that exists.

CSS custom properties define all design tokens. Four accent color scales (cyan, magenta, yellow, green) each with 100-900 values: `--cyber-cyan-500`, etc. Neutral scales: `--cyber-void-*` for dark backgrounds, `--cyber-chrome-*` for grays. Spacing: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`. Typography: `--font-mono`, `--font-sans`, `--font-size-sm` through `--font-size-2xl`. Shadows and glows: `--glow-cyan`, `--glow-magenta`, `--shadow-md`, etc. All stored in `src/scss/core/_variables.scss`. Icons are TypeScript objects with `name`, `category`, `description`, `svg` string, optional `variants` object. SVG uses `viewBox="0 0 24 24"`, `stroke="currentColor"` for theming, 1.5px stroke width.
