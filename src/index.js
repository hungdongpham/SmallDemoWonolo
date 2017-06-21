import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import async from './middlewares/async';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(promise, async, reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension && window.devToolsExtension());
const token = localStorage.getItem('token');
//If we have a token, consider the user to be signed in
if(token){
  //We need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={routes}/>
  </Provider>
  , document.querySelector('.main'));
