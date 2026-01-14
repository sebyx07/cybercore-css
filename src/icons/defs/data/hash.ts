/**
 * Hash Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const hash: IconDefinition = {
  name: 'hash',
  category: 'data',
  description: 'Hashtag symbol',
  tags: ['hash', 'hashtag', 'number', 'tag', 'symbol'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 9h16"/>
  <path d="M4 15h16"/>
  <path d="M10 3L8 21"/>
  <path d="M16 3l-2 18"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M10.8 2l.4 1.8L11.7 8H16v2h-4l-.6 4H16v2h-5l-.5 3.8-.4 2.2-2-.4.5-3.6.6-4H5v-2h4.5l.5-4H6V4h4.5l.5-3.8L11.4 2h-.6zm-1.3 10l.5-4h-4l-.5 4h4z"/>
  <path d="M17.2 2l-.5 3.8L16.3 8H20v2h-4l-.6 4H20v2h-5l-.5 3.8-.4 2.2-2-.4.5-3.6.6-4h-4l-.6 4-.5 3.6-2-.4.5-3.6.6-4H3v-2h4.5l.5-4H4V4h4.5l.5-3.8L9.4 2h-.6z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 9h16" stroke-width="3" opacity="0.3"/>
  <path d="M4 15h16" stroke-width="3" opacity="0.3"/>
  <path d="M4 9h16"/>
  <path d="M4 15h16"/>
  <path d="M10 3L8 21"/>
  <path d="M16 3l-2 18"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 9h16" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M4 15h16" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M4 9h16"/>
  <path d="M4 15h16"/>
  <path d="M10 3L8 21" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M10 3L8 21"/>
  <path d="M16 3l-2 18"/>
</svg>`,
  },
};

export default hash;
