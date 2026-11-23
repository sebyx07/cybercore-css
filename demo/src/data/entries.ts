import type { ModuleDoc, ModuleEntry, ModuleGroup } from './types';
import type { ModuleMeta } from '../lib/meta-types';

export const GROUP_LABEL: Record<ModuleGroup, string> = {
  components: 'Components',
  effects: 'Effects',
  utilities: 'Utilities',
};

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function firstSentence(notes: string): string {
  const body = notes.split('\n').slice(1).join(' ').replace(/\s+/g, ' ').trim();
  const sentence = /^.*?[.!?](\s|$)/.exec(body)?.[0].trim() ?? body;
  return sentence.replace(/`/g, '');
}

/**
 * Hand-written docs first, in their written order, then every SCSS module
 * nobody has documented yet. A module added to the framework shows up on the
 * site with its class reference before anyone writes a word about it.
 */
export function buildEntries(
  group: ModuleGroup,
  docs: ModuleDoc[],
  modules: ModuleMeta[]
): ModuleEntry[] {
  const inGroup = modules.filter((module) => module.group === group);
  const bySlug = new Map(inGroup.map((module) => [module.slug, module]));

  const documented: ModuleEntry[] = docs.map((doc) => ({
    group,
    slug: doc.slug,
    name: doc.name,
    summary: doc.summary,
    doc,
    module: bySlug.get(doc.slug),
  }));

  const seen = new Set(documented.map((entry) => entry.slug));
  const discovered: ModuleEntry[] = inGroup
    .filter((module) => !seen.has(module.slug))
    .map((module) => ({
      group,
      slug: module.slug,
      name: titleCase(module.slug),
      summary:
        firstSentence(module.notes) ||
        `${titleCase(module.slug)} classes from src/scss/${module.id}.`,
      module,
    }));

  return [...documented, ...discovered];
}
