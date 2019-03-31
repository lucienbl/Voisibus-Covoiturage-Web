/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import firebase from 'firebase';
import './styles.scss';
import { createStore } from './store';
import config from './config';


// import io from 'socket.io-client'

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

const MOUNT_NODE = document.getElementById('root');

const history = syncHistoryWithStore(browserHistory, store);

firebase.initializeApp(config.firebase);

let render = () => {
  const routes = require('./routes').default;
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    MOUNT_NODE
  );
};

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;
      ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE);
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp();
      } catch (error) {
        console.error(error);
        renderError(error);
      }
    };

    // Setup hot module replacement
    module.hot.accept('./routes', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      })
    );
  }
}
render();
