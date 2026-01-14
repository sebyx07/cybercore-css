/**
 * Microphone off icon
 * @category media
 */
import type { IconDefinition } from '../../types';

export const micOff: IconDefinition = {
  name: 'mic-off',
  category: 'media',
  description: 'Microphone off (with slash)',
  tags: ['microphone', 'mic', 'mute', 'audio', 'off', 'disabled'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path d="M12 19v3M8 22h8"/>
  <path d="M3 3l18 18"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M12 19v3M8 22h8"/>
  <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" fill="currentColor" opacity="0.3"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path d="M12 19v3M8 22h8"/>
  <path d="M3 3l18 18"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
  <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2"/>
  <path d="M19 10v2a7 7 0 01-14 0v-2" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M12 19v3M8 22h8"/>
  <path d="M12 19v3M8 22h8" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M3 3l18 18"/>
  <path d="M3 3l18 18" transform="translate(1,-1)" opacity="0.3"/>
</svg>`,
  },
};

export default micOff;
