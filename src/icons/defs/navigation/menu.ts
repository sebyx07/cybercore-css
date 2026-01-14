/**
 * Menu Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const menu: IconDefinition = {
  name: 'menu',
  category: 'navigation',
  description: 'Hamburger menu',
  tags: ['menu', 'hamburger', 'navigation', 'bars'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <rect x="3" y="4" width="18" height="3" rx="1"/>
  <rect x="3" y="10.5" width="18" height="3" rx="1"/>
  <rect x="3" y="17" width="18" height="3" rx="1"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
  <rect x="3" y="4.5" width="18" height="3" rx="0.5" fill="currentColor" opacity="0.3" stroke="none"/>
  <rect x="3" y="10.5" width="18" height="3" rx="0.5" fill="currentColor" opacity="0.3" stroke="none"/>
  <rect x="3" y="16.5" width="18" height="3" rx="0.5" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="6" x2="20" y2="6"/>
  <line x1="4" y1="12" x2="20" y2="12"/>
  <line x1="4" y1="18" x2="20" y2="18"/>
  <line x1="4" y1="6" x2="20" y2="6" transform="translate(1,0)" opacity="0.5"/>
  <line x1="4" y1="12" x2="20" y2="12" transform="translate(-1,0)" opacity="0.5"/>
  <line x1="4" y1="18" x2="20" y2="18" transform="translate(1,0)" opacity="0.5"/>
</svg>`,
  },
};

export default menu;
