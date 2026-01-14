import type { IconDefinition } from '../../types';

export const online: IconDefinition = {
  name: 'online',
  category: 'status',
  description: 'Online status indicator with radiating pulse',
  tags: ['connected', 'active', 'available', 'status'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor"/>
  <circle cx="12" cy="12" r="8" opacity="0.3"/>
  <circle cx="12" cy="12" r="11" opacity="0.2"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
  <circle cx="12" cy="12" r="4"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15"/>
  <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.25"/>
  <circle cx="12" cy="12" r="4" fill="currentColor"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4" fill="currentColor"/>
  <circle cx="12.2" cy="11.8" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="12" r="8" opacity="0.3"/>
  <circle cx="12.2" cy="11.8" r="8" opacity="0.15"/>
  <circle cx="12" cy="12" r="11" opacity="0.2"/>
</svg>`,
  },
};
