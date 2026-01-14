/**
 * CPU Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const cpu: IconDefinition = {
  name: 'cpu',
  category: 'tech',
  description: 'CPU usage',
  tags: ['cpu', 'processor', 'usage', 'performance', 'computing'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="9" y1="2" x2="9" y2="4"/>
  <line x1="15" y1="2" x2="15" y2="4"/>
  <line x1="9" y1="20" x2="9" y2="22"/>
  <line x1="15" y1="20" x2="15" y2="22"/>
  <line x1="20" y1="9" x2="22" y2="9"/>
  <line x1="20" y1="15" x2="22" y2="15"/>
  <line x1="2" y1="9" x2="4" y2="9"/>
  <line x1="2" y1="15" x2="4" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M8 2h2v2H8V2zm6 0h2v2h-2V2zM8 20h2v2H8v-2zm6 0h2v2h-2v-2z"/>
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <path d="M20 8h2v2h-2V8zm0 6h2v2h-2v-2zM2 8h2v2H2V8zm0 6h2v2H2v-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="9" y1="2" x2="9" y2="4"/>
  <line x1="15" y1="2" x2="15" y2="4"/>
  <line x1="9" y1="20" x2="9" y2="22"/>
  <line x1="15" y1="20" x2="15" y2="22"/>
  <line x1="20" y1="9" x2="22" y2="9"/>
  <line x1="20" y1="15" x2="22" y2="15"/>
  <line x1="2" y1="9" x2="4" y2="9"/>
  <line x1="2" y1="15" x2="4" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <rect x="4" y="4" width="16" height="16" rx="2" transform="translate(1,-1)" opacity="0.4"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="9" y1="2" x2="9" y2="4"/>
  <line x1="15" y1="2" x2="15" y2="4"/>
  <line x1="9" y1="20" x2="9" y2="22"/>
  <line x1="15" y1="20" x2="15" y2="22"/>
  <line x1="20" y1="9" x2="22" y2="9"/>
  <line x1="20" y1="15" x2="22" y2="15"/>
  <line x1="2" y1="9" x2="4" y2="9"/>
  <line x1="2" y1="15" x2="4" y2="15"/>
</svg>`,
  },
};

export default cpu;
