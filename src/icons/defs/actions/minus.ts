/**
 * Minus Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const minus: IconDefinition = {
  name: 'minus',
  category: 'actions',
  description: 'Remove or subtract item',
  tags: ['minus', 'remove', 'subtract', 'delete', 'decrease'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <rect x="4" y="11" width="16" height="2" rx="1"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="5" y="11" width="14" height="2" fill="currentColor" opacity="0.3"/>
  <line x1="5" y1="12" x2="19" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="5" y1="12" x2="19" y2="12" transform="translate(1,-1)" opacity="0.5"/>
  <line x1="5" y1="12" x2="19" y2="12"/>
</svg>`,
  },
};

export default minus;
