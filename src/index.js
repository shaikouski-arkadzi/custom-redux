import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configureCounterStore from './hooks-store/counter.store';
import configureProductsStore from './hooks-store/products.store';
import store from './store/index';
import App from './App';

import './index.css';

configureProductsStore();
configureCounterStore();

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </Provider>, */}
  </>,
  document.getElementById('root')
);
