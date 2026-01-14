/**
 * Rewind icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const rewind: IconDefinition = {
  name: 'rewind',
  category: 'media',
  description: 'Rewind media (double triangles left)',
  tags: ['rewind', 'back', 'media', 'reverse'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 19l-9-7 9-7v14z"/>
  <path d="M22 19l-9-7 9-7v14z"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M11 19l-9-7 9-7v14z"/>
  <path d="M22 19l-9-7 9-7v14z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 19l-9-7 9-7v14z" fill="currentColor" opacity="0.3"/>
  <path d="M22 19l-9-7 9-7v14z" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M11 19l-9-7 9-7v14z"/>
  <path d="M11 19l-9-7 9-7v14z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M22 19l-9-7 9-7v14z"/>
  <path d="M22 19l-9-7 9-7v14z" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default rewind;
