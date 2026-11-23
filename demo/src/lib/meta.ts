import meta from 'virtual:cybercore-meta';

import type { ModuleMeta } from './meta-types';

export { meta };

const bundleClasses = new Set(meta.bundleClasses);
const classModule = new Map<string, ModuleMeta>();
for (const module of meta.modules) {
  for (const name of module.classes) {
    if (!classModule.has(name)) classModule.set(name, module);
  }
}

export function findModule(group: ModuleMeta['group'], slug: string): ModuleMeta | undefined {
  return meta.modules.find((module) => module.group === group && module.slug === slug);
}

export function modulesIn(group: ModuleMeta['group']): ModuleMeta[] {
  return meta.modules.filter((module) => module.group === group);
}

/** Every `cyber-*` class a snippet uses, in order of first appearance. */
export function classesIn(html: string): string[] {
  const found = new Set<string>();
  for (const attribute of html.matchAll(/class="([^"]*)"/g)) {
    for (const name of (attribute[1] ?? '').split(/\s+/)) {
      if (name.startsWith('cyber-')) found.add(name);
    }
  }
  return [...found];
}

export interface SnippetAudit {
  /** Classes no SCSS module defines. The snippet is wrong. */
  unknown: string[];
  /** Sass modules the snippet needs that the default bundle leaves out. */
  optionalModules: string[];
}

export function auditSnippet(html: string): SnippetAudit {
  const unknown: string[] = [];
  const optional = new Set<string>();
  for (const name of classesIn(html)) {
    if (bundleClasses.has(name)) continue;
    const module = classModule.get(name);
    if (module) optional.add(module.id);
    else unknown.push(name);
  }
  return { unknown, optionalModules: [...optional] };
}

export function formatBytes(bytes: number): string {
  return `${(bytes / 1024).toFixed(1)} kB`;
}

export function titleCase(slug: string): string {
  return slug
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
