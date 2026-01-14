/**
 * Memory Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const memory: IconDefinition = {
  name: 'memory',
  category: 'tech',
  description: 'Memory/RAM module',
  tags: ['memory', 'ram', 'chip', 'hardware', 'storage'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="6" width="16" height="12" rx="1"/>
  <line x1="4" y1="10" x2="20" y2="10"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="12" y1="2" x2="12" y2="6"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="18" x2="8" y2="22"/>
  <line x1="12" y1="18" x2="12" y2="22"/>
  <line x1="16" y1="18" x2="16" y2="22"/>
  <line x1="7" y1="13" x2="7" y2="15"/>
  <line x1="12" y1="13" x2="12" y2="15"/>
  <line x1="17" y1="13" x2="17" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M7 2h2v4H7V2zm4 0h2v4h-2V2zm4 0h2v4h-2V2z"/>
  <rect x="4" y="6" width="16" height="12" rx="1"/>
  <path d="M7 18h2v4H7v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="6" width="16" height="12" rx="1" fill="currentColor" opacity="0.3"/>
  <line x1="4" y1="10" x2="20" y2="10"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="12" y1="2" x2="12" y2="6"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="18" x2="8" y2="22"/>
  <line x1="12" y1="18" x2="12" y2="22"/>
  <line x1="16" y1="18" x2="16" y2="22"/>
  <line x1="7" y1="13" x2="7" y2="15"/>
  <line x1="12" y1="13" x2="12" y2="15"/>
  <line x1="17" y1="13" x2="17" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="6" width="16" height="12" rx="1"/>
  <rect x="4" y="6" width="16" height="12" rx="1" transform="translate(1,-1)" opacity="0.4"/>
  <line x1="4" y1="10" x2="20" y2="10"/>
  <line x1="8" y1="2" x2="8" y2="6"/>
  <line x1="12" y1="2" x2="12" y2="6"/>
  <line x1="16" y1="2" x2="16" y2="6"/>
  <line x1="8" y1="18" x2="8" y2="22"/>
  <line x1="12" y1="18" x2="12" y2="22"/>
  <line x1="16" y1="18" x2="16" y2="22"/>
  <line x1="7" y1="13" x2="7" y2="15"/>
  <line x1="12" y1="13" x2="12" y2="15"/>
  <line x1="17" y1="13" x2="17" y2="15"/>
</svg>`,
  },
};

export default memory;
