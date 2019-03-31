/* eslint-disable react/no-did-mount-set-state */
// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actionCreators from './actionCreators';
import LoginComponent from './LoginComponent';
import { UrlBuilder } from '../utils';

const mapStateToProps = () => ({
});

class LoginContainer extends React.Component {

  _handleSuccess = async (token: string) => {
    const { dispatch } = this.props;
    const success = await dispatch(actionCreators.login(token));
    if (success) browserHistory.replace(UrlBuilder.app());
  };

  render() {
    return (
      <LoginComponent handleSuccess={this._handleSuccess}/>
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LoginContainer);
