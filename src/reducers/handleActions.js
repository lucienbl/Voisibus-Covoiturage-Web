// @flow
/* eslint-disable no-console */

import type { ActionType } from '../actions';

/**
 * Easier handling of actions.
 *
 * @param {Object.<String,Object>} handlers - Maps action types to a specific action handler.
 * Action handlers will receive the state and action as arguments. Alternatively handlers
 * can provide a 'next', 'throw' and 'always' function which will be called directly depending
 * on the action type (error / not error).
 * @param {Object} defaultState - Redux default state.
 */

type Handlers = {
  [key: string]: (state: Object, action: ActionType) => {
    always: Function,
    next: Function,
    throw: Function
  }
};

export default (handlers: Handlers, defaultState: Object = {}) =>
  (state: Object = defaultState, action: ActionType) => {
    // find handler matching action type
    if (handlers[action.type]) {
      const handler = handlers[action.type](state, action);

      // check if handler has 'always' function and fall this first.
      let tmpState = {};
      if (handler.always) {
        tmpState = handler.always();
      }

      // call next
      if (handler.next && !action.error) {
        return Object.assign(tmpState, handler.next());
      }

      // call throw
      if (handler.throw && action.error) {
        return Object.assign(tmpState, handler.throw());
      }

      // assert errors have been handled
      if (handler.next && action.error) console.error('Unhandled error action!');

      return handler;
    }
    return state;
  };
