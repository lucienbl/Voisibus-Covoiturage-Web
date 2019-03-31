// @flow

import configProd from './config.prod';
import configDev from './config.dev';

const configExtend = require('config-extend');

const config = process.env.NODE_ENV === 'production'
  ? configProd
  : configExtend(configProd, configDev);

export default config;
