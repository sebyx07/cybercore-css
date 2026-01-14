/**
 * Bell - Notification bell
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const bell: IconDefinition = {
  name: 'bell',
  category: 'communication',
  description: 'Notification bell',
  tags: ['notification', 'alert', 'reminder', 'bell'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="10" y1="4" x2="14" y2="4"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2c.552 0 1 .448 1 1v1.07A6.002 6.002 0 0 1 18 10c0 3.5 1.5 6 3 7.5v.5H3v-.5c1.5-1.5 3-4 3-7.5a6.002 6.002 0 0 1 5-5.93V3c0-.552.448-1 1-1zm1 19c0 .552-.448 1-1 1s-1-.448-1-1h2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="currentColor" opacity="0.3"/>
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="10" y1="4" x2="14" y2="4"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  <line x1="10" y1="4" x2="14" y2="4"/>
</svg>`,
  },
};

export default bell;
