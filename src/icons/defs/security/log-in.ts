/**
 * Log In - Login/sign in
 * @category security
 */
import type { IconDefinition } from '../../types';

export const logIn: IconDefinition = {
  name: 'log-in',
  category: 'security',
  description: 'Log in or sign in with arrow entering',
  tags: ['login', 'signin', 'enter', 'access', 'authenticate', 'session'],
  svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
  <polyline points="10 17 15 12 10 7"/>
  <line x1="15" y1="12" x2="3" y2="12"/>
  <line x1="18" y1="8" x2="18.5" y2="8"/>
</svg>`,
  variants: {
    solid: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M15 2h4c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3h-4v-1.5h4c.8 0 1.5-.7 1.5-1.5V5c0-.8-.7-1.5-1.5-1.5h-4V2zm-4.1 4.4l5.5 5.5-5.5 5.5-1.1-1.1 3.7-3.7H2v-1.5h11.5l-3.7-3.7 1.1-1z"/>
</svg>`,
    duotone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" fill="currentColor" opacity="0.3"/>
  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
  <polyline points="10 17 15 12 10 7"/>
  <line x1="15" y1="12" x2="3" y2="12"/>
  <line x1="18" y1="8" x2="18.5" y2="8"/>
</svg>`,
    glitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" transform="translate(1,-1)" opacity="0.3"/>
  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/>
  <polyline points="10 17 15 12 10 7" transform="translate(1,-1)" opacity="0.3"/>
  <polyline points="10 17 15 12 10 7"/>
  <line x1="15" y1="12" x2="3" y2="12"/>
  <line x1="18" y1="8" x2="18.5" y2="8"/>
</svg>`,
  },
};

export default logIn;
