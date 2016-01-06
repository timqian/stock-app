import React from 'react';
import ReactDOM from 'react-dom';
// React Router is built on history.
// In a nutshell, a history knows how to listen to the browser's address bar
// for changes and parses the URL into a location object
// that the router can use to match routes and
// render the correct set of components.
// 这种方式可以让我在 component 外面(在 action 里) navigate!
import history from './utils/history';
import { Router } from 'react-router';  //装 v1.0
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import stockApp from './reducers';
import routes from './routes';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(stockApp, {
  username: null,
  isFetching: false,
  stock: {
      _id: '',
      name: '',
      tags: [],
  },
  tagStocks: [],
  events: [],
  bigMoneys: [],
});

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  rootElement
);
