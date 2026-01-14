/**
 * Maximize Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const maximize: IconDefinition = {
  name: 'maximize',
  category: 'navigation',
  description: 'Maximize/fullscreen',
  tags: ['maximize', 'fullscreen', 'expand', 'zoom'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 3h6v2H5v4H3V3zm18 0h-6v2h4v4h2V3zM3 21h6v-2H5v-4H3v6zm18 0h-6v-2h4v-4h2v6z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
  <rect x="4" y="4" width="5" height="5" fill="currentColor" opacity="0.3" stroke="none"/>
  <rect x="15" y="4" width="5" height="5" fill="currentColor" opacity="0.3" stroke="none"/>
  <rect x="4" y="15" width="5" height="5" fill="currentColor" opacity="0.3" stroke="none"/>
  <rect x="15" y="15" width="5" height="5" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
  <path d="M8 3H5a2 2 0 0 0-2 2v3" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M21 8V5a2 2 0 0 0-2-2h-3" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M16 21h3a2 2 0 0 0 2-2v-3" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M3 16v3a2 2 0 0 0 2 2h3" transform="translate(-1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default maximize;
