/**
 * Send - Send message (paper plane)
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const send: IconDefinition = {
  name: 'send',
  category: 'communication',
  description: 'Send message (paper plane)',
  tags: ['send', 'submit', 'message', 'plane', 'transmit'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  <line x1="11" y1="13" x2="11.5" y2="13.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M22.707 1.293a1 1 0 0 1 .083 1.32l-.083.094-7 13a1 1 0 0 1-1.706.107l-.07-.107-3.224-5.981-5.98-3.223a1 1 0 0 1 .107-1.707l.094-.083 13-7a1 1 0 0 1 1.32.083l.459.504z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" opacity="0.3"/>
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  <line x1="11" y1="13" x2="11.5" y2="13.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="22" y1="2" x2="11" y2="13" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="22" y1="2" x2="11" y2="13"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2" transform="translate(1,-1)" opacity="0.5"/>
  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  <line x1="11" y1="13" x2="11.5" y2="13.5"/>
</svg>`,
  },
};

export default send;
