/* eslint-disable react/no-did-mount-set-state,jsx-a11y/label-has-for */
// @flow

import React from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};

class LoginComponent extends React.Component {

  componentWillMount(): void {
    const { handleSuccess } = this.props;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((accessToken) => {
          handleSuccess(accessToken);
        });
      }
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    );
  }

}

LoginComponent.propTypes = {
  handleSuccess: PropTypes.func.isRequired,
};

export default LoginComponent;
