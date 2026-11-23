import { buildEntries } from '../data/entries';
import { buildRoutes } from '../routes';

import { docsBundle } from './docs';
import { meta } from './meta';

import type { ModuleEntry, ModuleGroup } from '../data/types';

export const ENTRIES: Record<ModuleGroup, ModuleEntry[]> = {
  components: buildEntries('components', docsBundle.docs.components, meta.modules),
  effects: buildEntries('effects', docsBundle.docs.effects, meta.modules),
  utilities: buildEntries('utilities', docsBundle.docs.utilities, meta.modules),
};

export const ROUTES = buildRoutes([
  ...ENTRIES.components,
  ...ENTRIES.effects,
  ...ENTRIES.utilities,
]);

export function findEntry(group: ModuleGroup, slug: string | undefined): ModuleEntry | undefined {
  return ENTRIES[group].find((entry) => entry.slug === slug);
}
