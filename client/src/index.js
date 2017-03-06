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


utils.getContentHeight()



import '../styles/dist/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={genStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
