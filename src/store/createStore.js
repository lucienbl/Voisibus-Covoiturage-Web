/* eslint-disable global-require */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers/createRootReducer';

export default (initialState = {}) => {
  const middleware = [thunk];
  const enhancers = [];
  let composeEnhancers = compose;

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension;
    }

    const createReduxLogger = require('redux-logger').createLogger;
    const reduxLogger = createReduxLogger({ level: 'info', collapsed: true });
    middleware.push(reduxLogger);
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('../reducers/createRootReducer', () => {
      const updatedCreateReducers = require('../reducers/createRootReducer').default;
      store.replaceReducer(updatedCreateReducers(store.asyncReducers));
    });
  }

  return store;
};
