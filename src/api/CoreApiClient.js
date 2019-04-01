/* eslint-disable max-len */
// @flow

import { superagent } from '../utils';
import config from '../config';
import authenticateRequest from './authenticateRequest';

class CoreApiClient {

  static async getMe(): Promise {
    return authenticateRequest(
      superagent.get(`${this._baseUrl()}/member/me`)
    )
      .then(res => res.body);
  }

  static async getMemberByUserId(userId: string): Promise {
    return authenticateRequest(
      superagent.get(`${this._baseUrl()}/member/${userId}`)
    )
      .then(res => res.body);
  }

  static _baseUrl(): string {
    return config.coreApi.baseUrlProd;
  }
}

export default CoreApiClient;
