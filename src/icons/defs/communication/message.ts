/**
 * Message - Chat bubble
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const message: IconDefinition = {
  name: 'message',
  category: 'communication',
  description: 'Message or comment (chat bubble)',
  tags: ['message', 'chat', 'comment', 'conversation', 'bubble'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <line x1="8" y1="10" x2="8.01" y2="10"/>
  <line x1="12" y1="10" x2="12.01" y2="10"/>
  <line x1="16" y1="10" x2="16.01" y2="10"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M5 3h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.414l-4.707 4.707A1 1 0 0 1 1 21V5a2 2 0 0 1 2-2h2zm3 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor" opacity="0.3"/>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <line x1="8" y1="10" x2="8.01" y2="10"/>
  <line x1="12" y1="10" x2="12.01" y2="10"/>
  <line x1="16" y1="10" x2="16.01" y2="10"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  <line x1="8" y1="10" x2="8.01" y2="10" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="8" y1="10" x2="8.01" y2="10"/>
  <line x1="12" y1="10" x2="12.01" y2="10" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="12" y1="10" x2="12.01" y2="10"/>
  <line x1="16" y1="10" x2="16.01" y2="10" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="16" y1="10" x2="16.01" y2="10"/>
</svg>`,
  },
};

export default message;
