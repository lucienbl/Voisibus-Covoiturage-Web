// @flow

import { handleActions } from '../reducers';
import * as Actions from './actionCreators';
import * as storeKeys from './storeKeys';

const initialState = {
  [storeKeys.KEY_ME]: null,
  [storeKeys.KEY_DARK_THEME]: false
};

export default handleActions({
  [Actions.SET_ME]: (state, action) => ({
    ...state,
    [storeKeys.KEY_ME]: action.payload.me,
  }),
  [Actions.SET_DARK_THEME]: (state, action) => ({
    ...state,
    [storeKeys.KEY_DARK_THEME]: action.payload.active,
  }),
}, initialState);
