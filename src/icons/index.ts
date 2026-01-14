/**
 * Cyber Icons
 * Cyberpunk-themed SVG icon system for CYBERCORE CSS
 *
 * @example Import everything
 * ```ts
 * import * as CyberIcons from '@cybercore/icons';
 * CyberIcons.renderIcon('terminal', { size: 24, color: 'cyan' });
 * ```
 *
 * @example Import specific utilities
 * ```ts
 * import { renderIcon, getIcon, icons } from '@cybercore/icons';
 * const svg = getIcon('terminal');
 * ```
 *
 * @example Import just the icon registry
 * ```ts
 * import { icons } from '@cybercore/icons';
 * const terminalSvg = icons.terminal.svg;
 * ```
 *
 * @example Tree-shakeable individual icon import
 * ```ts
 * import { ChipIcon, TerminalIcon, SignalIcon } from '@cybercore/icons/individual';
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
  getIcon,
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

/**
 * Default export: The full icons registry for convenience
 * @example import icons from '@cybercore/icons';
 */
export { icons as default } from './registry';
