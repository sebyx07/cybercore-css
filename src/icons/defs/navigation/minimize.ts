/**
 * Minimize Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const minimize: IconDefinition = {
  name: 'minimize',
  category: 'navigation',
  description: 'Minimize/exit fullscreen',
  tags: ['minimize', 'exit-fullscreen', 'shrink', 'collapse'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4 12h8v8H4v-8zm12-8h8v8h-8V4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7"/>
  <rect x="4" y="14" width="6" height="6" fill="currentColor" opacity="0.3" stroke="none"/>
  <rect x="14" y="4" width="6" height="6" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7"/>
  <path d="M4 14h6m0 0v6m0-6l-7 7" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M20 10h-6m0 0V4m0 6l7-7" transform="translate(1,-1)" opacity="0.5"/>
</svg>`,
  },
};

export default minimize;
