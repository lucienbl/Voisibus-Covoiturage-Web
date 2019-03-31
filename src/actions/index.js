// @flow

import { createAction, createErrorAction } from './actionCreatorUtils';
import ActionResult from './ActionResult';
import type { ActionType as Action } from './types';

export {
  createAction,
  createErrorAction,
  ActionResult,
};

export type ActionType = Action;
