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
const commentsReducer = (
  state = {
    comments: ["this is the first comment", "this is the #2 comment", "this is #3 comment"]
  }, action) => {
    switch (action.type) {
      case 'ADD_COMMENT':
        state = {
          ...state,
          comments: state.comments.push("test")
        }
      break;
    }
    return state;
  }

/**
 * 
 */
const appStore = createStore(
  combineReducers({amount: amountReducer, comments: commentsReducer})
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
