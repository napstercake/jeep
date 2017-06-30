import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
const amountReducer = (state = {
    amount: 0  
  }, action) => {
    switch (action.type) {
      case "ADD_AMOUNT":
        state = {
          ...state,
          amount: state.amount + action.payload
        }
        break;
    }
    return state;
  }

/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
const commentReducer = (
  state = {
    comment: "this is the first comment"
  }, action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
        state = {
          ...state,
          comment: action.payload
        }
    }
    return state;
  }

/**
 * 
 */
const appStore = createStore(
  combineReducers({amount: amountReducer, comment: commentReducer})
);

/**
 * 
 */
appStore.subscribe(() => {
  console.log('store updated', appStore.getState());
})

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
