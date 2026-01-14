/**
 * Bluetooth Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const bluetooth: IconDefinition = {
  name: 'bluetooth',
  category: 'tech',
  description: 'Bluetooth symbol',
  tags: ['bluetooth', 'wireless', 'connection', 'pairing', 'device'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 7 12 3 12 21 18 17"/>
  <polyline points="18 7 12 3 6 17 12 21"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M13 2l6 5-4.5 4 4.5 4-6 5V2zm-2 8.5L6.5 7 5 8.5 9.5 12 5 15.5 6.5 17 11 13.5v-3z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 7 12 3 12 21 18 17" fill="currentColor" opacity="0.3"/>
  <polyline points="18 7 12 3 6 17 12 21"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6 7 12 3 12 21 18 17"/>
  <polyline points="6 7 12 3 12 21 18 17" transform="translate(1,-1)" opacity="0.4"/>
  <polyline points="18 7 12 3 6 17 12 21"/>
  <polyline points="18 7 12 3 6 17 12 21" transform="translate(1,-1)" opacity="0.4"/>
</svg>`,
  },
};

export default bluetooth;
