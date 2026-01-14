import type { IconDefinition } from '../../types';

export const loading: IconDefinition = {
  name: 'loading',
  category: 'status',
  description: 'Loading spinner with 8 radial segments',
  tags: ['spinner', 'waiting', 'processing', 'buffering'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v4"/>
  <path d="M12 18v4"/>
  <path d="M4.93 4.93l2.83 2.83"/>
  <path d="M16.24 16.24l2.83 2.83"/>
  <path d="M2 12h4"/>
  <path d="M18 12h4"/>
  <path d="M4.93 19.07l2.83-2.83"/>
  <path d="M16.24 7.76l2.83-2.83"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M11 3h2v5h-2z"/>
  <path d="M11 16h2v5h-2z"/>
  <path d="M5.64 5.64l1.41 1.41 3.54-3.54-1.41-1.41z"/>
  <path d="M13.41 16.24l1.41 1.41 3.54-3.54-1.41-1.41z"/>
  <path d="M3 11h5v2H3z"/>
  <path d="M16 11h5v2h-5z"/>
  <path d="M5.64 18.36l1.41-1.41 3.54 3.54-1.41 1.41z"/>
  <path d="M13.41 7.76l1.41-1.41 3.54 3.54-1.41 1.41z" opacity="0.3"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v4"/>
  <path d="M12 18v4" opacity="0.3"/>
  <path d="M4.93 4.93l2.83 2.83"/>
  <path d="M16.24 16.24l2.83 2.83" opacity="0.3"/>
  <path d="M2 12h4"/>
  <path d="M18 12h4" opacity="0.5"/>
  <path d="M4.93 19.07l2.83-2.83" opacity="0.3"/>
  <path d="M16.24 7.76l2.83-2.83" opacity="0.7"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 2v4"/>
  <path d="M12.3 2.3v4" opacity="0.3"/>
  <path d="M12 18v4"/>
  <path d="M4.93 4.93l2.83 2.83"/>
  <path d="M5.23 4.63l2.83 2.83" opacity="0.3"/>
  <path d="M16.24 16.24l2.83 2.83"/>
  <path d="M2 12h4"/>
  <path d="M18 12h4"/>
  <path d="M4.93 19.07l2.83-2.83"/>
  <path d="M16.24 7.76l2.83-2.83"/>
</svg>`,
  },
};
