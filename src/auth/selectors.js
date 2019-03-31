// @flow

import { createSelector } from 'reselect';
import * as storeKeys from './storeKeys';

const root = state => state[storeKeys.ROOT];


export const userToken = createSelector(
  root,
  state => state[storeKeys.USER_TOKEN],
);
