/**
 * WiFi Off Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const wifiOff: IconDefinition = {
  name: 'wifi-off',
  category: 'tech',
  description: 'No WiFi connection',
  tags: ['wifi', 'offline', 'disconnected', 'no-connection', 'disabled'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="2" x2="22" y2="22"/>
  <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
  <path d="M2 8.82a15 15 0 0 1 4.17-2.65"/>
  <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76"/>
  <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68"/>
  <path d="M5 12.86a10 10 0 0 1 5.17-2.58"/>
  <circle cx="12" cy="20" r="1" fill="currentColor"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="12" cy="20" r="2"/>
  <path d="M2.93 2.93a1 1 0 0 1 1.41 0l17.73 17.73a1 1 0 1 1-1.41 1.41L2.93 4.34a1 1 0 0 1 0-1.41z"/>
  <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
  <path d="M5 12.55a10 10 0 0 1 7-2.5c.85 0 1.68.08 2.47.22"/>
  <path d="M2 8.82a15 15 0 0 1 6.36-3"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 16.5a5 5 0 0 1 7 0" opacity="0.3"/>
  <path d="M5 12.55a10 10 0 0 1 7-2.5" opacity="0.3"/>
  <path d="M2 8.82a15 15 0 0 1 20 0" opacity="0.3"/>
  <line x1="2" y1="2" x2="22" y2="22"/>
  <circle cx="12" cy="20" r="1" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <g opacity="0.4" transform="translate(-0.5, 0.5)">
    <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
    <path d="M5 12.55a10 10 0 0 1 7-2.5"/>
    <line x1="2" y1="2" x2="22" y2="22"/>
  </g>
  <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
  <path d="M5 12.55a10 10 0 0 1 7-2.5"/>
  <line x1="2" y1="2" x2="22" y2="22"/>
  <circle cx="12" cy="20" r="1"/>
</svg>`,
  },
};

export default wifiOff;
