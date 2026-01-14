/**
 * File Image
 * @category files
 */
import type { IconDefinition } from '../../types';

export const fileImage: IconDefinition = {
  name: 'file-image',
  category: 'files',
  description: 'Image file with picture icon',
  tags: ['file', 'image', 'photo', 'picture'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <circle cx="10" cy="13" r="1.5"/>
  <path d="M17 18l-3-3-4 4"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm0 1.5L18.5 8H14V3.5zM10 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 6.5H7l3-3 2 2 2-2 3 3z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="currentColor" opacity="0.3"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <circle cx="10" cy="13" r="1.5"/>
  <path d="M17 18l-3-3-4 4"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
  <path d="M14 2v6h6"/>
  <circle cx="10" cy="13" r="1.5" transform="translate(-1,1)" opacity="0.5"/>
  <circle cx="10" cy="13" r="1.5"/>
  <path d="M17 18l-3-3-4 4" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M17 18l-3-3-4 4"/>
</svg>`,
  },
};

export default fileImage;
