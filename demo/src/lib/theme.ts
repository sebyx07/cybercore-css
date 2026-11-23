import { useCallback, useSyncExternalStore } from 'react';

import { meta } from './meta';

/**
 * Theme state lives on <html data-theme="…">, the same hook the framework's
 * theme blocks select on. No attribute means the default theme.
 */

export const DEFAULT_THEME = 'default';
const STORAGE_KEY = 'cybercore-theme';
const listeners = new Set<() => void>();

export const THEMES: string[] = [DEFAULT_THEME, ...meta.themes.map((theme) => theme.name)].filter(
  (name, index, all) => all.indexOf(name) === index
);

function read(): string {
  return document.documentElement.dataset.theme ?? DEFAULT_THEME;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function applyTheme(name: string): void {
  const next = THEMES.includes(name) ? name : DEFAULT_THEME;
  if (next === DEFAULT_THEME) delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = next;
  try {
    if (next === DEFAULT_THEME) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Storage can be blocked (private mode). The theme still applies for this visit.
  }
  listeners.forEach((listener) => listener());
}

export function useTheme(): [string, (name: string) => void] {
  const theme = useSyncExternalStore(subscribe, read, () => DEFAULT_THEME);
  const setTheme = useCallback((name: string) => applyTheme(name), []);
  return [theme, setTheme];
}
