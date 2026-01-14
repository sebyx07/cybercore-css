/**
 * Image/photo icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const image: IconDefinition = {
  name: 'image',
  category: 'media',
  description: 'Image/photo (landscape with sun)',
  tags: ['image', 'photo', 'picture', 'file', 'gallery'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <path d="M21 15l-5-5L5 21"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <circle cx="8.5" cy="8.5" r="1.5" fill="#000"/>
  <path fill="#000" d="M21 15l-5-5L5 21"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.3"/>
  <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
  <path d="M21 15l-5-5L5 21" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <rect x="3" y="3" width="18" height="18" rx="2" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <circle cx="8.5" cy="8.5" r="1.5" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M21 15l-5-5L5 21"/>
  <path d="M21 15l-5-5L5 21" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default image;
