// @flow

import { handleActions } from '../reducers';
import * as Actions from './actionCreators';
import * as storeKeys from './storeKeys';


const initialState = {
  [storeKeys.USER_TOKEN]: null,
};

export default handleActions({
  [Actions.SET_USER_TOKEN]: (state, action) => ({
    ...state,
    [storeKeys.USER_TOKEN]: action.payload.token,
  }),
}, initialState);
