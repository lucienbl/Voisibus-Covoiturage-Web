/* eslint-disable no-return-assign */
// @flow

import { createAction } from '../actions';
import { CoreApiClient, logCatch } from '../api';

export const SET_ME = 'set-me';
export const SET_DARK_THEME = 'set-dark-theme';

export const getMe = () =>
  async (dispatch: any) => {
    try {
      const me = await CoreApiClient.getMe();
      dispatch(createAction(SET_ME, { me }));
    } catch (e) { logCatch(e); }
  };

export const setDarkTheme = (active: boolean) =>
  async (dispatch: any) => {
    try {
      dispatch(createAction(SET_DARK_THEME, { active }));
    } catch (e) { logCatch(e); }
  };
