// @flow

import getAuthToken from './getAuthToken';

export default async (req: any) => {
  const idToken = await getAuthToken();
  req.set('Authorization', `Bearer ${idToken}`);
  return req;
};
