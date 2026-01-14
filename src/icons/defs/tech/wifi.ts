/**
 * WiFi Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const wifi: IconDefinition = {
  name: 'wifi',
  category: 'tech',
  description: 'WiFi connection',
  tags: ['wifi', 'wireless', 'internet', 'connection', 'network'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.55a11 11 0 0 1 14 0"/>
  <path d="M7.5 15.5a7 7 0 0 1 9 0"/>
  <path d="M10 18.5a3 3 0 0 1 4 0"/>
  <circle cx="12" cy="21" r="0.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M12 19c-.8 0-1.5.3-2.1.8l-.4.4c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l.4-.4c1.2-1.2 3.1-1.2 4.2 0 .6.6 1.5.6 2.1 0 .6-.6.6-1.5 0-2.1C16.8 19.3 14.5 19 12 19zM5 12.5c5-4 12-4 17 0 .6.5 1.5.4 2 0 .5-.6.4-1.5 0-2-6-5-14-5-20 0-.6.5-.6 1.4 0 2 .5.5 1.4.5 2 0zM7.5 15.5c3.3-2.7 8-2.7 11.3 0 .6.5 1.5.4 2-.1.5-.6.4-1.5-.1-2-4.3-3.5-10.4-3.5-14.7 0-.6.5-.6 1.4-.1 2 .5.6 1.4.6 2 .1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.55a11 11 0 0 1 14 0" opacity="0.3"/>
  <path d="M7.5 15.5a7 7 0 0 1 9 0" opacity="0.3"/>
  <path d="M10 18.5a3 3 0 0 1 4 0"/>
  <circle cx="12" cy="21" r="0.5" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12.55a11 11 0 0 1 14 0"/>
  <path d="M5 12.55a11 11 0 0 1 14 0" transform="translate(1,-1)" opacity="0.4"/>
  <path d="M7.5 15.5a7 7 0 0 1 9 0"/>
  <path d="M10 18.5a3 3 0 0 1 4 0"/>
  <circle cx="12" cy="21" r="0.5"/>
</svg>`,
  },
};

export default wifi;
