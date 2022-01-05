import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CartContextProvider} from './contexts/CartContext'
import {ThemeContextProvider} from './contexts/Theme'

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
