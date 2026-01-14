/**
 * Cyber Icons Utilities
 * Helper functions for rendering and working with icons
 */

import type { IconProps, IconColor, IconVariant } from './types';
import { icons, isIconRegistered, getIconDefinition } from './registry';

/**
 * Color map for CSS custom properties
 */
const COLOR_MAP: Record<IconColor, string> = {
  cyan: 'var(--cyber-cyan-500, #00f0ff)',
  magenta: 'var(--cyber-magenta-500, #ff00aa)',
  yellow: 'var(--cyber-yellow-500, #f0ff00)',
  green: 'var(--cyber-green-500, #00ff88)',
  current: 'currentColor',
};

/**
 * Check if an icon exists in the registry
 */
export function iconExists(name: string): boolean {
  return isIconRegistered(name);
}

/**
 * Check if an icon has a specific variant
 */
export function hasVariant(name: string, variant: IconVariant): boolean {
  const definition = getIconDefinition(name);
  if (!definition) return false;
  if (variant === 'outline') return true; // Default variant always exists
  return !!definition.variants?.[variant];
}

/**
 * Get available variants for an icon
 */
export function getVariants(name: string): IconVariant[] {
  const definition = getIconDefinition(name);
  if (!definition) return [];

  const variants: IconVariant[] = ['outline']; // Default always available
  if (definition.variants) {
    if (definition.variants.solid) variants.push('solid');
    if (definition.variants.duotone) variants.push('duotone');
    if (definition.variants.glitch) variants.push('glitch');
  }
  return variants;
}

/**
 * Get the raw SVG string for an icon
 * @param name Icon name
 * @param variant Optional variant (default: 'outline')
 */
export function getIcon(name: string, variant: IconVariant = 'outline'): string | null {
  const definition = getIconDefinition(name);
  if (!definition) return null;

  // Return requested variant or fall back to default
  if (variant === 'outline' || !definition.variants?.[variant]) {
    return definition.svg;
  }

  return definition.variants[variant] ?? definition.svg;
}

/**
 * Render an icon with options
 */
export function renderIcon(name: string, options: Partial<IconProps> = {}): string {
  const {
    variant = 'outline',
    size = 24,
    color = 'current',
    className = '',
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden = !ariaLabel,
  } = options;

  const svg = getIcon(name, variant);
  if (!svg) {
    console.warn(`[CyberIcons] Icon "${name}" not found in registry`);
    return '';
  }

  // Build class list
  const variantClass = variant !== 'outline' ? `cyber-icon--${variant}` : '';
  const classes = ['cyber-icon', `cyber-icon--${name}`, variantClass, className]
    .filter(Boolean)
    .join(' ');

  // Build style
  const colorValue = COLOR_MAP[color] || color;
  const style = `width: ${size}px; height: ${size}px; color: ${colorValue};`;

  // Build accessibility attributes
  const a11y = ariaHidden ? 'aria-hidden="true"' : `aria-label="${ariaLabel}" role="img"`;

  // Inject attributes into SVG
  return svg.replace('<svg', `<svg class="${classes}" style="${style}" ${a11y}`).trim();
}

/**
 * Create a sprite sheet of all icons (for embedding once in HTML)
 */
export function createSpriteSheet(): string {
  const symbols = Object.entries(icons)
    .map(([name, def]) => {
      // Convert SVG to symbol
      const symbolContent = def.svg.replace(/<svg[^>]*>/, '').replace('</svg>', '');
      return `<symbol id="cyber-icon-${name}" viewBox="0 0 24 24">${symbolContent}</symbol>`;
    })
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n${symbols}\n</svg>`;
}

/**
 * Render icon using sprite reference (requires sprite sheet in DOM)
 */
export function renderIconRef(name: string, options: Partial<IconProps> = {}): string {
  const {
    size = 24,
    color = 'current',
    className = '',
    'aria-label': ariaLabel,
    'aria-hidden': ariaHidden = !ariaLabel,
  } = options;

  const classes = ['cyber-icon', `cyber-icon--${name}`, className].filter(Boolean).join(' ');

  const colorValue = COLOR_MAP[color] || color;
  const style = `width: ${size}px; height: ${size}px; color: ${colorValue};`;

  const a11y = ariaHidden ? 'aria-hidden="true"' : `aria-label="${ariaLabel}" role="img"`;

  return `<svg class="${classes}" style="${style}" ${a11y}>
  <use href="#cyber-icon-${name}"/>
</svg>`;
}

/**
 * Get icon as data URI (for CSS background-image, etc.)
 */
export function getIconDataUri(name: string, color?: string): string | null {
  let svg = getIcon(name);
  if (!svg) return null;

  // Replace currentColor if a specific color is provided
  if (color) {
    svg = svg.replace(/currentColor/g, color);
  }

  // Encode for data URI
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');

  return `data:image/svg+xml,${encoded}`;
}
