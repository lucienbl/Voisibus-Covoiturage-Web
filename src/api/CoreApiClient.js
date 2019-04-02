/* eslint-disable max-len */
// @flow

import firebase from 'firebase';
import { superagent } from '../utils';
import config from '../config';
import authenticateRequest from './authenticateRequest';
import getAuthToken from './getAuthToken';

class CoreApiClient {

  static async getMe(): Promise {
    return authenticateRequest(
      superagent.get(`${this._baseUrl()}/member/me`)
    )
      .then(res => res.body);
  }

  static async register(name: string, familyname: string, city: string, gender: string, isSmoker: boolean, about: string, birthday: string): Promise {
    return superagent
      .post(`${this._baseUrl()}/member/register`)
      .send({
        token: await getAuthToken(),
        email: firebase.auth().currentUser.email,
        name,
        familyname,
        fcmToken: firebase.auth().currentUser.uid,
        city,
        gender,
        isSmoker,
        about,
        birthday
      })
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
