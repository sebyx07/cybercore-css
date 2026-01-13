# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-13

### Added

- Initial release of CYBERCORE CSS framework
- **Core System**
  - CSS custom properties for theming (cyan, magenta, yellow, green accent
    colors)
  - CSS `@layer` cascade management (reset, base, theme, components, utilities)
  - Dark-first design optimized for cyberpunk aesthetics
  - `prefers-reduced-motion` support throughout

- **Components**
  - Buttons (`.cyber-btn`) with color variants and ghost/outline styles
  - Cards (`.cyber-card`) with interactive and holographic variants
  - Form inputs (`.cyber-input`, `.cyber-select`, `.cyber-checkbox`)
  - Terminal component (`.cyber-terminal`) with typing animation
  - Modal dialogs (`.cyber-modal`)
  - Badges and alerts
  - Tables with cyberpunk styling
  - Progress bars and spinners
  - Tabs and navigation
  - Skeleton loading states

- **Effects**
  - Glitch text effect (`.cyber-glitch`)
  - Neon border glow (`.cyber-neon-border`)
  - Scanlines overlay (`.cyber-scanlines`)
  - Noise texture (`.cyber-noise`)
  - Datastream animation (`.cyber-datastream`)

- **Utilities**
  - Display and visibility helpers
  - Flexbox and grid utilities
  - Spacing scale (margin, padding)
  - Text utilities (colors, alignment, sizing)
  - Animation utilities
  - Accessibility helpers (`.cyber-sr-only`, `.cyber-focus-visible`)

- **Documentation**
  - Comprehensive README with installation and usage examples
  - Interactive demo site with component showcase
  - SCSS source files for customization

### Browser Support

- Chrome 105+
- Firefox 121+
- Safari 15.4+
- Edge 105+
