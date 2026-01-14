/**
 * Download Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const download: IconDefinition = {
  name: 'download',
  category: 'actions',
  description: 'Download file or data',
  tags: ['download', 'save', 'export', 'arrow-down', 'fetch'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3v12m0 0l-4-4m4 4l4-4"/>
  <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
  <line x1="7" y1="21" x2="17" y2="21"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2a1 1 0 0 1 1 1v9.59l2.29-2.3a1 1 0 1 1 1.42 1.42l-4 4a1 1 0 0 1-1.42 0l-4-4a1 1 0 1 1 1.42-1.42L11 12.59V3a1 1 0 0 1 1-1zM3 16a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" fill="currentColor" opacity="0.3"/>
  <path d="M12 3v12m0 0l-4-4m4 4l4-4"/>
  <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
  <line x1="7" y1="21" x2="17" y2="21"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3v12m0 0l-4-4m4 4l4-4" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M12 3v12m0 0l-4-4m4 4l4-4"/>
  <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/>
  <line x1="7" y1="21" x2="17" y2="21"/>
</svg>`,
  },
};

export default download;
