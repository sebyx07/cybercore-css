# Cyber Icons

Cyberpunk-themed SVG icon system for CYBERCORE CSS. Production-ready,
tree-shakeable, and fully typed.

## Features

- **150+ icon specs** across 10 categories
- **Stroke-based design** - scales perfectly at any size
- **currentColor** - inherits text color automatically
- **Zero dependencies** - pure SVG
- **Tree-shakeable** - import only what you need
- **TypeScript** - full type definitions
- **Accessible** - aria-label support built-in

## Installation

Icons are included with CYBERCORE CSS:

```bash
npm install cybercore-css
```

## Usage

### Import Everything

```ts
import * as CyberIcons from 'cybercore-css/icons';

// Render an icon
const html = CyberIcons.renderIcon('terminal', {
  size: 24,
  color: 'cyan',
});
```

### Import Specific Functions

```ts
import { renderIcon, getIcon, icons } from 'cybercore-css/icons';

// Get raw SVG string
const svg = getIcon('terminal');

// Render with options
const html = renderIcon('terminal', { size: 32, color: 'magenta' });

// Access registry directly
const chipSvg = icons.chip.svg;
```

### Tree-Shakeable Individual Imports

```ts
import {
  ChipIcon,
  TerminalIcon,
  SignalIcon,
} from 'cybercore-css/icons/individual';

// Each export is the raw SVG string
element.innerHTML = ChipIcon;
```

### Sprite Sheet (For Many Icons)

```ts
import { createSpriteSheet, renderIconRef } from 'cybercore-css/icons';

// Add sprite sheet once to your HTML
document.body.insertAdjacentHTML('beforeend', createSpriteSheet());

// Then reference icons by ID (smaller HTML)
const html = renderIconRef('terminal', { size: 24 });
// Output: <svg><use href="#cyber-icon-terminal"/></svg>
```

### Data URI (For CSS)

```ts
import { getIconDataUri } from 'cybercore-css/icons';

const uri = getIconDataUri('chip', '#00f0ff');
// Use in CSS: background-image: url(${uri});
```

## API Reference

### `renderIcon(name, options?)`

Renders an icon as an HTML string.

| Option        | Type                                                      | Default     | Description              |
| ------------- | --------------------------------------------------------- | ----------- | ------------------------ |
| `size`        | `16 \| 20 \| 24 \| 32 \| 48 \| 64`                        | `24`        | Icon size in pixels      |
| `color`       | `'cyan' \| 'magenta' \| 'yellow' \| 'green' \| 'current'` | `'current'` | Color variant            |
| `className`   | `string`                                                  | `''`        | Additional CSS classes   |
| `aria-label`  | `string`                                                  | -           | Accessibility label      |
| `aria-hidden` | `boolean`                                                 | `true`      | Hide from screen readers |

### `getIcon(name)`

Returns the raw SVG string for an icon, or `null` if not found.

### `iconExists(name)`

Returns `true` if the icon exists in the registry.

### `createSpriteSheet()`

Generates an SVG sprite sheet containing all icons.

### `getIconDataUri(name, color?)`

Returns a data URI for use in CSS `background-image`.

## Icon Categories

| Category        | Description       | Examples                                 |
| --------------- | ----------------- | ---------------------------------------- |
| `navigation`    | UI navigation     | arrow-up, chevron-right, home, menu      |
| `actions`       | User interactions | search, edit, delete, copy, download     |
| `media`         | Audio/video       | play, pause, volume-high, camera         |
| `communication` | Messaging         | bell, message, mail, send                |
| `data`          | Analytics         | chart-bar, database, calendar, clock     |
| `security`      | Auth & privacy    | lock, key, shield, eye, user             |
| `tech`          | Development       | terminal, code, chip, server, git-branch |
| `files`         | Documents         | file, folder, clipboard, attachment      |
| `status`        | Feedback          | info, warning, error, success, loading   |
| `social`        | Social            | heart, star, thumbs-up, bookmark         |

## Design Guidelines

When creating new icons, follow these rules:

### Structure

- **ViewBox**: Always `0 0 24 24`
- **Stroke-based**: Use `fill="none" stroke="currentColor"`
- **Stroke width**: Always `1.5`
- **Line caps**: Use `stroke-linecap="round" stroke-linejoin="round"`

### Template

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <!-- Icon paths here -->
</svg>
```

### Style

- Keep it simple - icons should be recognizable at 16px
- Use geometric shapes with subtle cyber/tech details
- Avoid complex gradients or effects
- Test at multiple sizes: 16, 24, 32, 48px

### Don'ts

- No inline styles
- No embedded scripts
- No raster images
- No external references
- No proprietary fonts

## Validation

Run the validation script to check all icons:

```bash
npm run validate:icons
```

This checks:

- SVG structure and attributes
- Security (no scripts or event handlers)
- Consistency (stroke width, viewBox)
- Coverage (implemented vs. specified)

## Contributing Icons

1. Check `icon-list.ts` for icons that need to be created
2. Create the SVG following the design guidelines
3. Add to `registry.ts` with proper metadata
4. Add individual export to `individual.ts`
5. Run validation and tests

## Color Palette

Icons work with the CYBERCORE color system:

| Color   | CSS Variable          | Hex       |
| ------- | --------------------- | --------- |
| Cyan    | `--cyber-cyan-500`    | `#00f0ff` |
| Magenta | `--cyber-magenta-500` | `#ff00aa` |
| Yellow  | `--cyber-yellow-500`  | `#f0ff00` |
| Green   | `--cyber-green-500`   | `#00ff88` |

## License

MIT - Part of CYBERCORE CSS
