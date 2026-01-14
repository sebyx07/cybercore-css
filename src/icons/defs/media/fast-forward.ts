/**
 * Fast forward icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const fastForward: IconDefinition = {
  name: 'fast-forward',
  category: 'media',
  description: 'Fast forward media (double triangles right)',
  tags: ['fast-forward', 'forward', 'media', 'speed'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 5l9 7-9 7V5z"/>
  <path d="M2 5l9 7-9 7V5z"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M13 5l9 7-9 7V5z"/>
  <path d="M2 5l9 7-9 7V5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 5l9 7-9 7V5z" fill="currentColor"/>
  <path d="M2 5l9 7-9 7V5z" fill="currentColor" opacity="0.3"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M13 5l9 7-9 7V5z"/>
  <path d="M13 5l9 7-9 7V5z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M2 5l9 7-9 7V5z"/>
  <path d="M2 5l9 7-9 7V5z" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default fastForward;
