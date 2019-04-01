/* eslint-disable react/no-did-mount-set-state */
// @Flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileComponent from './ProfileComponent';
import * as actionCreators from '../actionCreators';
import * as selectors from '../selectors';

const mapStateToProps = state => ({
  memberProfile: selectors.memberProfile(state),
});

class ProfileContainer extends React.Component {

  async componentWillMount(): void {
    const { dispatch, params } = this.props;
    await dispatch(actionCreators.getMemberByUserId(params.userId));
  }

  render() {
    const { memberProfile } = this.props;

    return (
      <ProfileComponent
        memberProfile={memberProfile}
      />
    );
  }

}

ProfileContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  memberProfile: PropTypes.object,
};

export default connect(mapStateToProps)(ProfileContainer);
