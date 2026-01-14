/**
 * Folder Open
 * @category files
 */
import type { IconDefinition } from '../../types';

export const folderOpen: IconDefinition = {
  name: 'folder-open',
  category: 'files',
  description: 'Open folder',
  tags: ['folder', 'directory', 'open', 'expanded'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v1"/>
  <path d="M2 11h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M2 5v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H2V5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v1h2V7a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 11h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" fill="currentColor" opacity="0.3"/>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v1"/>
  <path d="M2 11h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v1" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v1"/>
  <path d="M2 11h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M2 11h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"/>
</svg>`,
  },
};

export default folderOpen;
