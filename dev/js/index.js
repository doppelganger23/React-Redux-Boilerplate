import 'babel-polyfill';
import App           from './components/App';
import React         from 'react';
import ReactDOM      from 'react-dom';
import {Provider}    from 'react-redux';
import {createStore} from 'redux';
import allReducers   from './reducers';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
