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
- `icons.test.ts` - Validates icon registry and rendering
- `visual/` - Playwright visual regression tests

### Icons System (`src/icons/`)

Cyberpunk-themed SVG icon system. 150+ icon specs across 10 categories.

**Structure:**

- `types.ts` - TypeScript definitions (IconDefinition, IconVariant, etc.)
- `icon-list.ts` - Master list of all icons to be created (specs)
- `registry.ts` - Actual SVG implementations (add icons here)
- `individual.ts` - Tree-shakeable individual exports
- `utils.ts` - Rendering utilities (renderIcon, getIcon, etc.)
- `index.ts` - Main entry point with all exports

**Commands:**

```bash
npm run test:icons       # Run icon tests
npm run validate:icons   # Validate all icons in registry
```

**Icon Variants:**

- `outline` - Stroke-based, default style (1.5px stroke)
- `solid` - Filled icons for emphasis
- `duotone` - Two-tone with primary/secondary colors
- `glitch` - Animated/glitchy variant for cyber effects

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

## SVG Icon Artist Agent

Use this agent when creating cyberpunk-themed SVG icons for the icon system.

**When to use:**

- Creating new icons from the `icon-list.ts` specs
- Adding icon variants (solid, duotone, glitch)
- Batch generating icons by category

**Icon Design Guidelines:**

```svg
<!-- Template for all icons -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.5"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- Icon paths here -->
</svg>
```

**Requirements:**

- ViewBox: Always `0 0 24 24`
- Stroke-based: `fill="none" stroke="currentColor"`
- Stroke width: `1.5` (consistent across all icons)
- Use `currentColor` for theming support
- Keep simple - recognizable at 16px
- No inline styles, scripts, or external references

**Adding Icons to Registry:**

```typescript
// In src/icons/registry.ts
'icon-name': {
  name: 'icon-name',
  category: 'tech', // navigation|actions|media|communication|data|security|tech|files|status|social
  description: 'Brief description',
  tags: ['tag1', 'tag2'],
  svg: `<svg>...</svg>`,
  variants: {
    solid: `<svg>...</svg>`,      // Optional
    duotone: `<svg>...</svg>`,    // Optional
    glitch: `<svg>...</svg>`,     // Optional
  },
},
```

**Variant Guidelines:**

- `outline`: Default, 1.5px stroke, no fill
- `solid`: Filled shapes, use `fill="currentColor"`
- `duotone`: Primary stroke + secondary fill with `opacity="0.3"`
- `glitch`: Include subtle offset/duplicate paths for glitch effect

**After Adding Icons:**

1. Add export to `src/icons/individual.ts`
2. Run `npm run validate:icons` to check
3. Run `npm run test:icons` to verify

**Color Palette for Reference:**

- Cyan: `#00f0ff` (primary/tech)
- Magenta: `#ff00aa` (danger)
- Yellow: `#f0ff00` (warning)
- Green: `#00ff88` (success)
