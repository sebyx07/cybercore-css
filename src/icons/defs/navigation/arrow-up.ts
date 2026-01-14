/**
 * Arrow Up Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const arrowUp: IconDefinition = {
  name: 'arrow-up',
  category: 'navigation',
  description: 'Upward arrow',
  tags: ['direction', 'up', 'move'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 19V5"/>
  <path d="M5 12l7-7 7 7"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 3l9 9h-5v9h-8v-9H3l9-9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 19V5"/>
  <path d="M5 12l7-7 7 7"/>
  <path d="M12 5l7 7h-4v7h-6v-7H5l7-7z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 19V5"/>
  <path d="M5 12l7-7 7 7"/>
  <path d="M12 19V5" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M5 12l7-7 7 7" transform="translate(-1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default arrowUp;
