import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import appStore from './store';

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
