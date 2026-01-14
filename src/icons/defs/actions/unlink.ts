/**
 * Unlink Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const unlink: IconDefinition = {
  name: 'unlink',
  category: 'actions',
  description: 'Break or remove link',
  tags: ['unlink', 'broken-chain', 'disconnect', 'remove-link', 'detach'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l1.5-1.5"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-1.5 1.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <path d="M18 6l1.5-1.5"/>
  <path d="M6 18l-1.5 1.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M2.29 2.29a1 1 0 0 1 1.42 0l18 18a1 1 0 0 1-1.42 1.42l-18-18a1 1 0 0 1 0-1.42zm17.13 2.42a7 7 0 0 1 1.1 8.87l-1.81-1.81a5 5 0 0 0-5.24-7.24l-1.8-1.81a7 7 0 0 1 7.75 1.99zM4.58 19.29a7 7 0 0 1-1.1-8.87l1.81 1.81a5 5 0 0 0 5.24 7.24l1.8 1.81a7 7 0 0 1-7.75-1.99z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l1.5-1.5" fill="currentColor" opacity="0.3"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-1.5 1.5" fill="currentColor" opacity="0.3"/>
  <path d="M10 13a5 5 0 0 0 7.54.54l1.5-1.5"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-1.5 1.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <path d="M18 6l1.5-1.5"/>
  <path d="M6 18l-1.5 1.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10 13a5 5 0 0 0 7.54.54l1.5-1.5" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-1.5 1.5" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M10 13a5 5 0 0 0 7.54.54l1.5-1.5"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-1.5 1.5"/>
  <line x1="3" y1="3" x2="21" y2="21"/>
  <path d="M18 6l1.5-1.5"/>
  <path d="M6 18l-1.5 1.5"/>
</svg>`,
  },
};

export default unlink;
