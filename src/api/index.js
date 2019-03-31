// @flow

import CoreApiClient from './CoreApiClient';

const logCatch = (e: Object) => {
  console.error(e);
  console.warn('Wrong Server?');
};

export {
  CoreApiClient,
  logCatch,
};
