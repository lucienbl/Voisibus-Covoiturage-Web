/* eslint-disable react/no-did-mount-set-state */
// @Flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import * as actionCreators from '../actionCreators';
import * as selectors from '../selectors';

const mapStateToProps = state => ({
  me: selectors.me(state),
});

class HomeContainer extends React.Component {

  async componentWillMount(): void {
    const { dispatch } = this.props;
    await dispatch(actionCreators.getMe());
  }

  render() {
    const { me } = this.props;

    return (
      <HomeComponent
        me={me}
      />
    );
  }

}

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  me: PropTypes.object,
};

export default connect(mapStateToProps)(HomeContainer);
