import type { IconDefinition } from '../../types';

export const progress: IconDefinition = {
  name: 'progress',
  category: 'status',
  description: 'Progress bar indicator showing partial completion',
  tags: ['loading', 'bar', 'percentage', 'completion'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="10" width="20" height="4" rx="2"/>
  <rect x="2" y="10" width="12" height="4" rx="2" fill="currentColor" opacity="0.3"/>
  <line x1="14" y1="8" x2="14" y2="16"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <rect x="2" y="10" width="20" height="4" rx="2" opacity="0.3"/>
  <rect x="2" y="10" width="12" height="4" rx="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="10" width="20" height="4" rx="2" fill="currentColor" opacity="0.2"/>
  <rect x="2" y="10" width="12" height="4" rx="2" fill="currentColor" opacity="0.6"/>
  <line x1="14" y1="8" x2="14" y2="16"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="10" width="20" height="4" rx="2"/>
  <rect x="2.2" y="10.2" width="20" height="4" rx="2" opacity="0.3"/>
  <rect x="2" y="10" width="12" height="4" rx="2" fill="currentColor" opacity="0.3"/>
  <line x1="14" y1="8" x2="14" y2="16"/>
  <line x1="13.8" y1="8.2" x2="13.8" y2="16.2" opacity="0.3"/>
</svg>`,
  },
};
