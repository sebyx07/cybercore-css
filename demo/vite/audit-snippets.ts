import type { ModuleDoc } from '../src/data/types.ts';
import type { CybercoreMeta } from '../src/lib/meta-types.ts';

/**
 * Every `cyber-*` class a docs snippet uses must exist in the framework.
 * Returns one message per snippet that names a class no SCSS module defines.
 */
export function auditSnippets(
  docs: Record<string, ModuleDoc[]>,
  extra: Record<string, string>,
  meta: CybercoreMeta
): string[] {
  const known = new Set<string>(meta.bundleClasses);
  for (const module of meta.modules) {
    for (const name of module.classes) {
      known.add(name);
    }
  }

  const problems: string[] = [];
  const check = (where: string, html: string) => {
    const missing = new Set<string>();
    for (const attribute of html.matchAll(/class="([^"]*)"/g)) {
      for (const name of (attribute[1] ?? '').split(/\s+/)) {
        // renderIcon() adds a `cyber-icon--<name>` hook per icon; those are not framework classes.
        if (name.startsWith('cyber-') && !name.startsWith('cyber-icon--') && !known.has(name)) {
          missing.add(name);
        }
      }
    }
    if (missing.size > 0) {
      problems.push(`${where}: ${[...missing].join(', ')}`);
    }
  };

  for (const [group, list] of Object.entries(docs)) {
    for (const doc of list) {
      for (const example of doc.examples) {
        check(`${group}/${doc.slug}#${example.id}`, example.html);
      }
      if (doc.thumbnail) {
        check(`${group}/${doc.slug} thumbnail`, doc.thumbnail);
      }
    }
  }
  for (const [where, html] of Object.entries(extra)) {
    check(where, html);
  }
  return problems;
}
