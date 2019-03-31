// @flow

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { KEY_REDUCER as KEY_AUTH, reducer as reducerAuth } from '../auth';
import { KEY_REDUCER as KEY_PLAYER_REPORTS, reducer as reducervotingGallery } from '../member';

const createRootReducer = (asyncReducers: any) => combineReducers({
  ...asyncReducers,
  routing,
  [KEY_AUTH]: reducerAuth,
  [KEY_PLAYER_REPORTS]: reducervotingGallery,
});

export default createRootReducer;
