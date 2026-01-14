/**
 * File Plus
 * @category files
 */
import type { IconDefinition } from '../../types';

export const filePlus: IconDefinition = {
  name: 'file-plus',
  category: 'files',
  description: 'New file with plus icon',
  tags: ['file', 'new', 'add', 'create'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <line x1="12" y1="13" x2="12" y2="19"/>
  <line x1="9" y1="16" x2="15" y2="16"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 1.5L18.5 8H14V3.5zM13 13v2h2v2h-2v2h-2v-2H9v-2h2v-2h2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <line x1="12" y1="13" x2="12" y2="19"/>
  <line x1="9" y1="16" x2="15" y2="16"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <line x1="12" y1="13" x2="12" y2="19" transform="translate(-1,1)" opacity="0.5"/>
  <line x1="12" y1="13" x2="12" y2="19"/>
  <line x1="9" y1="16" x2="15" y2="16" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="9" y1="16" x2="15" y2="16"/>
</svg>`,
  },
};

export default filePlus;
