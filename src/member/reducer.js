// @flow

import { handleActions } from '../reducers';
import * as Actions from './actionCreators';
import * as storeKeys from './storeKeys';

const initialState = {
  [storeKeys.KEY_ME]: null,
  [storeKeys.KEY_DARK_THEME]: false,
  [storeKeys.KEY_MEMBER_PROFILE]: null,
  [storeKeys.KEY_UNREAD_MESSAGES]: []
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
  [Actions.SET_MEMBER_PROFILE]: (state, action) => ({
    ...state,
    [storeKeys.KEY_MEMBER_PROFILE]: action.payload.member,
  }),
  [Actions.SET_UNREAD_MESSAGES]: (state, action) => ({
    ...state,
    [storeKeys.KEY_UNREAD_MESSAGES]: action.payload.messages,
  }),
}, initialState);
