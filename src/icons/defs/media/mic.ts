/**
 * Microphone on icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const mic: IconDefinition = {
  name: 'mic',
  category: 'media',
  description: 'Microphone on',
  tags: ['microphone', 'mic', 'audio', 'record', 'voice'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path d="M12 19v3M8 22h8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M12 19v3M8 22h8"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" fill="currentColor" opacity="0.3"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path d="M12 19v3M8 22h8"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M12 19v3M8 22h8"/>
  <path d="M12 19v3M8 22h8" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default mic;
