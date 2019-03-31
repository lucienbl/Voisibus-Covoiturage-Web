/* eslint-disable no-return-assign */
// @flow

import { createAction } from '../actions';

export const SET_USER_TOKEN = 'auth-set-user-token';

export const login = (token: string) =>
  async (dispatch: any) => {
    dispatch(createAction(SET_USER_TOKEN, { token }));
    return true;
  };
