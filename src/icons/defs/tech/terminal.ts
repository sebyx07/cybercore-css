/**
 * Terminal Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const terminal: IconDefinition = {
  name: 'terminal',
  category: 'tech',
  description: 'Terminal/console window',
  tags: ['terminal', 'console', 'command', 'cli', 'shell'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <polyline points="6 9 9 12 6 15"/>
  <line x1="12" y1="15" x2="18" y2="15"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M4 4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2H4zm2.5 5.7l2.3 2.3-2.3 2.3 1.4 1.4 3.7-3.7-3.7-3.7-1.4 1.4zM18 15h-6v2h6v-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" opacity="0.3"/>
  <polyline points="6 9 9 12 6 15"/>
  <line x1="12" y1="15" x2="18" y2="15"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <rect x="2" y="4" width="20" height="16" rx="2" transform="translate(1,-1)" opacity="0.4"/>
  <polyline points="6 9 9 12 6 15"/>
  <polyline points="6 9 9 12 6 15" transform="translate(1,-1)" opacity="0.4"/>
  <line x1="12" y1="15" x2="18" y2="15"/>
</svg>`,
  },
};

export default terminal;
