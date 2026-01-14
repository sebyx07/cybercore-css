/**
 * Delete Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const deleteIcon: IconDefinition = {
  name: 'delete',
  category: 'actions',
  description: 'Delete or remove content',
  tags: ['delete', 'trash', 'remove', 'discard', 'bin'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 6h18"/>
  <path d="M8 6V4h8v2"/>
  <path d="M19 6v14H5V6"/>
  <line x1="10" y1="11" x2="10" y2="16"/>
  <line x1="14" y1="11" x2="14" y2="16"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 5a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H3zm5 0V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1H8zM5 8v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8H5zm5 2a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 6v14H5V6" fill="currentColor" opacity="0.3"/>
  <path d="M3 6h18"/>
  <path d="M8 6V4h8v2"/>
  <path d="M19 6v14H5V6"/>
  <line x1="10" y1="11" x2="10" y2="16"/>
  <line x1="14" y1="11" x2="14" y2="16"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 6v14H5V6" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M3 6h18"/>
  <path d="M8 6V4h8v2"/>
  <path d="M19 6v14H5V6"/>
  <line x1="10" y1="11" x2="10" y2="16"/>
  <line x1="14" y1="11" x2="14" y2="16"/>
</svg>`,
  },
};

export default deleteIcon;
