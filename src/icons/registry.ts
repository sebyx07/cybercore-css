/**
 * Cyber Icons Registry
 * Maps icon names to their SVG definitions
 *
 * Icons are added here by artist agents or manually.
 * Each icon should follow the design guidelines in README.md
 */

import type { IconDefinition, IconRegistry } from './types';

/**
 * Master icon registry
 * Add new icons here following the IconDefinition format
 */
export const icons: IconRegistry = {
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAMPLE ICONS - Reference implementations
  // ═══════════════════════════════════════════════════════════════════════════

  'chip': {
    name: 'chip',
    category: 'tech',
    description: 'CPU/processor chip with connection pins',
    tags: ['hardware', 'cpu', 'processor', 'tech'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="12" rx="1"/>
  <rect x="9" y="9" width="6" height="6" rx="0.5"/>
  <line x1="8" y1="6" x2="8" y2="3"/>
  <line x1="12" y1="6" x2="12" y2="3"/>
  <line x1="16" y1="6" x2="16" y2="3"/>
  <line x1="8" y1="18" x2="8" y2="21"/>
  <line x1="12" y1="18" x2="12" y2="21"/>
  <line x1="16" y1="18" x2="16" y2="21"/>
  <line x1="6" y1="8" x2="3" y2="8"/>
  <line x1="6" y1="12" x2="3" y2="12"/>
  <line x1="6" y1="16" x2="3" y2="16"/>
  <line x1="18" y1="8" x2="21" y2="8"/>
  <line x1="18" y1="12" x2="21" y2="12"/>
  <line x1="18" y1="16" x2="21" y2="16"/>
</svg>`,
  },

  'signal': {
    name: 'signal',
    category: 'tech',
    description: 'Broadcast/wireless signal with waves',
    tags: ['wifi', 'wireless', 'connection', 'broadcast'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="2"/>
  <path d="M8.5 8.5a5 5 0 0 1 7 0"/>
  <path d="M15.5 15.5a5 5 0 0 1-7 0"/>
  <path d="M5.5 5.5a9 9 0 0 1 13 0"/>
  <path d="M18.5 18.5a9 9 0 0 1-13 0"/>
  <line x1="12" y1="14" x2="12" y2="21"/>
  <polyline points="9 18 12 21 15 18"/>
</svg>`,
  },

  'terminal': {
    name: 'terminal',
    category: 'tech',
    description: 'Command line terminal interface',
    tags: ['cli', 'command', 'shell', 'console'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <line x1="2" y1="8" x2="22" y2="8"/>
  <circle cx="5" cy="6" r="0.5" fill="currentColor"/>
  <circle cx="7.5" cy="6" r="0.5" fill="currentColor"/>
  <circle cx="10" cy="6" r="0.5" fill="currentColor"/>
  <polyline points="6 12 9 14.5 6 17"/>
  <line x1="11" y1="17" x2="17" y2="17"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TODO: Add more icons here
  // Artist agents can add icons by following the format above
  // ═══════════════════════════════════════════════════════════════════════════
};

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
export function getRegisteredByCategory(
  category: IconDefinition['category']
): IconDefinition[] {
  return Object.values(icons).filter((icon) => icon.category === category);
}
