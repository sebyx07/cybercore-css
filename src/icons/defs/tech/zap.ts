/**
 * Zap Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const zap: IconDefinition = {
  name: 'zap',
  category: 'tech',
  description: 'Lightning/power (bolt)',
  tags: ['zap', 'lightning', 'bolt', 'power', 'energy', 'fast'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" opacity="0.3"/>
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" transform="translate(1,-1)" opacity="0.4"/>
</svg>`,
  },
};

export default zap;
