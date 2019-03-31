// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as selectors from './selectors';
import UrlBuilder from '../utils/UrlBuilder';

const mapStateToProps = state => ({
  userToken: selectors.userToken(state),
});

class AuthRestrictedContainer extends React.Component {

  componentDidMount() {
    const { userToken } = this.props;
    if (userToken) return;
    browserHistory.replace(UrlBuilder.login());
  }

  render() {
    const { userToken, children } = this.props;
    if (!userToken) return null;
    return children;
  }
}

AuthRestrictedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  userToken: PropTypes.string,
};

export default connect(mapStateToProps)(AuthRestrictedContainer);
