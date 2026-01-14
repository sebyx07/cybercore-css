/**
 * Folder Plus
 * @category files
 */
import type { IconDefinition } from '../../types';

export const folderPlus: IconDefinition = {
  name: 'folder-plus',
  category: 'files',
  description: 'New folder with plus icon',
  tags: ['folder', 'new', 'add', 'create'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8l-2-2H5a2 2 0 0 0-2 2z"/>
  <line x1="12" y1="11" x2="12" y2="17"/>
  <line x1="9" y1="14" x2="15" y2="14"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8l-2-2H5a2 2 0 0 0-2 2zm10 4v2h2v2h-2v2h-2v-2H9v-2h2v-2h2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8l-2-2H5a2 2 0 0 0-2 2z" fill="currentColor" opacity="0.3"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8l-2-2H5a2 2 0 0 0-2 2z"/>
  <line x1="12" y1="11" x2="12" y2="17"/>
  <line x1="9" y1="14" x2="15" y2="14"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8l-2-2H5a2 2 0 0 0-2 2z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-8l-2-2H5a2 2 0 0 0-2 2z"/>
  <line x1="12" y1="11" x2="12" y2="17" transform="translate(-1,1)" opacity="0.5"/>
  <line x1="12" y1="11" x2="12" y2="17"/>
  <line x1="9" y1="14" x2="15" y2="14" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="9" y1="14" x2="15" y2="14"/>
</svg>`,
  },
};

export default folderPlus;
