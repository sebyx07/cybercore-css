/**
 * Inbox - Inbox tray with arrow
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const inbox: IconDefinition = {
  name: 'inbox',
  category: 'communication',
  description: 'Inbox (tray with arrow)',
  tags: ['inbox', 'tray', 'receive', 'download', 'messages'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  <polyline points="12 8 12 2"/>
  <polyline points="9 5 12 2 15 5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.24 4h9.52a2 2 0 0 1 1.79 1.11L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6l3.45-6.89A2 2 0 0 1 7.24 4zm4.76 7.5l-3-3 1.4-1.4 1.6 1.6V2h2v6.7l1.6-1.6 1.4 1.4-3 3zm-4 1.5h2l2 3h4l2-3h2v5H8v-5z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" fill="currentColor" opacity="0.3"/>
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  <polyline points="12 8 12 2"/>
  <polyline points="9 5 12 2 15 5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
  <polyline points="12 8 12 2"/>
  <polyline points="9 5 12 2 15 5"/>
</svg>`,
  },
};

export default inbox;
