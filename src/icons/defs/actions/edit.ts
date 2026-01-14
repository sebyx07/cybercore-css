/**
 * Edit Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const edit: IconDefinition = {
  name: 'edit',
  category: 'actions',
  description: 'Edit or modify content',
  tags: ['edit', 'pencil', 'modify', 'write', 'change'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3l4 4-11 11H6v-4L17 3z"/>
  <path d="M14 6l4 4"/>
  <line x1="3" y1="21" x2="8" y2="21"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M16.29 2.29a1 1 0 0 1 1.42 0l4 4a1 1 0 0 1 0 1.42l-11 11A1 1 0 0 1 10 19H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 .29-.71l11-11zM3 20h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3l4 4-11 11H6v-4L17 3z" fill="currentColor" opacity="0.3"/>
  <path d="M17 3l4 4-11 11H6v-4L17 3z"/>
  <path d="M14 6l4 4"/>
  <line x1="3" y1="21" x2="8" y2="21"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M17 3l4 4-11 11H6v-4L17 3z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M17 3l4 4-11 11H6v-4L17 3z"/>
  <path d="M14 6l4 4"/>
  <line x1="3" y1="21" x2="8" y2="21"/>
</svg>`,
  },
};

export default edit;
