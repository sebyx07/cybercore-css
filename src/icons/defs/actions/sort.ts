/**
 * Sort Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const sort: IconDefinition = {
  name: 'sort',
  category: 'actions',
  description: 'Sort order or arrange data',
  tags: ['sort', 'order', 'arrange', 'organize', 'alphabetize'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 5v14m0 0l-3-3m3 3l3-3"/>
  <line x1="14" y1="7" x2="20" y2="7"/>
  <line x1="14" y1="12" x2="18" y2="12"/>
  <line x1="14" y1="17" x2="16" y2="17"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M8 4a1 1 0 0 1 1 1v11.59l1.29-1.3a1 1 0 1 1 1.42 1.42l-3 3a1 1 0 0 1-1.42 0l-3-3a1 1 0 1 1 1.42-1.42L7 16.59V5a1 1 0 0 1 1-1zm6 2h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 5h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2zm0 5h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 16l3 3 3-3" fill="currentColor" opacity="0.3"/>
  <path d="M8 5v14m0 0l-3-3m3 3l3-3"/>
  <line x1="14" y1="7" x2="20" y2="7"/>
  <line x1="14" y1="12" x2="18" y2="12"/>
  <line x1="14" y1="17" x2="16" y2="17"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 5v14m0 0l-3-3m3 3l3-3" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M8 5v14m0 0l-3-3m3 3l3-3"/>
  <line x1="14" y1="7" x2="20" y2="7"/>
  <line x1="14" y1="12" x2="18" y2="12"/>
  <line x1="14" y1="17" x2="16" y2="17"/>
</svg>`,
  },
};

export default sort;
