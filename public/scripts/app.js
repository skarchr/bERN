import React from 'react';
import { createStore, combineReducers } from 'redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import firstReducer from './reducers/FirstReducer';

const store = createStore(combineReducers({
    firstReducer,
    routing: routerReducer
  }));

const history = syncHistoryWithStore(browserHistory,store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
  ,
  document.getElementById('app')
);