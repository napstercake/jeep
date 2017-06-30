import { createStore, combineReducers } from 'redux';

// Reducer
import amountReducer from './reducers/amountReducer';
import commentsReducer from './reducers/commentsReducer';

export default createStore(
  combineReducers({
    amount: amountReducer, 
    comments: commentsReducer
  })
);