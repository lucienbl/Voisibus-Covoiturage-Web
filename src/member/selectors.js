// @Flow

import { createSelector } from 'reselect';
import * as storeKeys from './storeKeys';

const root = state => state[storeKeys.ROOT];

export const me = createSelector(
  root,
  state => state[storeKeys.KEY_ME],
);

export const darkTheme = createSelector(
  root,
  state => state[storeKeys.KEY_DARK_THEME],
);

export const memberProfile = createSelector(
  root,
  state => state[storeKeys.KEY_MEMBER_PROFILE],
);
