/**
 * Circuit Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const circuit: IconDefinition = {
  name: 'circuit',
  category: 'tech',
  description: 'Circuit board pattern',
  tags: ['circuit', 'board', 'electronics', 'pcb', 'connections'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <circle cx="8" cy="8" r="1"/>
  <circle cx="16" cy="8" r="1"/>
  <circle cx="8" cy="16" r="1"/>
  <circle cx="16" cy="16" r="1"/>
  <line x1="8" y1="9" x2="8" y2="15"/>
  <line x1="16" y1="9" x2="16" y2="15"/>
  <line x1="9" y1="12" x2="15" y2="12"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <circle cx="8" cy="8" r="1.5" fill="#000"/>
  <circle cx="16" cy="8" r="1.5" fill="#000"/>
  <circle cx="8" cy="16" r="1.5" fill="#000"/>
  <circle cx="16" cy="16" r="1.5" fill="#000"/>
  <rect x="7.5" y="9" width="1" height="6" fill="#000"/>
  <rect x="15.5" y="9" width="1" height="6" fill="#000"/>
  <rect x="9" y="11.5" width="6" height="1" fill="#000"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" opacity="0.3"/>
  <circle cx="8" cy="8" r="1" fill="currentColor"/>
  <circle cx="16" cy="8" r="1" fill="currentColor"/>
  <circle cx="8" cy="16" r="1" fill="currentColor"/>
  <circle cx="16" cy="16" r="1" fill="currentColor"/>
  <line x1="8" y1="9" x2="8" y2="15"/>
  <line x1="16" y1="9" x2="16" y2="15"/>
  <line x1="9" y1="12" x2="15" y2="12"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <rect x="5" y="3" width="16" height="16" rx="2" opacity="0.4"/>
  <circle cx="8" cy="8" r="1"/>
  <circle cx="16" cy="8" r="1"/>
  <circle cx="8" cy="16" r="1"/>
  <circle cx="16" cy="16" r="1"/>
  <line x1="8" y1="9" x2="8" y2="15"/>
  <line x1="16" y1="9" x2="16" y2="15"/>
  <line x1="9" y1="12" x2="15" y2="12"/>
</svg>`,
  },
};

export default circuit;
