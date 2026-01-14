/**
 * Video Call - Video call with camera
 * @category communication
 */
import type { IconDefinition } from '../../types';

export const videoCall: IconDefinition = {
  name: 'video-call',
  category: 'communication',
  description: 'Video call (camera with person)',
  tags: ['video', 'call', 'camera', 'conference', 'meeting'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 7l-7 5 7 5V7z"/>
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  <circle cx="8.5" cy="10" r="2"/>
  <path d="M13 16c0-1.5-1.34-3-4.5-3S4 14.5 4 16"/>
  <line x1="19" y1="4" x2="19.01" y2="4"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm5.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm4.5 4c0-1.5-1.34-3-4.5-3S4 14.5 4 16h9z"/>
  <path d="M23 7l-7 5 7 5V7z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="currentColor" opacity="0.3"/>
  <path d="M23 7l-7 5 7 5V7z"/>
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  <circle cx="8.5" cy="10" r="2"/>
  <path d="M13 16c0-1.5-1.34-3-4.5-3S4 14.5 4 16"/>
  <line x1="19" y1="4" x2="19.01" y2="4"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M23 7l-7 5 7 5V7z" transform="translate(1,-1)" opacity="0.5"/>
  <path d="M23 7l-7 5 7 5V7z"/>
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" transform="translate(1,-1)" opacity="0.5"/>
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  <circle cx="8.5" cy="10" r="2"/>
  <path d="M13 16c0-1.5-1.34-3-4.5-3S4 14.5 4 16"/>
  <line x1="19" y1="4" x2="19.01" y2="4"/>
</svg>`,
  },
};

export default videoCall;
