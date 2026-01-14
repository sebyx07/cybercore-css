/**
 * Save Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const save: IconDefinition = {
  name: 'save',
  category: 'actions',
  description: 'Save changes or data',
  tags: ['save', 'floppy', 'disk', 'store', 'persist'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
  <path d="M7 3v5h8"/>
  <rect x="8" y="13" width="8" height="8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8l-5-5H5zm2 1v5a1 1 0 0 0 1 1h7V3H8a1 1 0 0 0-1 1zm1 11a1 1 0 0 0-1 1v6h10v-6a1 1 0 0 0-1-1H8z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" fill="currentColor" opacity="0.3"/>
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
  <path d="M7 3v5h8"/>
  <rect x="8" y="13" width="8" height="8"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
  <path d="M7 3v5h8"/>
  <rect x="8" y="13" width="8" height="8"/>
</svg>`,
  },
};

export default save;
