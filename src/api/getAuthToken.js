// @flow

import firebase from 'firebase';

export default async () => {
  const user = firebase.auth().currentUser;
  let tokenResult = await user.getIdTokenResult(false);
  if (tokenResult.claims && tokenResult.claims.exp) {
    const expirationTime = new Date(tokenResult.claims.exp * 1000);
    const now = new Date();
    if (expirationTime.getTime() - now.getTime() < 30 * 1000) {
      tokenResult = await user.getIdTokenResult(true);
    }
  }
  return tokenResult.token;
};
