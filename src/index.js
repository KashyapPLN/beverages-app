import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './Store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-hd3ezek5r1p5rmfa.us.auth0.com"
      clientId="rJWOQO7broO6KyjGwGtKc7AsG2Ta4NXf"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Provider store={store}>
      <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>
);

