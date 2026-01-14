import type { IconDefinition } from '../../types';

export const warning: IconDefinition = {
  name: 'warning',
  category: 'status',
  description: 'Warning icon with exclamation mark in triangle',
  tags: ['alert', 'caution', 'attention', 'danger'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <circle cx="12" cy="16.5" r="0.5" fill="currentColor"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM13 16h-2v-2h2v2zm0-4h-2V8h2v4z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" fill="currentColor" opacity="0.3"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <circle cx="12" cy="16.5" r="0.5" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
  <path d="M10.09 4.06L1.62 18.2a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.51 4.06a2 2 0 0 0-3.42 0z" opacity="0.3"/>
  <line x1="12" y1="9" x2="12" y2="13"/>
  <line x1="11.8" y1="9.2" x2="11.8" y2="13.2" opacity="0.3"/>
  <circle cx="12" cy="16.5" r="0.5" fill="currentColor"/>
</svg>`,
  },
};
