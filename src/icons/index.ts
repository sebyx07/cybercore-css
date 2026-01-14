/**
 * Cyber Icons
 * Cyberpunk-themed SVG icon system for CYBERCORE CSS
 *
 * @example Import everything
 * ```ts
 * import * as CyberIcons from 'cybercore-css/icons';
 * CyberIcons.renderIcon('terminal', { size: 24, color: 'cyan' });
 * ```
 *
 * @example Import specific utilities
 * ```ts
 * import { renderIcon, getIcon, icons } from 'cybercore-css/icons';
 * const svg = getIcon('terminal');
 * ```
 *
 * @example Import just the icon registry
 * ```ts
 * import { icons } from 'cybercore-css/icons';
 * const terminalSvg = icons.terminal.svg;
 * ```
 *
 * @example Tree-shakeable individual icon import (SVG strings)
 * ```ts
 * import { ChipIcon, TerminalIcon, SignalIcon } from 'cybercore-css/icons/individual';
 * ```
 *
 * @example Tree-shakeable category import (full definitions)
 * ```ts
 * import { arrowUp, arrowDown } from 'cybercore-css/icons/defs/navigation';
 * import { terminal, chip } from 'cybercore-css/icons/defs/tech';
 * ```
 *
 * @example Build custom registry from definitions
 * ```ts
 * import { buildRegistry, categories } from 'cybercore-css/icons';
 * const registry = buildRegistry(); // All icons
 * const navIcons = categories.navigation; // Just navigation icons
 * ```
 */

// Types
export type {
  IconDefinition,
  IconCategory,
  IconSize,
  IconColor,
  IconVariant,
  IconVariants,
  IconProps,
  IconRegistry,
} from './types';

// Icon list (specs for what icons should exist)
export { ICON_LIST, getIconCount, getAllIconNames, getIconsByCategory } from './icon-list';
export type { IconSpec } from './icon-list';

// Registry (actual icon SVGs)
export {
  icons,
  getRegisteredIcons,
  isIconRegistered,
  getIconDefinition,
  registerIcon,
  getRegisteredByCategory,
} from './registry';

// Utilities
export {
  renderIcon,
  renderIconDef,
  getIcon,
  getIconSvg,
  iconExists,
  hasVariant,
  getVariants,
  createSpriteSheet,
  renderIconRef,
  getIconDataUri,
} from './utils';

/**
 * Quick access: Import a single icon's SVG by name
 * @example const svg = cyberIcon('terminal');
 */
export { getIcon as cyberIcon } from './utils';

// Icon definitions (for tree-shaking and building custom registries)
export { buildRegistry, categories } from './defs';

/**
 * Default export: The full icons registry for convenience
 * @example import icons from '@cybercore/icons';
 */
export { icons as default } from './registry';
