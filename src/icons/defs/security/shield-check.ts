/**
 * Shield Check - Verified/protected
 * @category security
 */
import type { IconDefinition } from '../../types';

export const shieldCheck: IconDefinition = {
  name: 'shield-check',
  category: 'security',
  description: 'Verified or protected status with shield and checkmark',
  tags: ['shield', 'check', 'verified', 'protected', 'secure', 'approved'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.5l-8.5 4.3v5.7c0 5.8 4 11.2 8.5 12.5 4.5-1.3 8.5-6.7 8.5-12.5V6.8L12 2.5zm3.4 8.2l-4.5 4.5-2.3-2.3 1.1-1.1 1.2 1.2 3.4-3.4 1.1 1.1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" fill="currentColor" opacity="0.3"/>
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M12 3L4 7v5c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V7l-8-4z"/>
  <polyline points="9 12 11 14 15 10" transform="translate(1,-1)" opacity="0.3"/>
  <polyline points="9 12 11 14 15 10"/>
</svg>`,
  },
};

export default shieldCheck;
