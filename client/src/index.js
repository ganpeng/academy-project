import 'babel-polyfill';
import './utils/media.match.min.js';

import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/App/';
import genStore from './store/'
import utils from './utils/'
import { setUser } from './actions/authentication';
import setAuthorizationHeader from './utils/setAuthorizationHeader';

import '../styles/dist/index.css';

const store = genStore();

const token = localStorage.getItem('token');

setAuthorizationHeader(token);

if (token) {
  store.dispatch(setUser(token));
}

utils.getContentHeight()


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
