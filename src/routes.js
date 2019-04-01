/* eslint-disable flowtype-errors/show-errors,max-len */
// @flow

import React from 'react';
import { Route, IndexRedirect, IndexRoute } from 'react-router';
import { urlPaths, UrlBuilder } from './utils';
import { LoginScreen, AuthRestrictedContainer } from './auth';
import { MemberHomeScreen, MemberProfileScreen } from './member';
import MenuWrapper from './MenuWrapper';

export default (
  <Route path="/">
    <IndexRedirect to={urlPaths.PATH_APP}/>
    <Route path={urlPaths.PATH_LOGIN} component={LoginScreen}/>

    <Route path={urlPaths.PATH_APP} component={AuthRestrictedContainer}>
      <Route component={MenuWrapper}>
        <IndexRedirect to={UrlBuilder.memberHome()}/>

        <Route path={urlPaths.PATH_HOME} component={MemberHomeScreen} />
        <Route path={`${urlPaths.PATH_PROFILE}/${urlPaths.PATH_PARAM_USER_ID}`} component={MemberProfileScreen}/>

      </Route>
    </Route>

  </Route>
);
