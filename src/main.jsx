import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

if (import.meta.env.PROD) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'AW-11106441498');

  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src =
    'https://www.googletagmanager.com/gtag/js?id=AW-11106441498';
  document.head.appendChild(analyticsScript);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
