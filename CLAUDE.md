# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

CYBERCORE CSS is a pure CSS/SCSS cyberpunk design framework. No JavaScript in
the framework itself—React is only used for the demo site.

## Commands

```bash
# Development
npm run dev              # Watch CSS + demo site concurrently
npm run dev:css          # Watch SCSS compilation only
npm run dev:demo         # Start Vite dev server for demo

# Build
npm run build            # Build everything (CSS + demo)
npm run build:css        # Build expanded + minified CSS

# Linting
npm run lint             # Run all linters
npm run lint:css         # Stylelint for SCSS
npm run lint:js          # ESLint for demo TypeScript
npm run lint:fix         # Auto-fix lint issues
npm run format           # Prettier format all files

# Testing
npm run test             # Run Vitest unit tests
npm run test:watch       # Watch mode
npm run test:visual      # Playwright visual regression tests
npm run test:visual:update  # Update visual snapshots

# Type checking
npm run typecheck        # TypeScript check for demo
```

## Architecture

### CSS Framework (`src/scss/`)

Uses CSS `@layer` for cascade control with this priority order:

```
@layer reset, base, theme, components, utilities;
```

Entry point: `cybercore.scss` imports everything via `@use`.

**Structure:**

- `core/` - Variables (CSS custom properties), reset, base, typography, layer
  definitions
- `components/` - UI components (buttons, cards, inputs, modal, terminal, etc.)
- `effects/` - Visual effects (glitch, neon-border, scanlines, noise,
  datastream)
- `utilities/` - Helper classes (display, flex, grid, spacing, text, animation,
  accessibility)

All styles reference CSS custom properties from `_variables.scss`. Every
component/utility wraps its styles in the appropriate `@layer`.

### Class Naming Convention

All classes use `cyber-` prefix with BEM-style modifiers:

- Base: `.cyber-btn`, `.cyber-card`, `.cyber-input`
- Modifiers: `.cyber-btn--magenta`, `.cyber-btn--ghost`
- Elements: `.cyber-card__header`, `.cyber-card__body`

### Color System

Four accent colors with 100-900 scales:

- `--cyber-cyan-*` - Primary (tech/neutral)
- `--cyber-magenta-*` - Danger/errors
- `--cyber-yellow-*` - Warnings
- `--cyber-green-*` - Success

Background/neutral scales:

- `--cyber-void-*` - Dark backgrounds
- `--cyber-chrome-*` - Metallic grays

### Demo Site (`demo/`)

React + Vite + TypeScript using HashRouter for GitHub Pages compatibility.
Imports the framework from `../../src/scss/cybercore.scss`.

### Tests (`tests/`)

- `css-build.test.ts` - Verifies SCSS compiles without errors
- `css-output.test.ts` - Checks compiled CSS contains expected classes
- `variables.test.ts` - Validates CSS custom properties are defined
- `visual/` - Playwright visual regression tests

## Browser Visual Debugging

Use Chrome browser automation to debug and validate visual styling in real-time.
Start the dev server (`npm run dev`) first, then use browser tools to inspect.

**When to use browser debugging:**

- Verify CSS colors match design specs (check computed styles against variables)
- Debug alignment and spacing issues between elements
- Validate visual effects work correctly (glitch, neon-border, scanlines, etc.)
- Check responsive layouts at different viewport sizes
- Confirm hover/focus/active states render properly
- Debug z-index and overlay issues (dropdowns, modals)
- Take screenshots for visual documentation

**Common debugging tasks:**

```
# Check if a component uses correct color values
→ Navigate to demo, inspect element, read computed background-color

# Verify alignment across multiple elements
→ Take screenshot, check element positions via DOM inspection

# Debug why an effect isn't visible
→ Read computed styles, check opacity/visibility/z-index/pseudo-elements

# Validate responsive behavior
→ Resize viewport, take screenshots at different breakpoints
```

**Demo URL:** `http://localhost:5173` (Vite dev server)

**Key pages to check:**

- `/#/` - Home with hero and component showcase
- `/#/components` - All UI components
- `/#/effects` - Visual effects demos
- `/#/utilities` - Utility class examples

## Linting Rules

**SCSS (Stylelint):**

- BEM class naming pattern enforced
- CSS property order: position → display → box model → typography → visual →
  animation
- Max nesting depth: 4 (media queries don't count)
- Max specificity: `0,4,2`

**TypeScript (ESLint):**

- Strict TypeScript with type checking
- Consistent type imports (`import type`)
- Import order: builtins → external → internal → parent → sibling → type

## Key Constraints

- Framework is pure CSS—no JavaScript dependencies
- All components must support `prefers-reduced-motion`
- Demo uses HashRouter (`/#/path`) for GitHub Pages
- Node 20+ required
