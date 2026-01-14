/**
 * Copy Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const copy: IconDefinition = {
  name: 'copy',
  category: 'actions',
  description: 'Copy to clipboard',
  tags: ['copy', 'clipboard', 'duplicate', 'clone', 'paste'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="8" width="11" height="11" rx="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M11 2a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9V4a2 2 0 0 0-2-2zm0 7h8a2 2 0 0 1 2 2v8H7V9h4zm2 3a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1zm2 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="12" height="12" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="9" y="9" width="12" height="12" rx="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  <line x1="12" y1="13" x2="12" y2="17"/>
  <line x1="15" y1="15" x2="18" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="12" height="12" rx="2" transform="translate(1,-1)" opacity="0.5"/>
  <rect x="9" y="9" width="12" height="12" rx="2"/>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  <line x1="12" y1="13" x2="12" y2="17"/>
  <line x1="15" y1="15" x2="18" y2="15"/>
</svg>`,
  },
};

export default copy;
