/**
 * Upload Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const upload: IconDefinition = {
  name: 'upload',
  category: 'actions',
  description: 'Upload file or data',
  tags: ['upload', 'import', 'arrow-up', 'send', 'transfer'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21V9m0 0l-4 4m4-4l4 4"/>
  <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
  <line x1="7" y1="3" x2="17" y2="3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 22a1 1 0 0 1-1-1v-9.59L8.71 13.7a1 1 0 1 1-1.42-1.42l4-4a1 1 0 0 1 1.42 0l4 4a1 1 0 0 1-1.42 1.42L13 11.41V21a1 1 0 0 1-1 1zM3 8a1 1 0 0 1-1-1V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" fill="currentColor" opacity="0.3"/>
  <path d="M12 21V9m0 0l-4 4m4-4l4 4"/>
  <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
  <line x1="7" y1="3" x2="17" y2="3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 21V9m0 0l-4 4m4-4l4 4" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M12 21V9m0 0l-4 4m4-4l4 4"/>
  <path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2"/>
  <line x1="7" y1="3" x2="17" y2="3"/>
</svg>`,
  },
};

export default upload;
