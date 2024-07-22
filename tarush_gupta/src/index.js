import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import PhoneApp from './PhoneApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isPhone = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

root.render(
  <React.StrictMode>
    {isPhone() ? <PhoneApp /> : <App />}
  </React.StrictMode>
);
