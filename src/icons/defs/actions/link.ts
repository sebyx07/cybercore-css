/**
 * Link Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const link: IconDefinition = {
  name: 'link',
  category: 'actions',
  description: 'Create or view link',
  tags: ['link', 'chain', 'url', 'connect', 'hyperlink'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  <circle cx="8.5" cy="15.5" r="1"/>
  <circle cx="15.5" cy="8.5" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-3.536 3.535a7 7 0 0 1-9.9-9.9l1.415-1.414a1 1 0 0 1 1.414 1.414l-1.414 1.415a5 5 0 1 0 7.07 7.07l3.536-3.535a5 5 0 0 0 0-7.07L11.646 9.525a1 1 0 1 1 1.414-1.414zm-2.12-2.12l1.414-1.415a7 7 0 0 1 9.9 9.9l-1.415 1.414a1 1 0 1 1-1.414-1.414l1.414-1.415a5 5 0 1 0-7.07-7.07l-1.415 1.414a1 1 0 1 1-1.414-1.414z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="currentColor" opacity="0.3"/>
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  <circle cx="8.5" cy="15.5" r="1"/>
  <circle cx="15.5" cy="8.5" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  <circle cx="8.5" cy="15.5" r="1"/>
  <circle cx="15.5" cy="8.5" r="1"/>
</svg>`,
  },
};

export default link;
