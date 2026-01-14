/**
 * User - User profile/account
 * @category security
 */
import type { IconDefinition } from '../../types';

export const user: IconDefinition = {
  name: 'user',
  category: 'security',
  description: 'User profile or account with person silhouette',
  tags: ['user', 'profile', 'account', 'person', 'avatar', 'identity'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/>
  <line x1="9" y1="7" x2="9" y2="7.5"/>
  <line x1="15" y1="7" x2="15" y2="7.5"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2.5c-3 0-5.5 2.5-5.5 5.5S9 13.5 12 13.5s5.5-2.5 5.5-5.5S15 2.5 12 2.5zm-2 5c0-.3.2-.5.5-.5s.5.2.5.5v1h-1v-1zm3 0c0-.3.2-.5.5-.5s.5.2.5.5v1h-1v-1zM3.5 21.5v-1.5c0-3.6 4-6.5 9-6.5h1c5 0 9 2.9 9 6.5v1.5h-19z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="4" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" fill="currentColor" opacity="0.3"/>
  <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/>
  <line x1="9" y1="7" x2="9" y2="7.5"/>
  <line x1="15" y1="7" x2="15" y2="7.5"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="4" transform="translate(1,-1)" opacity="0.3"/>
  <circle cx="12" cy="8" r="4"/>
  <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6"/>
  <line x1="9" y1="7" x2="9" y2="7.5"/>
  <line x1="15" y1="7" x2="15" y2="7.5"/>
</svg>`,
  },
};

export default user;
