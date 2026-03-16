import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import EstateCleanouts from './pages/EstateCleanouts.tsx';
import './index.css';

const Root = () => {
  const path = window.location.pathname;

  if (path === '/estate-cleanouts') {
    return <EstateCleanouts />;
  }

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
