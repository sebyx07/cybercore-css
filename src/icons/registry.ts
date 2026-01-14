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

  chip: {
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

  signal: {
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

  terminal: {
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
  // NAVIGATION ICONS
  // ═══════════════════════════════════════════════════════════════════════════

  'arrow-up': {
    name: 'arrow-up',
    category: 'navigation',
    description: 'Upward arrow with cyberpunk chamfered tip',
    tags: ['arrow', 'up', 'navigation', 'direction'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="20" x2="12" y2="4"/>
  <polyline points="5 11 12 4 19 11"/>
  <line x1="12" y1="4" x2="10" y2="6"/>
  <line x1="12" y1="4" x2="14" y2="6"/>
</svg>`,
  },

  'arrow-down': {
    name: 'arrow-down',
    category: 'navigation',
    description: 'Downward arrow with cyberpunk chamfered tip',
    tags: ['arrow', 'down', 'navigation', 'direction'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="4" x2="12" y2="20"/>
  <polyline points="5 13 12 20 19 13"/>
  <line x1="12" y1="20" x2="10" y2="18"/>
  <line x1="12" y1="20" x2="14" y2="18"/>
</svg>`,
  },

  'arrow-left': {
    name: 'arrow-left',
    category: 'navigation',
    description: 'Leftward arrow with cyberpunk chamfered tip',
    tags: ['arrow', 'left', 'navigation', 'direction', 'back'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="20" y1="12" x2="4" y2="12"/>
  <polyline points="11 5 4 12 11 19"/>
  <line x1="4" y1="12" x2="6" y2="10"/>
  <line x1="4" y1="12" x2="6" y2="14"/>
</svg>`,
  },

  'arrow-right': {
    name: 'arrow-right',
    category: 'navigation',
    description: 'Rightward arrow with cyberpunk chamfered tip',
    tags: ['arrow', 'right', 'navigation', 'direction', 'forward'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="12" x2="20" y2="12"/>
  <polyline points="13 5 20 12 13 19"/>
  <line x1="20" y1="12" x2="18" y2="10"/>
  <line x1="20" y1="12" x2="18" y2="14"/>
</svg>`,
  },

  'chevron-up': {
    name: 'chevron-up',
    category: 'navigation',
    description: 'Upward chevron with angular geometry',
    tags: ['chevron', 'up', 'navigation', 'collapse', 'expand'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="18 15 12 9 6 15"/>
</svg>`,
  },

  'chevron-down': {
    name: 'chevron-down',
    category: 'navigation',
    description: 'Downward chevron with angular geometry',
    tags: ['chevron', 'down', 'navigation', 'collapse', 'expand'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 9 12 15 18 9"/>
</svg>`,
  },

  'chevron-left': {
    name: 'chevron-left',
    category: 'navigation',
    description: 'Leftward chevron with angular geometry',
    tags: ['chevron', 'left', 'navigation', 'back', 'previous'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 18 9 12 15 6"/>
</svg>`,
  },

  'chevron-right': {
    name: 'chevron-right',
    category: 'navigation',
    description: 'Rightward chevron with angular geometry',
    tags: ['chevron', 'right', 'navigation', 'forward', 'next'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="9 18 15 12 9 6"/>
</svg>`,
  },

  home: {
    name: 'home',
    category: 'navigation',
    description: 'Home/dashboard icon with tech-inspired geometric house',
    tags: ['home', 'dashboard', 'main', 'start'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <path d="M9 21V13h6v8"/>
  <line x1="12" y1="3" x2="12" y2="7"/>
  <circle cx="12" cy="7" r="0.5" fill="currentColor"/>
</svg>`,
  },

  menu: {
    name: 'menu',
    category: 'navigation',
    description: 'Hamburger menu with tech accent dots',
    tags: ['menu', 'hamburger', 'navigation', 'drawer'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
  <circle cx="3" cy="6" r="0.5" fill="currentColor"/>
  <circle cx="3" cy="12" r="0.5" fill="currentColor"/>
  <circle cx="3" cy="18" r="0.5" fill="currentColor"/>
</svg>`,
  },

  'menu-dots': {
    name: 'menu-dots',
    category: 'navigation',
    description: 'Three dots kebab menu with subtle gaps',
    tags: ['menu', 'dots', 'kebab', 'more', 'options'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="6" r="1.5"/>
  <circle cx="12" cy="12" r="1.5"/>
  <circle cx="12" cy="18" r="1.5"/>
  <line x1="11" y1="6" x2="10.5" y2="6"/>
  <line x1="13" y1="6" x2="13.5" y2="6"/>
</svg>`,
  },

  'external-link': {
    name: 'external-link',
    category: 'navigation',
    description: 'External link with diagonal arrow breaking boundary',
    tags: ['external', 'link', 'open', 'new-tab', 'outside'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
  <line x1="21" y1="3" x2="19" y2="5"/>
</svg>`,
  },

  maximize: {
    name: 'maximize',
    category: 'navigation',
    description: 'Maximize/fullscreen with expanding corner brackets',
    tags: ['maximize', 'fullscreen', 'expand', 'enlarge'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="15 3 21 3 21 9"/>
  <polyline points="9 21 3 21 3 15"/>
  <polyline points="21 15 21 21 15 21"/>
  <polyline points="3 9 3 3 9 3"/>
  <line x1="21" y1="3" x2="18" y2="6"/>
  <line x1="3" y1="21" x2="6" y2="18"/>
</svg>`,
  },

  minimize: {
    name: 'minimize',
    category: 'navigation',
    description: 'Minimize/exit fullscreen with contracting corner brackets',
    tags: ['minimize', 'exit-fullscreen', 'contract', 'reduce'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="4 14 10 14 10 8"/>
  <polyline points="20 10 14 10 14 16"/>
  <polyline points="14 8 14 14 20 14"/>
  <polyline points="10 16 10 10 4 10"/>
  <line x1="4" y1="14" x2="6" y2="16"/>
  <line x1="20" y1="10" x2="18" y2="8"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ACTIONS CATEGORY - User interaction and common actions
  // ═══════════════════════════════════════════════════════════════════════════

  search: {
    name: 'search',
    category: 'actions',
    description: 'Search or find content',
    tags: ['search', 'find', 'magnify', 'lookup'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10.5" cy="10.5" r="6.5"/>
  <line x1="15" y1="15" x2="21" y2="21"/>
  <line x1="8" y1="10.5" x2="13" y2="10.5"/>
</svg>`,
  },

  filter: {
    name: 'filter',
    category: 'actions',
    description: 'Filter results or data',
    tags: ['filter', 'funnel', 'sort', 'refine'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="4 4 4 6 10 13 10 20 14 22 14 13 20 6 20 4"/>
  <line x1="4" y1="4" x2="20" y2="4"/>
  <circle cx="12" cy="9.5" r="1" fill="currentColor"/>
</svg>`,
  },

  sort: {
    name: 'sort',
    category: 'actions',
    description: 'Sort order ascending/descending',
    tags: ['sort', 'order', 'arrange', 'organize'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="6" x2="11" y2="6"/>
  <line x1="4" y1="12" x2="15" y2="12"/>
  <line x1="4" y1="18" x2="18" y2="18"/>
  <polyline points="17 4 20 7 17 10"/>
  <line x1="20" y1="7" x2="20" y2="20"/>
</svg>`,
  },

  edit: {
    name: 'edit',
    category: 'actions',
    description: 'Edit or modify content',
    tags: ['edit', 'pencil', 'modify', 'write'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3l4 4-12 12H5v-4L17 3z"/>
  <line x1="13" y1="7" x2="17" y2="11"/>
  <path d="M19 21H9"/>
</svg>`,
  },

  delete: {
    name: 'delete',
    category: 'actions',
    description: 'Delete or remove item',
    tags: ['delete', 'trash', 'remove', 'bin'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="3 6 5 6 21 6"/>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
  <line x1="10" y1="11" x2="10" y2="17"/>
  <line x1="14" y1="11" x2="14" y2="17"/>
  <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  <line x1="8" y1="3" x2="9" y2="4"/>
  <line x1="15" y1="4" x2="16" y2="3"/>
</svg>`,
  },

  copy: {
    name: 'copy',
    category: 'actions',
    description: 'Copy to clipboard',
    tags: ['copy', 'duplicate', 'clipboard', 'clone'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="13" height="13" rx="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  <line x1="9" y1="14" x2="9" y2="14.01"/>
  <line x1="13" y1="14" x2="13" y2="14.01"/>
</svg>`,
  },

  paste: {
    name: 'paste',
    category: 'actions',
    description: 'Paste from clipboard',
    tags: ['paste', 'clipboard', 'insert'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
  <rect x="8" y="2" width="8" height="4" rx="1"/>
  <line x1="9" y1="12" x2="15" y2="12"/>
  <line x1="9" y1="16" x2="15" y2="16"/>
  <circle cx="12" cy="12" r="0.5" fill="currentColor"/>
</svg>`,
  },

  cut: {
    name: 'cut',
    category: 'actions',
    description: 'Cut to clipboard',
    tags: ['cut', 'scissors', 'remove', 'clipboard'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="20" y1="4" x2="8.5" y2="10"/>
  <line x1="20" y1="20" x2="8.5" y2="14"/>
  <line x1="20" y1="12" x2="12" y2="12"/>
  <line x1="19" y1="4" x2="21" y2="4"/>
</svg>`,
  },

  download: {
    name: 'download',
    category: 'actions',
    description: 'Download file or content',
    tags: ['download', 'save', 'export', 'get'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="7 10 12 15 17 10"/>
  <line x1="12" y1="15" x2="12" y2="3"/>
  <line x1="8" y1="6" x2="9" y2="5"/>
  <line x1="15" y1="5" x2="16" y2="6"/>
</svg>`,
  },

  upload: {
    name: 'upload',
    category: 'actions',
    description: 'Upload file or content',
    tags: ['upload', 'import', 'send', 'publish'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
  <polyline points="17 8 12 3 7 8"/>
  <line x1="12" y1="3" x2="12" y2="15"/>
  <line x1="15" y1="17" x2="16" y2="18"/>
  <line x1="9" y1="18" x2="8" y2="17"/>
</svg>`,
  },

  share: {
    name: 'share',
    category: 'actions',
    description: 'Share content with others',
    tags: ['share', 'export', 'send', 'distribute'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="18" cy="5" r="3"/>
  <circle cx="6" cy="12" r="3"/>
  <circle cx="18" cy="19" r="3"/>
  <line x1="8.5" y1="13.5" x2="15.5" y2="17.5"/>
  <line x1="15.5" y1="6.5" x2="8.5" y2="10.5"/>
  <line x1="17" y1="7" x2="17" y2="7.01"/>
</svg>`,
  },

  save: {
    name: 'save',
    category: 'actions',
    description: 'Save changes or data',
    tags: ['save', 'disk', 'floppy', 'store'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
  <polyline points="17 21 17 13 7 13 7 21"/>
  <polyline points="7 3 7 8 15 8"/>
  <line x1="10" y1="17" x2="10" y2="17.01"/>
  <line x1="14" y1="17" x2="14" y2="17.01"/>
</svg>`,
  },

  undo: {
    name: 'undo',
    category: 'actions',
    description: 'Undo previous action',
    tags: ['undo', 'revert', 'back', 'restore'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 7v6h6"/>
  <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-9 9"/>
  <polyline points="3 7 6 10 3 13"/>
  <line x1="14" y1="14" x2="14" y2="14.01"/>
</svg>`,
  },

  redo: {
    name: 'redo',
    category: 'actions',
    description: 'Redo undone action',
    tags: ['redo', 'forward', 'repeat', 'restore'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 7v6h-6"/>
  <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 9 9"/>
  <polyline points="21 7 18 10 21 13"/>
  <line x1="10" y1="14" x2="10" y2="14.01"/>
</svg>`,
  },

  plus: {
    name: 'plus',
    category: 'actions',
    description: 'Add or create new item',
    tags: ['add', 'plus', 'create', 'new'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="8" x2="12" y2="16"/>
  <line x1="8" y1="12" x2="16" y2="12"/>
  <line x1="9" y1="9" x2="9.01" y2="9"/>
  <line x1="15" y1="9" x2="15.01" y2="9"/>
</svg>`,
  },

  minus: {
    name: 'minus',
    category: 'actions',
    description: 'Remove or subtract item',
    tags: ['minus', 'remove', 'subtract', 'delete'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="8" y1="12" x2="16" y2="12"/>
  <line x1="9" y1="15" x2="9.01" y2="15"/>
  <line x1="15" y1="15" x2="15.01" y2="15"/>
</svg>`,
  },

  check: {
    name: 'check',
    category: 'actions',
    description: 'Confirm or checkmark',
    tags: ['check', 'confirm', 'done', 'success'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="8 12 11 15 16 9"/>
  <line x1="7" y1="7" x2="8" y2="6"/>
  <line x1="16" y1="6" x2="17" y2="7"/>
</svg>`,
  },

  x: {
    name: 'x',
    category: 'actions',
    description: 'Close or cancel action',
    tags: ['close', 'cancel', 'exit', 'dismiss'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="15" y1="9" x2="9" y2="15"/>
  <line x1="9" y1="9" x2="15" y2="15"/>
  <line x1="7" y1="7" x2="6" y2="6"/>
  <line x1="17" y1="17" x2="18" y2="18"/>
</svg>`,
  },

  refresh: {
    name: 'refresh',
    category: 'actions',
    description: 'Refresh or reload content',
    tags: ['refresh', 'reload', 'sync', 'update'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="23 4 23 10 17 10"/>
  <polyline points="1 20 1 14 7 14"/>
  <path d="M20.5 9A9 9 0 0 0 4 7l-3 3"/>
  <path d="M3.5 15A9 9 0 0 0 20 17l3-3"/>
  <circle cx="12" cy="12" r="1" fill="currentColor"/>
</svg>`,
  },

  drag: {
    name: 'drag',
    category: 'actions',
    description: 'Drag and drop handle',
    tags: ['drag', 'move', 'handle', 'grip'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="5" r="1" fill="currentColor"/>
  <circle cx="15" cy="5" r="1" fill="currentColor"/>
  <circle cx="9" cy="12" r="1" fill="currentColor"/>
  <circle cx="15" cy="12" r="1" fill="currentColor"/>
  <circle cx="9" cy="19" r="1" fill="currentColor"/>
  <circle cx="15" cy="19" r="1" fill="currentColor"/>
  <rect x="7" y="3" width="10" height="18" rx="2"/>
</svg>`,
  },

  pin: {
    name: 'pin',
    category: 'actions',
    description: 'Pin or bookmark item',
    tags: ['pin', 'bookmark', 'favorite', 'anchor'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16 3l-4 4-4-4v6l-3 3 3 3v6l4-4 4 4v-6l3-3-3-3V3z"/>
  <line x1="12" y1="21" x2="12" y2="23"/>
  <line x1="10" y1="2" x2="10" y2="3"/>
  <line x1="14" y1="3" x2="14" y2="2"/>
</svg>`,
  },

  link: {
    name: 'link',
    category: 'actions',
    description: 'Create or insert link',
    tags: ['link', 'chain', 'url', 'hyperlink'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.5 4.3l3-3a5 5 0 0 0 0-7.1 5 5 0 0 0-7.1 0l-1.4 1.4"/>
  <path d="M14 11a5 5 0 0 0-7.5-4.3l-3 3a5 5 0 0 0 0 7.1 5 5 0 0 0 7.1 0l1.4-1.4"/>
  <line x1="8" y1="8" x2="8.01" y2="8"/>
  <line x1="16" y1="16" x2="16.01" y2="16"/>
</svg>`,
  },

  unlink: {
    name: 'unlink',
    category: 'actions',
    description: 'Break or remove link',
    tags: ['unlink', 'disconnect', 'break', 'remove'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.5 4.3l1.5-1.5"/>
  <path d="M14 11a5 5 0 0 0-5-5"/>
  <path d="M16 8l-4-4"/>
  <path d="M18.5 5.5a5 5 0 0 1 0 7.1"/>
  <path d="M9 16l-4 4"/>
  <path d="M5.5 18.5a5 5 0 0 1 0-7.1"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FILES CATEGORY
  // ═══════════════════════════════════════════════════════════════════════════

  file: {
    name: 'file',
    category: 'files',
    description: 'Generic file document',
    tags: ['file', 'document', 'blank'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
</svg>`,
  },

  'file-text': {
    name: 'file-text',
    category: 'files',
    description: 'Text file document with lines',
    tags: ['file', 'document', 'text', 'lines'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <line x1="8" y1="13" x2="16" y2="13"/>
  <line x1="8" y1="17" x2="16" y2="17"/>
  <line x1="8" y1="9" x2="10" y2="9"/>
</svg>`,
  },

  'file-code': {
    name: 'file-code',
    category: 'files',
    description: 'Code file document with brackets',
    tags: ['file', 'document', 'code', 'programming'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <polyline points="10 14 8 16 10 18"/>
  <polyline points="14 14 16 16 14 18"/>
</svg>`,
  },

  'file-image': {
    name: 'file-image',
    category: 'files',
    description: 'Image file document with picture icon',
    tags: ['file', 'document', 'image', 'photo'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <circle cx="10" cy="13" r="1.5"/>
  <polyline points="7 18 11 14 13 16 17 12 17 18 7 18"/>
</svg>`,
  },

  'file-video': {
    name: 'file-video',
    category: 'files',
    description: 'Video file document with play icon',
    tags: ['file', 'document', 'video', 'media'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <polygon points="10 12 10 18 15 15 10 12"/>
</svg>`,
  },

  'file-audio': {
    name: 'file-audio',
    category: 'files',
    description: 'Audio file document with music note',
    tags: ['file', 'document', 'audio', 'music', 'sound'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <path d="M14 11v5.5"/>
  <circle cx="12" cy="16.5" r="1.5"/>
  <path d="M14 11a2 2 0 0 1 2 2"/>
</svg>`,
  },

  'file-archive': {
    name: 'file-archive',
    category: 'files',
    description: 'Archive/zip file document with zipper',
    tags: ['file', 'document', 'archive', 'zip', 'compress'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <line x1="10" y1="11" x2="12" y2="11"/>
  <line x1="10" y1="13" x2="12" y2="13"/>
  <line x1="10" y1="15" x2="12" y2="15"/>
  <path d="M10 17h2l1 2h-4z"/>
</svg>`,
  },

  'file-plus': {
    name: 'file-plus',
    category: 'files',
    description: 'New file document with plus icon',
    tags: ['file', 'document', 'new', 'add', 'create'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <line x1="12" y1="12" x2="12" y2="18"/>
  <line x1="9" y1="15" x2="15" y2="15"/>
</svg>`,
  },

  'file-minus': {
    name: 'file-minus',
    category: 'files',
    description: 'Remove file document with minus icon',
    tags: ['file', 'document', 'remove', 'delete', 'subtract'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
  <polyline points="13 2 13 9 20 9"/>
  <line x1="9" y1="15" x2="15" y2="15"/>
</svg>`,
  },

  folder: {
    name: 'folder',
    category: 'files',
    description: 'Folder closed with angled edge',
    tags: ['folder', 'directory', 'closed', 'storage'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  <line x1="2" y1="9" x2="22" y2="9"/>
</svg>`,
  },

  'folder-open': {
    name: 'folder-open',
    category: 'files',
    description: 'Folder open showing contents',
    tags: ['folder', 'directory', 'open', 'expanded'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 9V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v1"/>
  <path d="M2 9h20l-2 9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L2 9z"/>
</svg>`,
  },

  'folder-plus': {
    name: 'folder-plus',
    category: 'files',
    description: 'New folder with plus icon',
    tags: ['folder', 'directory', 'new', 'add', 'create'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
  <line x1="12" y1="11" x2="12" y2="17"/>
  <line x1="9" y1="14" x2="15" y2="14"/>
</svg>`,
  },

  archive: {
    name: 'archive',
    category: 'files',
    description: 'Archive storage box',
    tags: ['archive', 'storage', 'box', 'backup'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="4" rx="1"/>
  <path d="M3 7v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <path d="M12 11v4"/>
  <polyline points="10 15 12 17 14 15"/>
</svg>`,
  },

  clipboard: {
    name: 'clipboard',
    category: 'files',
    description: 'Clipboard with document',
    tags: ['clipboard', 'copy', 'paste', 'document'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="8" y="2" width="8" height="4" rx="1"/>
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
  <line x1="9" y1="12" x2="15" y2="12"/>
  <line x1="9" y1="16" x2="15" y2="16"/>
</svg>`,
  },

  attachment: {
    name: 'attachment',
    category: 'files',
    description: 'Attachment paperclip with angled design',
    tags: ['attachment', 'paperclip', 'attach', 'link'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10.5V18a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V7a5 5 0 0 1 10 0v10.5"/>
  <path d="M8 12V7a3 3 0 0 1 6 0v10a1 1 0 0 1-2 0V9"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MEDIA ICONS - Media playback and control icons
  // ═══════════════════════════════════════════════════════════════════════════

  play: {
    name: 'play',
    category: 'media',
    description: 'Play media content',
    tags: ['play', 'start', 'media', 'video', 'audio'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
</svg>`,
  },

  pause: {
    name: 'pause',
    category: 'media',
    description: 'Pause media playback',
    tags: ['pause', 'stop', 'media', 'video', 'audio'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="10" y1="9" x2="10" y2="15"/>
  <line x1="14" y1="9" x2="14" y2="15"/>
</svg>`,
  },

  stop: {
    name: 'stop',
    category: 'media',
    description: 'Stop media playback',
    tags: ['stop', 'end', 'media', 'video', 'audio'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <rect x="9" y="9" width="6" height="6" rx="0.5" fill="currentColor"/>
</svg>`,
  },

  'skip-back': {
    name: 'skip-back',
    category: 'media',
    description: 'Skip to previous track',
    tags: ['previous', 'back', 'rewind', 'media', 'track'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="19 20 9 12 19 4 19 20" fill="currentColor"/>
  <line x1="5" y1="4" x2="5" y2="20"/>
</svg>`,
  },

  'skip-forward': {
    name: 'skip-forward',
    category: 'media',
    description: 'Skip to next track',
    tags: ['next', 'forward', 'skip', 'media', 'track'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="5 4 15 12 5 20 5 4" fill="currentColor"/>
  <line x1="19" y1="4" x2="19" y2="20"/>
</svg>`,
  },

  rewind: {
    name: 'rewind',
    category: 'media',
    description: 'Rewind playback',
    tags: ['rewind', 'back', 'media', 'video'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11 19 2 12 11 5 11 19" fill="currentColor"/>
  <polygon points="22 19 13 12 22 5 22 19" fill="currentColor"/>
</svg>`,
  },

  'fast-forward': {
    name: 'fast-forward',
    category: 'media',
    description: 'Fast forward playback',
    tags: ['fast-forward', 'skip', 'media', 'video'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 5 22 12 13 19 13 5" fill="currentColor"/>
  <polygon points="2 5 11 12 2 19 2 5" fill="currentColor"/>
</svg>`,
  },

  'volume-high': {
    name: 'volume-high',
    category: 'media',
    description: 'Volume on/high',
    tags: ['volume', 'sound', 'audio', 'speaker', 'loud'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
  <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
  <path d="M18 5.5a9 9 0 0 1 0 13"/>
</svg>`,
  },

  'volume-low': {
    name: 'volume-low',
    category: 'media',
    description: 'Volume low',
    tags: ['volume', 'sound', 'audio', 'speaker', 'quiet'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
  <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
</svg>`,
  },

  'volume-off': {
    name: 'volume-off',
    category: 'media',
    description: 'Volume muted',
    tags: ['volume', 'mute', 'audio', 'speaker', 'silent'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
  <line x1="17" y1="9" x2="21" y2="15"/>
  <line x1="21" y1="9" x2="17" y2="15"/>
</svg>`,
  },

  mic: {
    name: 'mic',
    category: 'media',
    description: 'Microphone on',
    tags: ['microphone', 'audio', 'record', 'voice', 'input'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="2" width="6" height="11" rx="3"/>
  <path d="M5 10v2a7 7 0 0 0 14 0v-2"/>
  <line x1="12" y1="19" x2="12" y2="23"/>
  <line x1="8" y1="23" x2="16" y2="23"/>
</svg>`,
  },

  'mic-off': {
    name: 'mic-off',
    category: 'media',
    description: 'Microphone muted',
    tags: ['microphone', 'mute', 'audio', 'silent', 'disabled'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="2" x2="22" y2="22"/>
  <path d="M9 9v4a3 3 0 0 0 5.12 2.12"/>
  <path d="M15 5v5"/>
  <path d="M9 2h6a3 3 0 0 1 3 3v3"/>
  <path d="M5 10v2a7 7 0 0 0 11.5 5.5"/>
  <path d="M19 10v1"/>
  <line x1="12" y1="19" x2="12" y2="23"/>
  <line x1="8" y1="23" x2="16" y2="23"/>
</svg>`,
  },

  camera: {
    name: 'camera',
    category: 'media',
    description: 'Camera/video on',
    tags: ['camera', 'video', 'photo', 'record', 'capture'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="20" height="14" rx="2"/>
  <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/>
  <circle cx="12" cy="13" r="3"/>
  <path d="M17 9.5h.01"/>
</svg>`,
  },

  'camera-off': {
    name: 'camera-off',
    category: 'media',
    description: 'Camera/video off',
    tags: ['camera', 'video', 'disabled', 'off', 'hidden'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="2" x2="22" y2="22"/>
  <path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"/>
  <path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"/>
  <path d="M14.121 15.121A3 3 0 1 1 9.88 10.88"/>
</svg>`,
  },

  image: {
    name: 'image',
    category: 'media',
    description: 'Image/photo file',
    tags: ['image', 'photo', 'picture', 'file', 'media'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
  <polyline points="21 15 16 10 5 21"/>
  <line x1="10" y1="14" x2="3" y2="21"/>
</svg>`,
  },

  video: {
    name: 'video',
    category: 'media',
    description: 'Video file',
    tags: ['video', 'film', 'movie', 'file', 'media'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="5" width="14" height="14" rx="2"/>
  <polygon points="16 9 22 6 22 18 16 15 16 9"/>
  <circle cx="9" cy="12" r="2"/>
</svg>`,
  },

  music: {
    name: 'music',
    category: 'media',
    description: 'Music/audio file',
    tags: ['music', 'audio', 'sound', 'file', 'song'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 18V5l12-2v13"/>
  <circle cx="6" cy="18" r="3"/>
  <circle cx="18" cy="16" r="3"/>
  <line x1="9" y1="9" x2="21" y2="7"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DATA ICONS - Charts, databases, cloud, time
  // ═══════════════════════════════════════════════════════════════════════════

  'chart-bar': {
    name: 'chart-bar',
    category: 'data',
    description: 'Bar chart for data visualization',
    tags: ['chart', 'graph', 'statistics', 'analytics', 'data'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="20" x2="21" y2="20"/>
  <line x1="3" y1="20" x2="3" y2="4"/>
  <rect x="7" y="12" width="3" height="8"/>
  <rect x="14" y="8" width="3" height="12"/>
  <line x1="7" y1="7" x2="10" y2="7"/>
  <line x1="7" y1="8" x2="10" y2="8"/>
</svg>`,
  },

  'chart-line': {
    name: 'chart-line',
    category: 'data',
    description: 'Line chart showing trends over time',
    tags: ['chart', 'graph', 'trend', 'analytics', 'data'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="20" x2="21" y2="20"/>
  <line x1="3" y1="20" x2="3" y2="4"/>
  <polyline points="6 15 9 9 13 11 16 6 20 10"/>
  <circle cx="6" cy="15" r="1.5" fill="currentColor"/>
  <circle cx="9" cy="9" r="1.5" fill="currentColor"/>
  <circle cx="13" cy="11" r="1.5" fill="currentColor"/>
  <circle cx="16" cy="6" r="1.5" fill="currentColor"/>
  <circle cx="20" cy="10" r="1.5" fill="currentColor"/>
</svg>`,
  },

  'chart-pie': {
    name: 'chart-pie',
    category: 'data',
    description: 'Pie chart for proportional data display',
    tags: ['chart', 'graph', 'pie', 'proportion', 'data'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M12 3v9l6.36 3.68"/>
  <line x1="12" y1="12" x2="19" y2="7"/>
</svg>`,
  },

  database: {
    name: 'database',
    category: 'data',
    description: 'Database storage with stacked cylinders',
    tags: ['database', 'storage', 'server', 'data'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <ellipse cx="12" cy="5" rx="8" ry="3"/>
  <path d="M4 5v5c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
  <path d="M4 10v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"/>
  <path d="M4 15v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4"/>
</svg>`,
  },

  table: {
    name: 'table',
    category: 'data',
    description: 'Data table grid layout',
    tags: ['table', 'grid', 'spreadsheet', 'data'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="16" rx="1"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <line x1="3" y1="15" x2="21" y2="15"/>
  <line x1="10" y1="10" x2="10" y2="20"/>
  <line x1="15" y1="10" x2="15" y2="20"/>
</svg>`,
  },

  cloud: {
    name: 'cloud',
    category: 'data',
    description: 'Cloud storage or cloud computing',
    tags: ['cloud', 'storage', 'sync', 'remote'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
</svg>`,
  },

  'cloud-upload': {
    name: 'cloud-upload',
    category: 'data',
    description: 'Upload to cloud storage',
    tags: ['cloud', 'upload', 'sync', 'backup'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  <line x1="12" y1="16" x2="12" y2="10"/>
  <polyline points="9 12 12 9 15 12"/>
</svg>`,
  },

  'cloud-download': {
    name: 'cloud-download',
    category: 'data',
    description: 'Download from cloud storage',
    tags: ['cloud', 'download', 'sync', 'restore'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  <line x1="12" y1="10" x2="12" y2="16"/>
  <polyline points="15 14 12 17 9 14"/>
</svg>`,
  },

  sync: {
    name: 'sync',
    category: 'data',
    description: 'Synchronize or refresh data',
    tags: ['sync', 'refresh', 'reload', 'update'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 10c-1.5-4-5.5-7-10-7-5.5 0-10 4.5-10 10s4.5 10 10 10c4 0 7.5-2.3 9.2-5.6"/>
  <polyline points="17 10 21 10 21 6"/>
  <path d="M3 14c1.5 4 5.5 7 10 7"/>
  <polyline points="7 14 3 14 3 18"/>
</svg>`,
  },

  calendar: {
    name: 'calendar',
    category: 'data',
    description: 'Calendar for date selection',
    tags: ['calendar', 'date', 'schedule', 'time'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="4" width="18" height="18" rx="2"/>
  <line x1="3" y1="10" x2="21" y2="10"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="14" x2="8.01" y2="14"/>
  <line x1="12" y1="14" x2="12.01" y2="14"/>
  <line x1="16" y1="14" x2="16.01" y2="14"/>
  <line x1="8" y1="18" x2="8.01" y2="18"/>
  <line x1="12" y1="18" x2="12.01" y2="18"/>
</svg>`,
  },

  clock: {
    name: 'clock',
    category: 'data',
    description: 'Clock showing time',
    tags: ['clock', 'time', 'schedule', 'hour'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <polyline points="12 6 12 12 16 14"/>
  <line x1="12" y1="3" x2="12" y2="4"/>
  <line x1="12" y1="20" x2="12" y2="21"/>
  <line x1="3" y1="12" x2="4" y2="12"/>
  <line x1="20" y1="12" x2="21" y2="12"/>
</svg>`,
  },

  timer: {
    name: 'timer',
    category: 'data',
    description: 'Timer for countdown or duration',
    tags: ['timer', 'countdown', 'stopwatch', 'time'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13" r="8"/>
  <polyline points="12 9 12 13 15 15"/>
  <line x1="9" y1="3" x2="15" y2="3"/>
  <line x1="12" y1="3" x2="12" y2="5"/>
  <path d="M18 7l1.5-1.5"/>
</svg>`,
  },

  hash: {
    name: 'hash',
    category: 'data',
    description: 'Hashtag symbol for numbers or tags',
    tags: ['hash', 'hashtag', 'number', 'tag', 'symbol'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="9" x2="20" y2="9"/>
  <line x1="4" y1="15" x2="20" y2="15"/>
  <line x1="10" y1="3" x2="8" y2="21"/>
  <line x1="16" y1="3" x2="14" y2="21"/>
</svg>`,
  },

  percent: {
    name: 'percent',
    category: 'data',
    description: 'Percentage symbol for rates or statistics',
    tags: ['percent', 'percentage', 'rate', 'statistics'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="19" y1="5" x2="5" y2="19"/>
  <circle cx="7" cy="7" r="2.5"/>
  <circle cx="17" cy="17" r="2.5"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SOCIAL ICONS - Likes, favorites, bookmarks, engagement
  // ═══════════════════════════════════════════════════════════════════════════

  heart: {
    name: 'heart',
    category: 'social',
    description: 'Heart for liking or favoriting (outline)',
    tags: ['heart', 'like', 'favorite', 'love'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>`,
  },

  'heart-filled': {
    name: 'heart-filled',
    category: 'social',
    description: 'Heart for liked or favorited state (filled)',
    tags: ['heart', 'like', 'favorite', 'love', 'filled'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor"/>
</svg>`,
  },

  star: {
    name: 'star',
    category: 'social',
    description: 'Star for rating or marking favorites (outline)',
    tags: ['star', 'rating', 'favorite', 'bookmark'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>`,
  },

  'star-filled': {
    name: 'star-filled',
    category: 'social',
    description: 'Star for rated or favorited state (filled)',
    tags: ['star', 'rating', 'favorite', 'bookmark', 'filled'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>
</svg>`,
  },

  'thumbs-up': {
    name: 'thumbs-up',
    category: 'social',
    description: 'Thumbs up for approval or positive feedback',
    tags: ['thumbs', 'like', 'approve', 'positive'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M7 22V11"/>
  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
</svg>`,
  },

  'thumbs-down': {
    name: 'thumbs-down',
    category: 'social',
    description: 'Thumbs down for disapproval or negative feedback',
    tags: ['thumbs', 'dislike', 'disapprove', 'negative'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 2v11"/>
  <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zM17 2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>
</svg>`,
  },

  bookmark: {
    name: 'bookmark',
    category: 'social',
    description: 'Bookmark for saving content (outline)',
    tags: ['bookmark', 'save', 'favorite', 'mark'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
</svg>`,
  },

  'bookmark-filled': {
    name: 'bookmark-filled',
    category: 'social',
    description: 'Bookmark for bookmarked state (filled)',
    tags: ['bookmark', 'save', 'favorite', 'mark', 'filled'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="currentColor"/>
</svg>`,
  },

  flag: {
    name: 'flag',
    category: 'social',
    description: 'Flag for reporting or marking content',
    tags: ['flag', 'report', 'mark', 'alert'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
  <line x1="4" y1="22" x2="4" y2="15"/>
</svg>`,
  },

  award: {
    name: 'award',
    category: 'social',
    description: 'Award badge for achievements or recognition',
    tags: ['award', 'badge', 'achievement', 'medal'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="9" r="6"/>
  <polyline points="8 14 8 21 12 19 16 21 16 14"/>
  <circle cx="12" cy="9" r="2" fill="currentColor"/>
</svg>`,
  },

  trending: {
    name: 'trending',
    category: 'social',
    description: 'Trending upward arrow for popular content',
    tags: ['trending', 'popular', 'growth', 'arrow', 'up'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
  <polyline points="17 6 23 6 23 12"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECURITY ICONS
  // ═══════════════════════════════════════════════════════════════════════════

  lock: {
    name: 'lock',
    category: 'security',
    description: 'Locked/secure state with closed padlock',
    tags: ['secure', 'locked', 'padlock', 'privacy', 'encrypted'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="2"/>
  <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
  <circle cx="12" cy="16" r="1" fill="currentColor"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
  },

  unlock: {
    name: 'unlock',
    category: 'security',
    description: 'Unlocked state with open padlock',
    tags: ['unlocked', 'open', 'accessible', 'public'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="10" rx="2"/>
  <path d="M8 11V7a4 4 0 0 1 7.5-2"/>
  <circle cx="12" cy="16" r="1" fill="currentColor"/>
  <line x1="12" y1="17" x2="12" y2="18.5"/>
</svg>`,
  },

  key: {
    name: 'key',
    category: 'security',
    description: 'Access key with geometric design',
    tags: ['access', 'password', 'authentication', 'unlock'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7" cy="7" r="4"/>
  <path d="M10.5 10.5L20 21"/>
  <path d="M17 21l3-3"/>
  <path d="M20 18v3h-3"/>
  <line x1="11" y1="6" x2="13" y2="6"/>
</svg>`,
  },

  shield: {
    name: 'shield',
    category: 'security',
    description: 'Security shield outline with tech angles',
    tags: ['protection', 'security', 'defense', 'safe'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5 2.5 9.5 8 11 5.5-1.5 8-6 8-11V7l-8-4z"/>
  <path d="M12 8v8"/>
</svg>`,
  },

  'shield-check': {
    name: 'shield-check',
    category: 'security',
    description: 'Verified/protected with shield and checkmark',
    tags: ['verified', 'protected', 'secure', 'approved', 'safe'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5 2.5 9.5 8 11 5.5-1.5 8-6 8-11V7l-8-4z"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>`,
  },

  'shield-x': {
    name: 'shield-x',
    category: 'security',
    description: 'Not protected with shield and X mark',
    tags: ['unprotected', 'vulnerable', 'warning', 'blocked', 'denied'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5 2.5 9.5 8 11 5.5-1.5 8-6 8-11V7l-8-4z"/>
  <line x1="10" y1="10" x2="14" y2="14"/>
  <line x1="14" y1="10" x2="10" y2="14"/>
</svg>`,
  },

  eye: {
    name: 'eye',
    category: 'security',
    description: 'Visible/show with cyberpunk eye design',
    tags: ['visible', 'show', 'view', 'watch', 'visibility'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
  <circle cx="12" cy="12" r="3"/>
  <circle cx="12" cy="12" r="1" fill="currentColor"/>
</svg>`,
  },

  'eye-off': {
    name: 'eye-off',
    category: 'security',
    description: 'Hidden/hide with eye and slash',
    tags: ['hidden', 'hide', 'invisible', 'privacy', 'conceal'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/>
  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/>
  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
  },

  fingerprint: {
    name: 'fingerprint',
    category: 'security',
    description: 'Biometric authentication fingerprint scan',
    tags: ['biometric', 'auth', 'identity', 'scan', 'fingerprint'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 11c0-2.5 1.5-5 4-5"/>
  <path d="M12 18c2.5 0 4-2.5 4-5s-1.5-5-4-5-4 2.5-4 5"/>
  <path d="M8 13c0-2 1-3 1-3"/>
  <path d="M8 17c0-1.5.5-2.5.5-2.5"/>
  <path d="M14 18c0 1.5.5 2.5.5 2.5"/>
  <path d="M12 11v-1"/>
  <path d="M12 18v3"/>
  <path d="M16 13c0 1.5-.5 2.5-.5 2.5"/>
</svg>`,
  },

  user: {
    name: 'user',
    category: 'security',
    description: 'User/profile person silhouette',
    tags: ['profile', 'account', 'person', 'avatar', 'identity'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="4"/>
  <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/>
  <path d="M9 8l.5-1"/>
  <path d="M15 8l-.5-1"/>
</svg>`,
  },

  users: {
    name: 'users',
    category: 'security',
    description: 'Multiple users with two person silhouettes',
    tags: ['group', 'team', 'people', 'multiple', 'community'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="7" r="3"/>
  <circle cx="16" cy="9" r="2.5"/>
  <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5"/>
  <path d="M16 19c0-2 1.5-4 5-4"/>
</svg>`,
  },

  'user-plus': {
    name: 'user-plus',
    category: 'security',
    description: 'Add user with plus icon',
    tags: ['add', 'invite', 'new', 'register', 'signup'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10" cy="8" r="4"/>
  <path d="M3 20c0-3.5 3-6 7-6s7 2.5 7 6"/>
  <line x1="19" y1="8" x2="19" y2="14"/>
  <line x1="16" y1="11" x2="22" y2="11"/>
</svg>`,
  },

  'user-minus': {
    name: 'user-minus',
    category: 'security',
    description: 'Remove user with minus icon',
    tags: ['remove', 'delete', 'ban', 'revoke', 'kick'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="10" cy="8" r="4"/>
  <path d="M3 20c0-3.5 3-6 7-6s7 2.5 7 6"/>
  <line x1="16" y1="11" x2="22" y2="11"/>
</svg>`,
  },

  'log-in': {
    name: 'log-in',
    category: 'security',
    description: 'Log in with arrow entering door frame',
    tags: ['login', 'signin', 'enter', 'access', 'authenticate'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
  <polyline points="10 17 15 12 10 7"/>
  <line x1="15" y1="12" x2="3" y2="12"/>
  <line x1="18" y1="7" x2="18" y2="9"/>
  <line x1="18" y1="15" x2="18" y2="17"/>
</svg>`,
  },

  'log-out': {
    name: 'log-out',
    category: 'security',
    description: 'Log out with arrow exiting door frame',
    tags: ['logout', 'signout', 'exit', 'leave', 'disconnect'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
  <polyline points="16 17 21 12 16 7"/>
  <line x1="21" y1="12" x2="9" y2="12"/>
  <line x1="6" y1="7" x2="6" y2="9"/>
  <line x1="6" y1="15" x2="6" y2="17"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TODO: Add more icons here

  // ═══════════════════════════════════════════════════════════════════════════
  // TECH ICONS (Additional)
  // ═══════════════════════════════════════════════════════════════════════════

  code: {
    name: 'code',
    category: 'tech',
    description: 'Code/programming with angle brackets',
    tags: ['programming', 'code', 'developer', 'markup'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="16 18 22 12 16 6"/>
  <polyline points="8 6 2 12 8 18"/>
  <line x1="13" y1="4" x2="11" y2="20"/>
</svg>`,
  },

  circuit: {
    name: 'circuit',
    category: 'tech',
    description: 'Circuit board pattern with nodes',
    tags: ['electronics', 'board', 'hardware', 'connection'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="2"/>
  <circle cx="18" cy="6" r="2"/>
  <circle cx="6" cy="18" r="2"/>
  <circle cx="18" cy="18" r="2"/>
  <line x1="8" y1="6" x2="16" y2="6"/>
  <line x1="6" y1="8" x2="6" y2="16"/>
  <line x1="18" y1="8" x2="18" y2="16"/>
  <line x1="8" y1="18" x2="16" y2="18"/>
  <line x1="12" y1="6" x2="12" y2="10"/>
  <line x1="6" y1="12" x2="10" y2="12"/>
  <circle cx="12" cy="12" r="1.5"/>
</svg>`,
  },

  wifi: {
    name: 'wifi',
    category: 'tech',
    description: 'WiFi wireless connection',
    tags: ['wireless', 'network', 'connection', 'internet'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.5a10.5 10.5 0 0 1 14 0"/>
  <path d="M8.5 15.5a6 6 0 0 1 7 0"/>
  <circle cx="12" cy="19" r="1" fill="currentColor"/>
  <path d="M1.5 9a14.5 14.5 0 0 1 21 0"/>
</svg>`,
  },

  'wifi-off': {
    name: 'wifi-off',
    category: 'tech',
    description: 'No WiFi or disconnected',
    tags: ['wireless', 'disconnected', 'offline', 'no-connection'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.5a10.5 10.5 0 0 1 3.5-2.5"/>
  <path d="M15.5 10a10.5 10.5 0 0 1 3.5 2.5"/>
  <path d="M8.5 15.5a6 6 0 0 1 2.5-1.5"/>
  <path d="M13 14a6 6 0 0 1 2.5 1.5"/>
  <circle cx="12" cy="19" r="1" fill="currentColor"/>
  <line x1="2" y1="2" x2="22" y2="22"/>
</svg>`,
  },

  bluetooth: {
    name: 'bluetooth',
    category: 'tech',
    description: 'Bluetooth wireless connection',
    tags: ['wireless', 'connection', 'pairing', 'device'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3l7 5-7 5V3z"/>
  <path d="M12 21l7-5-7-5v10z"/>
  <line x1="5" y1="7" x2="12" y2="13"/>
  <line x1="5" y1="17" x2="12" y2="11"/>
</svg>`,
  },

  server: {
    name: 'server',
    category: 'tech',
    description: 'Server or database storage',
    tags: ['database', 'storage', 'backend', 'hosting'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="6" rx="1"/>
  <rect x="3" y="9" width="18" height="6" rx="1"/>
  <rect x="3" y="15" width="18" height="6" rx="1"/>
  <circle cx="7" cy="6" r="0.5" fill="currentColor"/>
  <circle cx="7" cy="12" r="0.5" fill="currentColor"/>
  <circle cx="7" cy="18" r="0.5" fill="currentColor"/>
  <line x1="10" y1="6" x2="13" y2="6"/>
  <line x1="10" y1="12" x2="13" y2="12"/>
  <line x1="10" y1="18" x2="13" y2="18"/>
</svg>`,
  },

  api: {
    name: 'api',
    category: 'tech',
    description: 'API endpoint or interface',
    tags: ['interface', 'endpoint', 'connection', 'integration'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="8" width="6" height="8" rx="1"/>
  <rect x="15" y="8" width="6" height="8" rx="1"/>
  <circle cx="12" cy="12" r="2"/>
  <line x1="9" y1="12" x2="10" y2="12"/>
  <line x1="14" y1="12" x2="15" y2="12"/>
  <path d="M6 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>
  <path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"/>
</svg>`,
  },

  'git-branch': {
    name: 'git-branch',
    category: 'tech',
    description: 'Git branch workflow',
    tags: ['git', 'version-control', 'branch', 'development'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="18" cy="18" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <path d="M6 9v6"/>
  <path d="M9 9a6 6 0 0 0 6 6h0a3 3 0 0 1 3 3"/>
</svg>`,
  },

  'git-commit': {
    name: 'git-commit',
    category: 'tech',
    description: 'Git commit point',
    tags: ['git', 'version-control', 'commit', 'checkpoint'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <line x1="2" y1="12" x2="8" y2="12"/>
  <line x1="16" y1="12" x2="22" y2="12"/>
</svg>`,
  },

  'git-merge': {
    name: 'git-merge',
    category: 'tech',
    description: 'Git merge branches',
    tags: ['git', 'version-control', 'merge', 'combine'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="18" cy="18" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <path d="M6 9v6"/>
  <path d="M15 15a6 6 0 0 0-6-6h0a3 3 0 0 1-3-3"/>
</svg>`,
  },

  'git-pull': {
    name: 'git-pull',
    category: 'tech',
    description: 'Git pull request',
    tags: ['git', 'version-control', 'pull-request', 'review'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="6" cy="6" r="3"/>
  <circle cx="18" cy="6" r="3"/>
  <circle cx="6" cy="18" r="3"/>
  <line x1="6" y1="9" x2="6" y2="15"/>
  <polyline points="14 9 18 9 18 18"/>
  <polyline points="15 12 18 9 21 12"/>
</svg>`,
  },

  bug: {
    name: 'bug',
    category: 'tech',
    description: 'Bug or software issue',
    tags: ['debug', 'error', 'issue', 'insect'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 7V4"/>
  <path d="M7.5 7.5L5 5"/>
  <path d="M16.5 7.5L19 5"/>
  <rect x="8" y="9" width="8" height="10" rx="3"/>
  <line x1="3" y1="12" x2="8" y2="12"/>
  <line x1="16" y1="12" x2="21" y2="12"/>
  <line x1="3" y1="16" x2="8" y2="16"/>
  <line x1="16" y1="16" x2="21" y2="16"/>
  <path d="M7.5 19.5L5 22"/>
  <path d="M16.5 19.5L19 22"/>
</svg>`,
  },

  settings: {
    name: 'settings',
    category: 'tech',
    description: 'Settings or configuration',
    tags: ['config', 'preferences', 'gear', 'options'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="3"/>
  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>`,
  },

  sliders: {
    name: 'sliders',
    category: 'tech',
    description: 'Sliders or adjustments',
    tags: ['controls', 'adjust', 'settings', 'parameters'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="6" x2="8" y2="6"/>
  <line x1="12" y1="6" x2="20" y2="6"/>
  <circle cx="10" cy="6" r="2"/>
  <line x1="4" y1="12" x2="14" y2="12"/>
  <line x1="18" y1="12" x2="20" y2="12"/>
  <circle cx="16" cy="12" r="2"/>
  <line x1="4" y1="18" x2="6" y2="18"/>
  <line x1="10" y1="18" x2="20" y2="18"/>
  <circle cx="8" cy="18" r="2"/>
</svg>`,
  },

  zap: {
    name: 'zap',
    category: 'tech',
    description: 'Lightning bolt or power',
    tags: ['power', 'energy', 'fast', 'performance'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>`,
  },

  cpu: {
    name: 'cpu',
    category: 'tech',
    description: 'CPU processor usage',
    tags: ['processor', 'performance', 'computing', 'hardware'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="7" y="7" width="10" height="10" rx="1"/>
  <line x1="9" y1="7" x2="9" y2="4"/>
  <line x1="12" y1="7" x2="12" y2="4"/>
  <line x1="15" y1="7" x2="15" y2="4"/>
  <line x1="9" y1="17" x2="9" y2="20"/>
  <line x1="12" y1="17" x2="12" y2="20"/>
  <line x1="15" y1="17" x2="15" y2="20"/>
  <line x1="7" y1="9" x2="4" y2="9"/>
  <line x1="7" y1="12" x2="4" y2="12"/>
  <line x1="7" y1="15" x2="4" y2="15"/>
  <line x1="17" y1="9" x2="20" y2="9"/>
  <line x1="17" y1="12" x2="20" y2="12"/>
  <line x1="17" y1="15" x2="20" y2="15"/>
  <rect x="10" y="10" width="4" height="4" rx="0.5"/>
</svg>`,
  },

  memory: {
    name: 'memory',
    category: 'tech',
    description: 'Memory or RAM module',
    tags: ['ram', 'storage', 'hardware', 'performance'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="3" width="14" height="18" rx="1"/>
  <line x1="9" y1="7" x2="9" y2="14"/>
  <line x1="12" y1="7" x2="12" y2="14"/>
  <line x1="15" y1="7" x2="15" y2="14"/>
  <line x1="5" y1="17" x2="19" y2="17"/>
  <line x1="8" y1="21" x2="8" y2="19"/>
  <line x1="12" y1="21" x2="12" y2="19"/>
  <line x1="16" y1="21" x2="16" y2="19"/>
</svg>`,
  },

  globe: {
    name: 'globe',
    category: 'tech',
    description: 'Web or internet globe',
    tags: ['web', 'internet', 'world', 'network'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="2" y1="12" x2="22" y2="12"/>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>`,
  },

  'qr-code': {
    name: 'qr-code',
    category: 'tech',
    description: 'QR code scanner',
    tags: ['scan', 'barcode', 'reader', 'mobile'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="7" height="7" rx="1"/>
  <rect x="14" y="3" width="7" height="7" rx="1"/>
  <rect x="3" y="14" width="7" height="7" rx="1"/>
  <rect x="5" y="5" width="3" height="3"/>
  <rect x="16" y="5" width="3" height="3"/>
  <rect x="5" y="16" width="3" height="3"/>
  <line x1="14" y1="14" x2="14" y2="16"/>
  <line x1="17" y1="14" x2="17" y2="16"/>
  <line x1="20" y1="14" x2="20" y2="16"/>
  <line x1="14" y1="18" x2="16" y2="18"/>
  <line x1="14" y1="21" x2="16" y2="21"/>
  <line x1="18" y1="18" x2="21" y2="18"/>
  <line x1="18" y1="21" x2="21" y2="21"/>
</svg>`,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COMMUNICATION ICONS
  // ═══════════════════════════════════════════════════════════════════════════

  bell: {
    name: 'bell',
    category: 'communication',
    description: 'Notification bell',
    tags: ['notification', 'alert', 'reminder', 'alarm'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="12" y1="3" x2="12" y2="5"/>
  <line x1="9" y1="3" x2="9.5" y2="4.5"/>
  <line x1="15" y1="3" x2="14.5" y2="4.5"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2c.552 0 1 .448 1 1v1.07A6.002 6.002 0 0 1 18 10c0 3.5 1.5 6 3 7.5v.5H3v-.5c1.5-1.5 3-4 3-7.5a6.002 6.002 0 0 1 5-5.93V3c0-.552.448-1 1-1zm1 19c0 .552-.448 1-1 1s-1-.448-1-1h2z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" opacity="0.3"/>
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="12" y1="3" x2="12" y2="5"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="12" y1="3" x2="12" y2="5"/>
</svg>`,
    },
  },

  'bell-off': {
    name: 'bell-off',
    category: 'communication',
    description: 'Notifications disabled',
    tags: ['mute', 'silent', 'do-not-disturb', 'off'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.56 3.69A6 6 0 0 1 18 8c0 2.5.5 4.5 1.2 6"/>
  <path d="M9 17H3s1.5-1.5 2-5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <path d="M14.5 8.5l1-1"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2c.552 0 1 .448 1 1v1.07A6.002 6.002 0 0 1 18 10c0 1.5.3 2.8.7 4l-15 15L2.3 27.6 4.3 25.6 3 24.5v-.5c1-1 2-2.5 2.5-4.5L21 3.7l-1.4-1.4-6.6 6.6V3c0-.552.448-1 1-1zm1 19c0 .552-.448 1-1 1s-1-.448-1-1h2z"/>
  <path d="M3.7 3l18 18-1.4 1.4-18-18z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.56 3.69A6 6 0 0 1 18 8c0 2.5.5 4.5 1.2 6" fill="currentColor" opacity="0.3"/>
  <path d="M8.56 3.69A6 6 0 0 1 18 8c0 2.5.5 4.5 1.2 6"/>
  <path d="M9 17H3s1.5-1.5 2-5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.56 3.69A6 6 0 0 1 18 8c0 2.5.5 4.5 1.2 6" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M8.56 3.69A6 6 0 0 1 18 8c0 2.5.5 4.5 1.2 6"/>
  <path d="M9 17H3s1.5-1.5 2-5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="3" y1="3" x2="21" y2="21" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
</svg>`,
    },
  },

  message: {
    name: 'message',
    category: 'communication',
    description: 'Message or comment bubble',
    tags: ['chat', 'comment', 'conversation', 'talk'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <line x1="8" y1="10" x2="16" y2="10"/>
  <line x1="8" y1="14" x2="12" y2="14"/>
  <circle cx="18" cy="8" r="0.5" fill="currentColor"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.414l-4.707 4.707A1 1 0 0 1 1 21V5a2 2 0 0 1 2-2h2zm3 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" opacity="0.3"/>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <line x1="8" y1="10" x2="16" y2="10"/>
  <line x1="8" y1="14" x2="12" y2="14"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <line x1="8" y1="10" x2="16" y2="10" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="8" y1="10" x2="16" y2="10"/>
  <line x1="8" y1="14" x2="12" y2="14"/>
</svg>`,
    },
  },

  mail: {
    name: 'mail',
    category: 'communication',
    description: 'Email envelope',
    tags: ['email', 'envelope', 'message', 'send'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
  <line x1="16" y1="9" x2="16" y2="9.5"/>
  <line x1="8" y1="9" x2="8" y2="9.5"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4 4h16a2 2 0 0 1 2 2v.58l-10 6.25L2 6.58V6a2 2 0 0 1 2-2zm-2 4.42l10 6.25 10-6.25V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.42z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" opacity="0.3"/>
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="22,6 12,13 2,6"/>
</svg>`,
    },
  },

  inbox: {
    name: 'inbox',
    category: 'communication',
    description: 'Inbox tray',
    tags: ['mail', 'messages', 'receive', 'tray'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  <line x1="6" y1="8" x2="18" y2="8"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.24 4h9.52a2 2 0 0 1 1.79 1.11L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6l3.45-6.89A2 2 0 0 1 7.24 4zm8.76 9h-2l-2 3h-4l-2-3H8v5h8v-5z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" fill="currentColor" opacity="0.3"/>
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
</svg>`,
    },
  },

  send: {
    name: 'send',
    category: 'communication',
    description: 'Send message or paper plane',
    tags: ['send', 'transmit', 'share', 'deliver'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  <line x1="14" y1="10" x2="16" y2="8"/>
  <circle cx="20" cy="4" r="0.5" fill="currentColor"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M22.707 1.293a1 1 0 0 1 .083 1.32l-.083.094-7 13a1 1 0 0 1-1.706.107l-.07-.107-3.224-5.981-5.98-3.223a1 1 0 0 1 .107-1.707l.094-.083 13-7a1 1 0 0 1 1.32.083l.459.504z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" opacity="0.3"/>
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2" transform="translate(1,-1)" opacity="0.5"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
</svg>`,
    },
  },

  'at-sign': {
    name: 'at-sign',
    category: 'communication',
    description: 'Mention or at symbol',
    tags: ['mention', 'email', 'tag', 'username'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
  <line x1="19" y1="10" x2="19" y2="10.5"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 3.92-.79l.63 1.87A11.96 11.96 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12v1a5 5 0 0 1-10 0V8h2v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94l.63 1.87zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="12" cy="12" r="4"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
</svg>`,
    },
  },

  phone: {
    name: 'phone',
    category: 'communication',
    description: 'Phone call',
    tags: ['call', 'telephone', 'contact', 'voice'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  <line x1="15" y1="3" x2="15" y2="3.5"/>
  <line x1="18" y1="5" x2="18" y2="5.5"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="currentColor" opacity="0.3"/>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
</svg>`,
    },
  },

  'phone-off': {
    name: 'phone-off',
    category: 'communication',
    description: 'End call or phone disabled',
    tags: ['hangup', 'end', 'disconnect', 'decline'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/>
  <path d="M5 5a19.5 19.5 0 0 0 1.5 3.5"/>
  <path d="M2.1 4.11A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81"/>
  <line x1="2" y1="2" x2="22" y2="22"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M2.707 1.293a1 1 0 0 0-1.414 1.414l1.42 1.42A2 2 0 0 0 2 5.99c0 9.28 7.72 17 17.01 17 .54 0 .99-.26.99-.99v-3.45c0-.54-.45-.99-.99-.99-1.23 0-2.42-.2-3.53-.56-.28-.11-.59-.03-.79.17l-1.57 1.97c-1.16-.56-2.24-1.27-3.24-2.09l12.41-12.41a1 1 0 0 0-1.414-1.414L2.707 1.293z"/>
  <line x1="2" y1="2" x2="22" y2="22" stroke="currentColor" stroke-width="2"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" fill="currentColor" opacity="0.3"/>
  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/>
  <path d="M5 5a19.5 19.5 0 0 0 1.5 3.5"/>
  <path d="M2.1 4.11A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81"/>
  <line x1="2" y1="2" x2="22" y2="22"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/>
  <path d="M5 5a19.5 19.5 0 0 0 1.5 3.5"/>
  <path d="M2.1 4.11A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81"/>
  <line x1="2" y1="2" x2="22" y2="22" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="2" y1="2" x2="22" y2="22"/>
</svg>`,
    },
  },

  'video-call': {
    name: 'video-call',
    category: 'communication',
    description: 'Video call or video chat',
    tags: ['video', 'camera', 'conference', 'chat'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="14" height="12" rx="2"/>
  <polygon points="16 10 22 7 22 17 16 14 16 10"/>
  <circle cx="6" cy="10" r="1" fill="currentColor"/>
  <line x1="18" y1="4" x2="20" y2="4"/>
  <line x1="5" y1="15" x2="11" y2="15"/>
</svg>`,
    variants: {
      solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 5h6v-1H6v1z"/>
  <path d="M22 7l-6 3v4l6 3V7z"/>
</svg>`,
      duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="14" height="12" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="2" y="6" width="14" height="12" rx="2"/>
  <polygon points="16 10 22 7 22 17 16 14 16 10"/>
  <circle cx="6" cy="10" r="1" fill="currentColor"/>
  <line x1="5" y1="15" x2="11" y2="15"/>
</svg>`,
      glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="6" width="14" height="12" rx="2" transform="translate(1,-1)" opacity="0.5"/>
  <rect x="2" y="6" width="14" height="12" rx="2"/>
  <polygon points="16 10 22 7 22 17 16 14 16 10" transform="translate(1,-1)" opacity="0.5"/>
  <polygon points="16 10 22 7 22 17 16 14 16 10"/>
  <circle cx="6" cy="10" r="1" fill="currentColor"/>
  <line x1="5" y1="15" x2="11" y2="15"/>
</svg>`,
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STATUS ICONS
  // ═══════════════════════════════════════════════════════════════════════════

  info: {
    name: 'info',
    category: 'status',
    description: 'Information indicator',
    tags: ['information', 'help', 'about', 'details'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="12" y1="16" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12" y2="8.5"/>
  <line x1="8" y1="12" x2="8.5" y2="12"/>
  <line x1="15.5" y1="12" x2="16" y2="12"/>
</svg>`,
  },

  warning: {
    name: 'warning',
    category: 'status',
    description: 'Warning or caution indicator',
    tags: ['alert', 'caution', 'attention', 'danger'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <line x1="12" y1="17" x2="12" y2="17.5"/>
  <line x1="8" y1="16" x2="8.5" y2="16"/>
  <line x1="15.5" y1="16" x2="16" y2="16"/>
</svg>`,
  },

  error: {
    name: 'error',
    category: 'status',
    description: 'Error or danger indicator',
    tags: ['error', 'danger', 'cancel', 'wrong', 'failed'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <line x1="15" y1="9" x2="9" y2="15"/>
  <line x1="9" y1="9" x2="15" y2="15"/>
  <line x1="6" y1="6" x2="6.5" y2="6.5"/>
  <line x1="17.5" y1="17.5" x2="18" y2="18"/>
</svg>`,
  },

  success: {
    name: 'success',
    category: 'status',
    description: 'Success or completion indicator',
    tags: ['success', 'complete', 'done', 'check', 'verified'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <polyline points="9 12 11 14 15 10"/>
  <line x1="17" y1="7" x2="17.5" y2="6.5"/>
  <line x1="6.5" y1="17.5" x2="7" y2="17"/>
</svg>`,
  },

  help: {
    name: 'help',
    category: 'status',
    description: 'Help or question indicator',
    tags: ['help', 'question', 'support', 'faq', 'unknown'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
  <line x1="12" y1="17" x2="12" y2="17.5"/>
  <line x1="16" y1="8" x2="16.5" y2="8"/>
</svg>`,
  },

  loading: {
    name: 'loading',
    category: 'status',
    description: 'Loading spinner',
    tags: ['loading', 'spinner', 'waiting', 'processing', 'busy'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="2" x2="12" y2="6"/>
  <line x1="12" y1="18" x2="12" y2="22"/>
  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
  <line x1="2" y1="12" x2="6" y2="12"/>
  <line x1="18" y1="12" x2="22" y2="12"/>
  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
  <circle cx="12" cy="12" r="1" fill="currentColor"/>
</svg>`,
  },

  progress: {
    name: 'progress',
    category: 'status',
    description: 'Progress indicator',
    tags: ['progress', 'loading', 'percentage', 'completion'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="10"/>
  <path d="M12 2a10 10 0 0 1 8.66 5"/>
  <path d="M20.66 7a10 10 0 0 1 1.34 5"/>
  <line x1="15" y1="5" x2="15.5" y2="4.5"/>
  <line x1="19" y1="9" x2="19.5" y2="8.5"/>
</svg>`,
  },

  online: {
    name: 'online',
    category: 'status',
    description: 'Online or connected status',
    tags: ['online', 'connected', 'active', 'available', 'live'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor"/>
  <circle cx="12" cy="12" r="8"/>
  <line x1="8.5" y1="8.5" x2="9" y2="9"/>
  <line x1="15" y1="15" x2="15.5" y2="15.5"/>
</svg>`,
  },

  offline: {
    name: 'offline',
    category: 'status',
    description: 'Offline or disconnected status',
    tags: ['offline', 'disconnected', 'unavailable', 'away'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="8"/>
  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  <line x1="8" y1="8" x2="8.5" y2="8.5"/>
  <line x1="15.5" y1="15.5" x2="16" y2="16"/>
</svg>`,
  },

  'battery-full': {
    name: 'battery-full',
    category: 'status',
    description: 'Battery fully charged',
    tags: ['battery', 'power', 'full', 'charged', 'energy'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2" ry="2"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <rect x="5" y="10" width="12" height="4" fill="currentColor"/>
  <line x1="18" y1="9" x2="18.5" y2="9"/>
</svg>`,
  },

  'battery-low': {
    name: 'battery-low',
    category: 'status',
    description: 'Battery low charge',
    tags: ['battery', 'low', 'power', 'warning', 'empty'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2" ry="2"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <rect x="5" y="10" width="3" height="4" fill="currentColor"/>
  <line x1="10" y1="10" x2="10" y2="14"/>
  <line x1="12" y1="10" x2="12" y2="14"/>
</svg>`,
  },

  'battery-charging': {
    name: 'battery-charging',
    category: 'status',
    description: 'Battery currently charging',
    tags: ['battery', 'charging', 'power', 'energy', 'recharge'],
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="18" height="10" rx="2" ry="2"/>
  <line x1="22" y1="11" x2="22" y2="13"/>
  <polyline points="11 10 8 12 10 12 8 14"/>
  <line x1="15" y1="9" x2="15.5" y2="8.5"/>
  <line x1="18" y1="14" x2="18.5" y2="14.5"/>
</svg>`,
  },
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
export function getRegisteredByCategory(category: IconDefinition['category']): IconDefinition[] {
  return Object.values(icons).filter((icon) => icon.category === category);
}
