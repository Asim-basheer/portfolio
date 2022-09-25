import React from 'react';
import ReactDOM from 'react-dom/client';

//components
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

// styles
import './sass/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
