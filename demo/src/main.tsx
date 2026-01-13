import React from 'react';

import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';
import './styles.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
}
