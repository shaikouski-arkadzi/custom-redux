import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './store/index';

import configureProductsStore from './hooks-store/products.store';
import configureCounterStore from './hooks-store/counter.store';
import { Provider } from 'react-redux';

configureProductsStore();
configureCounterStore();

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
