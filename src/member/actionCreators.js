/* eslint-disable no-return-assign */
// @flow

import { createAction } from '../actions';
import { CoreApiClient, logCatch } from '../api';

export const SET_ME = 'set-me';
export const SET_DARK_THEME = 'set-dark-theme';
export const SET_MEMBER_PROFILE = 'set-member-profile';
export const SET_UNREAD_MESSAGES = 'set-unread-messages';

export const getMe = () =>
  async (dispatch: any) => {
    try {
      const me = await CoreApiClient.getMe();
      dispatch(createAction(SET_ME, { me }));
    } catch (e) { logCatch(e); }
  };

export const register = (name: string, familyname: string, city: string, gender: string, isSmoker: boolean, about: string, birthday: string) =>
  async (dispatch: any) => {
    try {
      const me = await CoreApiClient.register(name, familyname, city, gender, isSmoker, about, birthday);
      dispatch(createAction(SET_ME, { me }));
    } catch (e) { logCatch(e); }
  };

export const getMemberByUserId = (userId: string) =>
  async (dispatch: any) => {
    try {
      const member = await CoreApiClient.getMemberByUserId(userId);
      dispatch(createAction(SET_MEMBER_PROFILE, { member }));
    } catch (e) { logCatch(e); }
  };

export const setDarkTheme = (active: boolean) =>
  async (dispatch: any) => {
    try {
      dispatch(createAction(SET_DARK_THEME, { active }));
    } catch (e) { logCatch(e); }
  };

export const clearUser = () =>
  async (dispatch: any) => {
    try {
      dispatch(createAction(SET_ME, { me: null }));
    } catch (e) { logCatch(e); }
  };

export const getUnreadMessages = () =>
  async (dispatch: any) => {
    try {
      const messages = await CoreApiClient.getUnreadMessages();
      dispatch(createAction(SET_UNREAD_MESSAGES, { messages }));
    } catch (e) { logCatch(e); }
  };
