/**
 * Unlink Icon
 * @category actions
 */
import type { IconDefinition } from '../../types';

export const unlink: IconDefinition = {
  name: 'unlink',
  category: 'actions',
  description: 'Break or remove link',
  tags: ['unlink', 'broken-chain', 'disconnect', 'remove-link', 'detach'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.08-7.08l-1.71 1.72"/>
  <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.08 7.08l1.71-1.72"/>
  <line x1="8" y1="2" x2="8" y2="5"/>
  <line x1="2" y1="8" x2="5" y2="8"/>
  <line x1="16" y1="19" x2="16" y2="22"/>
  <line x1="19" y1="16" x2="22" y2="16"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.08-7.08l-1.71 1.72"/>
  <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.08 7.08l1.71-1.72"/>
  <rect x="7" y="1" width="2" height="4"/>
  <rect x="1" y="7" width="4" height="2"/>
  <rect x="15" y="19" width="2" height="4"/>
  <rect x="19" y="15" width="4" height="2"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.08-7.08l-1.71 1.72" stroke-width="3" opacity="0.3"/>
  <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.08 7.08l1.71-1.72" stroke-width="3" opacity="0.3"/>
  <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.08-7.08l-1.71 1.72"/>
  <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.08 7.08l1.71-1.72"/>
  <line x1="8" y1="2" x2="8" y2="5"/>
  <line x1="2" y1="8" x2="5" y2="8"/>
  <line x1="16" y1="19" x2="16" y2="22"/>
  <line x1="19" y1="16" x2="22" y2="16"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.08-7.08l-1.71 1.72" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.08 7.08l1.71-1.72" transform="translate(-1,1)" opacity="0.5"/>
  <path d="M18.84 12.25l1.72-1.71a5 5 0 0 0-7.08-7.08l-1.71 1.72"/>
  <path d="M5.16 11.75l-1.72 1.71a5 5 0 0 0 7.08 7.08l1.71-1.72"/>
  <line x1="8" y1="2" x2="8" y2="5"/>
  <line x1="2" y1="8" x2="5" y2="8"/>
  <line x1="16" y1="19" x2="16" y2="22"/>
  <line x1="19" y1="16" x2="22" y2="16"/>
</svg>`,
  },
};

export default unlink;
