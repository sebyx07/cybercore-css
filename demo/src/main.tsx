import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import App from './App';
import './styles/site.scss';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

// The site used hash routes (/#/docs, /#/components/inputs). Those links are
// all over the web, so turn them into the real path before the router starts.
const legacyRoute = /^#(\/.*)$/.exec(window.location.hash)?.[1];
if (legacyRoute) {
  window.history.replaceState(null, '', `${base}${legacyRoute}`);
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing #root element in index.html');
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
