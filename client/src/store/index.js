import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from '../reducers/';

export default (initialStore) => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    // applyMiddleware(thunk),
    initialStore
  )

  return store;

}






