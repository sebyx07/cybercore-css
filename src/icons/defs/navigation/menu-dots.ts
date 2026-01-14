/**
 * Menu Dots Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const menuDots: IconDefinition = {
  name: 'menu-dots',
  category: 'navigation',
  description: 'Three dots menu (kebab)',
  tags: ['menu', 'more', 'options', 'kebab', 'dots'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="5" r="1.5"/>
  <circle cx="12" cy="12" r="1.5"/>
  <circle cx="12" cy="19" r="1.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="12" cy="5" r="2"/>
  <circle cx="12" cy="12" r="2"/>
  <circle cx="12" cy="19" r="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="5" r="1.5"/>
  <circle cx="12" cy="12" r="1.5"/>
  <circle cx="12" cy="19" r="1.5"/>
  <circle cx="12" cy="5" r="2.5" fill="currentColor" opacity="0.3" stroke="none"/>
  <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.3" stroke="none"/>
  <circle cx="12" cy="19" r="2.5" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="5" r="1.5"/>
  <circle cx="12" cy="12" r="1.5"/>
  <circle cx="12" cy="19" r="1.5"/>
  <circle cx="12" cy="5" r="1.5" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="12" cy="12" r="1.5" transform="translate(-1,0)" opacity="0.5"/>
  <circle cx="12" cy="19" r="1.5" transform="translate(1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default menuDots;
