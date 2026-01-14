/**
 * Percent Icon
 * @category data
 */
import type { IconDefinition } from '../../types';

export const percent: IconDefinition = {
  name: 'percent',
  category: 'data',
  description: 'Percentage symbol',
  tags: ['percent', 'percentage', 'number', 'math', 'symbol'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 5L5 19"/>
  <circle cx="7" cy="7" r="2.5"/>
  <circle cx="17" cy="17" r="2.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M7 3a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm10 4a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm2.7-15.7l1.4 1.4-14 14-1.4-1.4 14-14z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 5L5 19"/>
  <circle cx="7" cy="7" r="2.5" fill="currentColor" opacity="0.3"/>
  <circle cx="17" cy="17" r="2.5" fill="currentColor" opacity="0.3"/>
  <circle cx="7" cy="7" r="2.5"/>
  <circle cx="17" cy="17" r="2.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M19 5L5 19" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M19 5L5 19"/>
  <circle cx="7" cy="7" r="2.5" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="7" cy="7" r="2.5"/>
  <circle cx="17" cy="17" r="2.5" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="17" cy="17" r="2.5"/>
</svg>`,
  },
};

export default percent;
