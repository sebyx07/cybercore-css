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
  <path d="M5 12.55a11 11 0 0 1 5.5-2.5"/>
  <path d="M13.5 10.05a11 11 0 0 1 5.5 2.5"/>
  <circle cx="12" cy="20" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="12" cy="20" r="1.5"/>
  <path d="M8.5 16.5c1.9-1.6 4.7-1.6 6.6 0l1.5-1.5c-2.8-2.3-6.8-2.3-9.6 0l1.5 1.5zM5 12.5c2.5-2 5.5-2.5 8-2.5.8 0 1.5.1 2.3.2l1.7-1.7c-1.3-.4-2.6-.6-4-.6-3.5 0-7 1-10 3l1.5 1.5c.2-.2.3-.3.5-.5l1.5 1.5c-.4 0-.8.1-1.5-.4z"/>
  <path d="M2.7 2.3l19 19 1.4-1.4-19-19L2.7 2.3z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="2" x2="22" y2="22"/>
  <path d="M8.5 16.5a5 5 0 0 1 7 0" opacity="0.3"/>
  <path d="M5 12.55a11 11 0 0 1 5.5-2.5" opacity="0.3"/>
  <path d="M13.5 10.05a11 11 0 0 1 5.5 2.5" opacity="0.3"/>
  <circle cx="12" cy="20" r="1" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="2" y1="2" x2="22" y2="22"/>
  <line x1="2" y1="2" x2="22" y2="22" transform="translate(1,-1)" opacity="0.4"/>
  <path d="M8.5 16.5a5 5 0 0 1 7 0"/>
  <path d="M5 12.55a11 11 0 0 1 5.5-2.5"/>
  <path d="M13.5 10.05a11 11 0 0 1 5.5 2.5"/>
  <circle cx="12" cy="20" r="1"/>
</svg>`,
  },
};

export default wifiOff;
