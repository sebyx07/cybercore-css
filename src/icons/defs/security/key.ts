/**
 * Key - Access/authentication key
 * @category security
 */
import type { IconDefinition } from '../../types';

export const key: IconDefinition = {
  name: 'key',
  category: 'security',
  description: 'Access key for authentication',
  tags: ['key', 'access', 'authentication', 'password', 'credential'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7.5" cy="16.5" r="4.5"/>
  <path d="M10.5 14.5l9-9"/>
  <path d="M19.5 5.5l-1.5 1.5"/>
  <path d="M17 7l-1.5 1.5"/>
  <line x1="21" y1="4" x2="19.5" y2="5.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7.5 12c-2.5 0-4.5 2-4.5 4.5S5 21 7.5 21s4.5-2 4.5-4.5c0-1.2-.5-2.3-1.2-3.1l9.5-9.5.7.7 1.4-1.4-.7-.7.7-.7-1.4-1.4-.7.7-.7-.7-1.4 1.4.7.7-8.8 8.8c-.8-.4-1.7-.7-2.6-.7zm0 3c.8 0 1.5.7 1.5 1.5S8.3 18 7.5 18 6 17.3 6 16.5 6.7 15 7.5 15z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7.5" cy="16.5" r="4.5" fill="currentColor" opacity="0.3"/>
  <circle cx="7.5" cy="16.5" r="4.5"/>
  <path d="M10.5 14.5l9-9"/>
  <path d="M19.5 5.5l-1.5 1.5"/>
  <path d="M17 7l-1.5 1.5"/>
  <line x1="21" y1="4" x2="19.5" y2="5.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="7.5" cy="16.5" r="4.5" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="7.5" cy="16.5" r="4.5"/>
  <path d="M10.5 14.5l9-9" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M10.5 14.5l9-9"/>
  <path d="M19.5 5.5l-1.5 1.5"/>
  <path d="M17 7l-1.5 1.5"/>
  <line x1="21" y1="4" x2="19.5" y2="5.5"/>
</svg>`,
  },
};

export default key;
