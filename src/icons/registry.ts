/**
 * Cyber Icons Registry
 * Maps icon names to their SVG definitions
 *
 * All icons are loaded from individual definition files in ./defs/
 * which include all variants (outline, solid, duotone, glitch).
 */

import type { IconDefinition, IconRegistry } from './types';
import { buildRegistry } from './defs';

/**
 * Master icon registry - built from defs/ definitions
 */
export const icons: IconRegistry = buildRegistry();

/**
 * Get all registered icon names
 */
export function getRegisteredIcons(): string[] {
  return Object.keys(icons);
}

/**
 * Check if an icon is registered
 */
export function isIconRegistered(name: string): boolean {
  return name in icons;
}

/**
 * Get icon definition by name
 */
export function getIconDefinition(name: string): IconDefinition | undefined {
  return icons[name];
}

/**
 * Register a new icon (for runtime registration)
 */
export function registerIcon(definition: IconDefinition): void {
  icons[definition.name] = definition;
}

/**
 * Get icons by category from registry
 */
export function getRegisteredByCategory(category: IconDefinition['category']): IconDefinition[] {
  return Object.values(icons).filter((icon) => icon.category === category);
}
