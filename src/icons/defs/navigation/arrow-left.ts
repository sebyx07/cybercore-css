/**
 * Arrow Left Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const arrowLeft: IconDefinition = {
  name: 'arrow-left',
  category: 'navigation',
  description: 'Leftward arrow',
  tags: ['direction', 'left', 'back', 'arrow'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="19" y1="12" x2="5" y2="12"/>
  <polyline points="12 19 5 12 12 5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 12l9-9v5h9v8h-9v5l-9-9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="19" y1="12" x2="5" y2="12"/>
  <polyline points="12 19 5 12 12 5"/>
  <path d="M5 12l7-7v4h7v6h-7v4l-7-7z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="19" y1="12" x2="5" y2="12"/>
  <polyline points="12 19 5 12 12 5"/>
  <line x1="19" y1="12" x2="5" y2="12" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="12 19 5 12 12 5" transform="translate(-1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default arrowLeft;
