/**
 * Paste Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const paste: IconDefinition = {
  name: 'paste',
  category: 'actions',
  description: 'Paste from clipboard',
  tags: ['paste', 'clipboard', 'insert', 'copy', 'add'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="15" rx="2"/>
  <path d="M9 3h6v3H9z"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <line x1="10" y1="15" x2="14" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1zm0 2v1h6V4H9zm1 6a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="15" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="6" y="6" width="12" height="15" rx="2"/>
  <path d="M9 3h6v3H9z"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <line x1="10" y1="15" x2="14" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="15" rx="2" transform="translate(1,-1)" opacity="0.5"/>
  <rect x="6" y="6" width="12" height="15" rx="2"/>
  <path d="M9 3h6v3H9z"/>
  <line x1="10" y1="11" x2="14" y2="11"/>
  <line x1="10" y1="15" x2="14" y2="15"/>
</svg>`,
  },
};

export default paste;
