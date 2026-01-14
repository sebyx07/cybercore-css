/**
 * Chip Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const chip: IconDefinition = {
  name: 'chip',
  category: 'tech',
  description: 'CPU/processor chip',
  tags: ['chip', 'cpu', 'processor', 'microchip', 'silicon'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="12" rx="2"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="6" y1="8" x2="4" y2="8"/>
  <line x1="6" y1="12" x2="4" y2="12"/>
  <line x1="6" y1="16" x2="4" y2="16"/>
  <line x1="18" y1="8" x2="20" y2="8"/>
  <line x1="18" y1="12" x2="20" y2="12"/>
  <line x1="18" y1="16" x2="20" y2="16"/>
  <line x1="8" y1="6" x2="8" y2="4"/>
  <line x1="12" y1="6" x2="12" y2="4"/>
  <line x1="16" y1="6" x2="16" y2="4"/>
  <line x1="8" y1="18" x2="8" y2="20"/>
  <line x1="12" y1="18" x2="12" y2="20"/>
  <line x1="16" y1="18" x2="16" y2="20"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2zm3 3h6v6H9V9z"/>
  <rect x="4" y="8" width="2" height="1.5"/>
  <rect x="4" y="12" width="2" height="1.5"/>
  <rect x="4" y="16" width="2" height="1.5"/>
  <rect x="18" y="8" width="2" height="1.5"/>
  <rect x="18" y="12" width="2" height="1.5"/>
  <rect x="18" y="16" width="2" height="1.5"/>
  <rect x="8" y="4" width="1.5" height="2"/>
  <rect x="12" y="4" width="1.5" height="2"/>
  <rect x="16" y="4" width="1.5" height="2"/>
  <rect x="8" y="18" width="1.5" height="2"/>
  <rect x="12" y="18" width="1.5" height="2"/>
  <rect x="16" y="18" width="1.5" height="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="12" rx="2" fill="currentColor" opacity="0.3"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="6" y1="8" x2="4" y2="8"/>
  <line x1="6" y1="12" x2="4" y2="12"/>
  <line x1="6" y1="16" x2="4" y2="16"/>
  <line x1="18" y1="8" x2="20" y2="8"/>
  <line x1="18" y1="12" x2="20" y2="12"/>
  <line x1="18" y1="16" x2="20" y2="16"/>
  <line x1="8" y1="6" x2="8" y2="4"/>
  <line x1="12" y1="6" x2="12" y2="4"/>
  <line x1="16" y1="6" x2="16" y2="4"/>
  <line x1="8" y1="18" x2="8" y2="20"/>
  <line x1="12" y1="18" x2="12" y2="20"/>
  <line x1="16" y1="18" x2="16" y2="20"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="6" y="6" width="12" height="12" rx="2"/>
  <rect x="6" y="6" width="12" height="12" rx="2" transform="translate(1,-1)" opacity="0.4"/>
  <rect x="9" y="9" width="6" height="6"/>
  <line x1="6" y1="8" x2="4" y2="8"/>
  <line x1="6" y1="12" x2="4" y2="12"/>
  <line x1="6" y1="16" x2="4" y2="16"/>
  <line x1="18" y1="8" x2="20" y2="8"/>
  <line x1="18" y1="12" x2="20" y2="12"/>
  <line x1="18" y1="16" x2="20" y2="16"/>
  <line x1="8" y1="6" x2="8" y2="4"/>
  <line x1="12" y1="6" x2="12" y2="4"/>
  <line x1="16" y1="6" x2="16" y2="4"/>
  <line x1="8" y1="18" x2="8" y2="20"/>
  <line x1="12" y1="18" x2="12" y2="20"/>
  <line x1="16" y1="18" x2="16" y2="20"/>
</svg>`,
  },
};

export default chip;
