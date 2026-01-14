/**
 * Cyber Icons - Definitions Index
 * Auto-exports all icon definitions from category folders
 */

// Re-export all icons by category
export * from './navigation';
export * from './actions';
export * from './media';
export * from './communication';
export * from './data';
export * from './security';
export * from './tech';
export * from './files';
export * from './status';
export * from './social';

// Category barrel exports for tree-shaking
import * as navigation from './navigation';
import * as actions from './actions';
import * as media from './media';
import * as communication from './communication';
import * as data from './data';
import * as security from './security';
import * as tech from './tech';
import * as files from './files';
import * as status from './status';
import * as social from './social';

export const categories = {
  navigation,
  actions,
  media,
  communication,
  data,
  security,
  tech,
  files,
  status,
  social,
};

// Build registry from all definitions
import type { IconRegistry, IconDefinition } from '../types';

export function buildRegistry(): IconRegistry {
  const registry: IconRegistry = {};

  Object.values(categories).forEach((category) => {
    Object.values(category).forEach((icon) => {
      if (icon && typeof icon === 'object' && 'name' in icon && 'svg' in icon) {
        registry[(icon as IconDefinition).name] = icon as IconDefinition;
      }
    });
  });

  return registry;
}
