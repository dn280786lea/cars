import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/cars">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
