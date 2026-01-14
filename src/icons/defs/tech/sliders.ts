/**
 * Sliders Icon
 * @category tech
 */
import type { IconDefinition } from '../../types';

export const sliders: IconDefinition = {
  name: 'sliders',
  category: 'tech',
  description: 'Sliders/adjustments',
  tags: ['sliders', 'controls', 'adjustments', 'settings', 'tuning'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="21" x2="4" y2="14"/>
  <line x1="4" y1="10" x2="4" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12" y2="3"/>
  <line x1="20" y1="21" x2="20" y2="16"/>
  <line x1="20" y1="12" x2="20" y2="3"/>
  <line x1="1" y1="14" x2="7" y2="14"/>
  <line x1="9" y1="8" x2="15" y2="8"/>
  <line x1="17" y1="16" x2="23" y2="16"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="3.25" y="14" width="1.5" height="7"/>
  <rect x="3.25" y="3" width="1.5" height="7"/>
  <rect x="11.25" y="12" width="1.5" height="9"/>
  <rect x="11.25" y="3" width="1.5" height="5"/>
  <rect x="19.25" y="16" width="1.5" height="5"/>
  <rect x="19.25" y="3" width="1.5" height="9"/>
  <rect x="1" y="13" width="6" height="2" rx="1"/>
  <rect x="9" y="7" width="6" height="2" rx="1"/>
  <rect x="17" y="15" width="6" height="2" rx="1"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="21" x2="4" y2="14" opacity="0.3"/>
  <line x1="4" y1="10" x2="4" y2="3" opacity="0.3"/>
  <line x1="12" y1="21" x2="12" y2="12" opacity="0.3"/>
  <line x1="12" y1="8" x2="12" y2="3" opacity="0.3"/>
  <line x1="20" y1="21" x2="20" y2="16" opacity="0.3"/>
  <line x1="20" y1="12" x2="20" y2="3" opacity="0.3"/>
  <line x1="1" y1="14" x2="7" y2="14"/>
  <line x1="9" y1="8" x2="15" y2="8"/>
  <line x1="17" y1="16" x2="23" y2="16"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <line x1="4" y1="21" x2="4" y2="14"/>
  <line x1="4" y1="10" x2="4" y2="3"/>
  <line x1="12" y1="21" x2="12" y2="12"/>
  <line x1="12" y1="8" x2="12" y2="3"/>
  <line x1="20" y1="21" x2="20" y2="16"/>
  <line x1="20" y1="12" x2="20" y2="3"/>
  <line x1="1" y1="14" x2="7" y2="14"/>
  <line x1="1" y1="14" x2="7" y2="14" transform="translate(1,-1)" opacity="0.4"/>
  <line x1="9" y1="8" x2="15" y2="8"/>
  <line x1="9" y1="8" x2="15" y2="8" transform="translate(1,-1)" opacity="0.4"/>
  <line x1="17" y1="16" x2="23" y2="16"/>
  <line x1="17" y1="16" x2="23" y2="16" transform="translate(1,-1)" opacity="0.4"/>
</svg>`,
  },
};

export default sliders;
