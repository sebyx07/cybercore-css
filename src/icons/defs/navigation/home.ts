/**
 * Home Icon
 * @category navigation
 */
import type { IconDefinition } from '../../types';

export const home: IconDefinition = {
  name: 'home',
  category: 'navigation',
  description: 'Home/dashboard',
  tags: ['home', 'dashboard', 'main', 'house'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2l10 9v10a1 1 0 0 1-1 1h-5v-8H8v8H3a1 1 0 0 1-1-1V11l10-9z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
  <path d="M3 9l9-7 9 7v11a1 1 0 0 1-1 1h-6V12H10v10H5a1 1 0 0 1-1-1z" fill="currentColor" opacity="0.3" stroke="none"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="9 22 9 12 15 12 15 22" transform="translate(-1,1)" opacity="0.5"/>
</svg>`,
  },
};

export default home;
