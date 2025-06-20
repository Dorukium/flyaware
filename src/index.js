import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Import global styles
import { HelmetProvider } from 'react-helmet-async'; // For managing meta tags

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <HelmetProvider>
   <App />
  </HelmetProvider>
 </React.StrictMode>
);