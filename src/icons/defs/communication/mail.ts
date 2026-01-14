/**
 * Mail - Email envelope
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const mail: IconDefinition = {
  name: 'mail',
  category: 'communication',
  description: 'Email (envelope)',
  tags: ['email', 'mail', 'envelope', 'message', 'letter'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
  <line x1="7" y1="9" x2="7" y2="9"/>
  <line x1="17" y1="9" x2="17" y2="9"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4 4h16a2 2 0 0 1 2 2v.58l-10 6.25L2 6.58V6a2 2 0 0 1 2-2zm-2 4.42l10 6.25 10-6.25V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.42z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" opacity="0.3"/>
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6"/>
  <line x1="7" y1="9" x2="7" y2="9"/>
  <line x1="17" y1="9" x2="17" y2="9"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
  <polyline points="22,6 12,13 2,6" transform="translate(1,-1)" opacity="0.5"/>
  <polyline points="22,6 12,13 2,6"/>
  <line x1="7" y1="9" x2="7" y2="9"/>
  <line x1="17" y1="9" x2="17" y2="9"/>
</svg>`,
  },
};

export default mail;
