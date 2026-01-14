/**
 * Bell Off - Notifications disabled
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const bellOff: IconDefinition = {
  name: 'bell-off',
  category: 'communication',
  description: 'Notifications disabled (bell with slash)',
  tags: ['notification', 'disabled', 'mute', 'silent', 'off'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.7 8.7A6 6 0 0 1 18 8c0 4.5 1.5 7 2.5 8.5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <path d="M3 17s1.5-2 2-5"/>
  <path d="M6 8c0-.5.1-1 .2-1.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <line x1="10" y1="4" x2="14" y2="4"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2c.552 0 1 .448 1 1v1.07A6.002 6.002 0 0 1 18 10c0 1.5.3 2.8.7 4l-15 15L2.3 27.6 4.3 25.6 3 24.5v-.5c1-1 2-2.5 2.5-4.5L21 3.7l-1.4-1.4-6.6 6.6V3c0-.552.448-1 1-1zm1 19c0 .552-.448 1-1 1s-1-.448-1-1h2z"/>
  <path d="M3.7 3l18 18-1.4 1.4-18-18z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.7 8.7A6 6 0 0 1 18 8c0 4.5 1.5 7 2.5 8.5" fill="currentColor" opacity="0.3"/>
  <path d="M8.7 8.7A6 6 0 0 1 18 8c0 4.5 1.5 7 2.5 8.5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <path d="M3 17s1.5-2 2-5"/>
  <path d="M6 8c0-.5.1-1 .2-1.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <line x1="10" y1="4" x2="14" y2="4"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.7 8.7A6 6 0 0 1 18 8c0 4.5 1.5 7 2.5 8.5" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M8.7 8.7A6 6 0 0 1 18 8c0 4.5 1.5 7 2.5 8.5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <path d="M3 17s1.5-2 2-5"/>
  <path d="M6 8c0-.5.1-1 .2-1.5"/>
  <line x1="3" y1="3" x2="21" y2="21" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <line x1="10" y1="4" x2="14" y2="4"/>
</svg>`,
  },
};

export default bellOff;
