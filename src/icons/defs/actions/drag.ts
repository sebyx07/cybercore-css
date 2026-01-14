/**
 * Drag Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const drag: IconDefinition = {
  name: 'drag',
  category: 'actions',
  description: 'Drag handle for reordering',
  tags: ['drag', 'handle', 'grip', 'move', 'reorder'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="6" r="1"/>
  <circle cx="15" cy="6" r="1"/>
  <circle cx="9" cy="12" r="1"/>
  <circle cx="15" cy="12" r="1"/>
  <circle cx="9" cy="18" r="1"/>
  <circle cx="15" cy="18" r="1"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="9" cy="6" r="1.5"/>
  <circle cx="15" cy="6" r="1.5"/>
  <circle cx="9" cy="12" r="1.5"/>
  <circle cx="15" cy="12" r="1.5"/>
  <circle cx="9" cy="18" r="1.5"/>
  <circle cx="15" cy="18" r="1.5"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="6" r="1" fill="currentColor" opacity="0.3"/>
  <circle cx="15" cy="6" r="1" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="12" r="1" fill="currentColor" opacity="0.3"/>
  <circle cx="15" cy="12" r="1" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="18" r="1" fill="currentColor" opacity="0.3"/>
  <circle cx="15" cy="18" r="1" fill="currentColor" opacity="0.3"/>
  <circle cx="9" cy="6" r="1"/>
  <circle cx="15" cy="6" r="1"/>
  <circle cx="9" cy="12" r="1"/>
  <circle cx="15" cy="12" r="1"/>
  <circle cx="9" cy="18" r="1"/>
  <circle cx="15" cy="18" r="1"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="9" cy="6" r="1" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="15" cy="6" r="1" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="9" cy="12" r="1" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="15" cy="12" r="1" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="9" cy="18" r="1" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="15" cy="18" r="1" transform="translate(1,-1)" opacity="0.5"/>
  <circle cx="9" cy="6" r="1"/>
  <circle cx="15" cy="6" r="1"/>
  <circle cx="9" cy="12" r="1"/>
  <circle cx="15" cy="12" r="1"/>
  <circle cx="9" cy="18" r="1"/>
  <circle cx="15" cy="18" r="1"/>
</svg>`,
  },
};

export default drag;
