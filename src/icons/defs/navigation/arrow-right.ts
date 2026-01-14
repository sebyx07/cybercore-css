/**
 * Arrow Right Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const arrowRight: IconDefinition = {
  name: 'arrow-right',
  category: 'navigation',
  description: 'Rightward arrow',
  tags: ['direction', 'right', 'forward', 'arrow'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M21 12l-9 9v-5H3v-8h9V3l9 9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
  <path d="M19 12l-7 7v-4H5v-6h7V5l7 7z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"/>
  <polyline points="12 5 19 12 12 19"/>
  <line x1="5" y1="12" x2="19" y2="12" transform="translate(-1,1)" opacity="0.5"/>
  <polyline points="12 5 19 12 12 19" transform="translate(1,-1)" opacity="0.5"/>
</svg>`,
  },
};

export default arrowRight;
