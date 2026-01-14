/**
 * Archive
 * @category files
 */
import type { IconDefinition } from '../../types';

export const archive: IconDefinition = {
  name: 'archive',
  category: 'files',
  description: 'Archive box',
  tags: ['archive', 'box', 'storage', 'organize'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="4" rx="1"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
  <line x1="10" y1="12" x2="14" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="3" y="3" width="18" height="4" rx="1"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7H3zm7 4h4v2h-4v-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="4" rx="1" fill="currentColor" opacity="0.3"/>
  <rect x="3" y="3" width="18" height="4" rx="1"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
  <line x1="10" y1="12" x2="14" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="4" rx="1" transform="translate(1,-1)" opacity="0.5"/>
  <rect x="3" y="3" width="18" height="4" rx="1"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
  <line x1="10" y1="12" x2="14" y2="12" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="10" y1="12" x2="14" y2="12"/>
</svg>`,
  },
};

export default archive;
