/**
 * Shield - Security/protection
 * @category security
 */
import type { IconDefinition } from '../../types';

export const shield: IconDefinition = {
  name: 'shield',
  category: 'security',
  description: 'Security shield for protection',
  tags: ['shield', 'security', 'protection', 'defend', 'guard'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <line x1="9" y1="12" x2="9.5" y2="12"/>
  <line x1="14.5" y1="12" x2="15" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.5l-8.5 4.3v5.7c0 5.8 4 11.2 8.5 12.5 4.5-1.3 8.5-6.7 8.5-12.5V6.8L12 2.5zm-2.5 10.5h1v1h-1v-1zm3 0h1v1h-1v-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" fill="currentColor" opacity="0.3"/>
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <line x1="9" y1="12" x2="9.5" y2="12"/>
  <line x1="14.5" y1="12" x2="15" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <line x1="9" y1="12" x2="9.5" y2="12"/>
  <line x1="14.5" y1="12" x2="15" y2="12"/>
</svg>`,
  },
};

export default shield;
