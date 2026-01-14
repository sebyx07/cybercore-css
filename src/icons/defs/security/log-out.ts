/**
 * Log Out - Logout/sign out
 * @category security
 */
import type { IconDefinition } from '../../types';

export const logOut: IconDefinition = {
  name: 'log-out',
  category: 'security',
  description: 'Log out or sign out with arrow exiting',
  tags: ['logout', 'signout', 'exit', 'leave', 'disconnect', 'end-session'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
  <polyline points="16 17 21 12 16 7"/>
  <line x1="21" y1="12" x2="9" y2="12"/>
  <line x1="6" y1="8" x2="6.5" y2="8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M9 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h4v-1.5H5c-.8 0-1.5-.7-1.5-1.5V5c0-.8.7-1.5 1.5-1.5h4V2zm8.1 4.4l5.5 5.5-5.5 5.5-1.1-1.1 3.7-3.7H8.2v-1.5h11.5l-3.7-3.7 1.1-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" fill="currentColor" opacity="0.3"/>
  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
  <polyline points="16 17 21 12 16 7"/>
  <line x1="21" y1="12" x2="9" y2="12"/>
  <line x1="6" y1="8" x2="6.5" y2="8"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
  <polyline points="16 17 21 12 16 7" transform="translate(1,-1)" opacity="0.3"/>
  <polyline points="16 17 21 12 16 7"/>
  <line x1="21" y1="12" x2="9" y2="12"/>
  <line x1="6" y1="8" x2="6.5" y2="8"/>
</svg>`,
  },
};

export default logOut;
