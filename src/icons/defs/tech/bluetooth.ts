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
  <polyline points="6.5 6.5 12 12 17.5 6.5 12 2 12 22 17.5 17.5 12 12 6.5 17.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M12 2L17.5 6.5 12 12l5.5 5.5L12 22V12L6.5 17.5 5 16l6-4-6-4 1.5-1.5L12 12V2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="12 2 17.5 6.5 12 12 12 2" fill="currentColor" opacity="0.3"/>
  <polygon points="12 22 17.5 17.5 12 12 12 22" fill="currentColor" opacity="0.3"/>
  <polyline points="6.5 6.5 12 12 17.5 6.5 12 2 12 22 17.5 17.5 12 12 6.5 17.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="6.5 6.5 12 12 17.5 6.5 12 2 12 22 17.5 17.5 12 12 6.5 17.5" transform="translate(-0.5, 0.5)" opacity="0.4"/>
  <polyline points="6.5 6.5 12 12 17.5 6.5 12 2 12 22 17.5 17.5 12 12 6.5 17.5"/>
  <polyline points="6.5 6.5 12 12 17.5 6.5 12 2 12 22 17.5 17.5 12 12 6.5 17.5" transform="translate(0.5, -0.5)" opacity="0.3"/>
</svg>`,
  },
};

export default bluetooth;
