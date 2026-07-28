import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element #root not found');
}

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Prerendered HTML in #root is the crawler / no-JS deliverable (title, H1, copy, schema).
// This app is Motion-heavy; Playwright snapshots and client Motion trees drift enough that
// hydrateRoot regenerates anyway (React #418). createRoot mounts the interactive tree in
// place for the same route — no blank navigation, FAQs/menus work, SEO HTML already sent.
createRoot(container).render(app);
