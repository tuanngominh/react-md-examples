import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux';
import '../node_modules/react-md/dist/react-md.amber-blue.min.css'
import Root from './Root';
import './index.css';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
