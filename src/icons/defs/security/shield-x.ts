/**
 * Shield X - Not protected/blocked
 * @category security
 */
import type { IconDefinition } from '../../types';

export const shieldX: IconDefinition = {
  name: 'shield-x',
  category: 'security',
  description: 'Not protected or blocked with shield and X',
  tags: ['shield', 'error', 'blocked', 'unprotected', 'denied', 'vulnerable'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <line x1="10" y1="10" x2="14" y2="14"/>
  <line x1="14" y1="10" x2="10" y2="14"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.5l-8.5 4.3v5.7c0 5.8 4 11.2 8.5 12.5 4.5-1.3 8.5-6.7 8.5-12.5V6.8L12 2.5zm2.8 12.7l-1.1 1.1L12 14.6l-1.7 1.7-1.1-1.1L10.9 13l-1.7-1.7 1.1-1.1L12 11.9l1.7-1.7 1.1 1.1L13.1 13l1.7 1.7z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" fill="currentColor" opacity="0.3"/>
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <line x1="10" y1="10" x2="14" y2="14"/>
  <line x1="14" y1="10" x2="10" y2="14"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <line x1="10" y1="10" x2="14" y2="14" transform="translate(1,-1)" opacity="0.3"/>
  <line x1="10" y1="10" x2="14" y2="14"/>
  <line x1="14" y1="10" x2="10" y2="14" transform="translate(1,-1)" opacity="0.3"/>
  <line x1="14" y1="10" x2="10" y2="14"/>
</svg>`,
  },
};

export default shieldX;
