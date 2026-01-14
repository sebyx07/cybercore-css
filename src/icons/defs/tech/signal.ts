/**
 * Signal Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const signal: IconDefinition = {
  name: 'signal',
  category: 'tech',
  description: 'Signal/broadcast waves',
  tags: ['signal', 'broadcast', 'waves', 'wireless', 'transmission'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16.24 7.76a6 6 0 0 1 0 8.48"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  <path d="M7.76 16.24a6 6 0 0 1 0-8.48"/>
  <path d="M4.93 19.07a10 10 0 0 1 0-14.14"/>
  <circle cx="12" cy="12" r="2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="12" cy="12" r="2.5"/>
  <path d="M16.5 7.5c2 2 2 5 0 7l1.5 1.5c3-3 3-7.5 0-10.5l-1.5 1.5zM7.5 16.5c-2-2-2-5 0-7L6 8c-3 3-3 7.5 0 10.5l1.5-1.5zM19.3 4.7c4 4 4 10.6 0 14.6l1.4 1.4c5-5 5-12.4 0-17.4l-1.4 1.4zM4.7 19.3c-4-4-4-10.6 0-14.6L3.3 3.3c-5 5-5 12.4 0 17.4l1.4-1.4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16.24 7.76a6 6 0 0 1 0 8.48" opacity="0.3"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" opacity="0.3"/>
  <path d="M7.76 16.24a6 6 0 0 1 0-8.48" opacity="0.3"/>
  <path d="M4.93 19.07a10 10 0 0 1 0-14.14" opacity="0.3"/>
  <circle cx="12" cy="12" r="2" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M16.24 7.76a6 6 0 0 1 0 8.48"/>
  <path d="M16.24 7.76a6 6 0 0 1 0 8.48" transform="translate(1,-1)" opacity="0.4"/>
  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  <path d="M7.76 16.24a6 6 0 0 1 0-8.48"/>
  <path d="M4.93 19.07a10 10 0 0 1 0-14.14"/>
  <circle cx="12" cy="12" r="2"/>
  <circle cx="12" cy="12" r="2" transform="translate(1,-1)" opacity="0.4"/>
</svg>`,
  },
};

export default signal;
