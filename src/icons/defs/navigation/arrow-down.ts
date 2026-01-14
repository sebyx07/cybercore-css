/**
 * Arrow Down Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const arrowDown: IconDefinition = {
  name: 'arrow-down',
  category: 'navigation',
  description: 'Downward arrow',
  tags: ['direction', 'down', 'move', 'arrow'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"/>
  <polyline points="5 12 12 19 19 12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 21l-9-9h5V3h8v9h5l-9 9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"/>
  <polyline points="5 12 12 19 19 12"/>
  <path d="M12 19l-7-7h4V5h6v7h4l-7 7z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="12" y1="5" x2="12" y2="19"/>
  <polyline points="5 12 12 19 19 12"/>
  <line x1="12" y1="5" x2="12" y2="19" transform="translate(-1,1)" opacity="0.5"/>
  <polyline points="5 12 12 19 19 12" transform="translate(1,-1)" opacity="0.5"/>
</svg>`,
  },
};

export default arrowDown;
