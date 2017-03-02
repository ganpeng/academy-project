import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import App from './containers/App/';
import genStore from './store/'



import '../styles/dist/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={genStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
