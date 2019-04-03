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
  unreadMessages: selectors.unreadMessages(state)
});

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expandedMessageIndex: 0,
      welcomeMessage: this._getRandomWelcomeMessage(props.me.name)
    };
  }

  async componentWillMount(): void {
    const { dispatch } = this.props;
    await dispatch(actionCreators.getMe());
    await dispatch(actionCreators.getUnreadMessages());
  }

  _handleChangeExpandedMessageIndex = (index: number) => {
    this.setState({ expandedMessageIndex: index });
  };

  _getRandomWelcomeMessage = (name: string) => {
    const messages = ['Bienvenue', 'Salut', 'Bonjour', 'Vous voilà de retour', 'Comment allez-vous', 'Quel plaisir de vous revoir'];
    return `${messages[Math.floor(Math.random() * messages.length)]}, ${name}!`;
  };

  render() {
    const { me, unreadMessages } = this.props;
    const { expandedMessageIndex, welcomeMessage } = this.state;

    return (
      <HomeComponent
        me={me}
        unreadMessages={unreadMessages}
        expandedMessageIndex={expandedMessageIndex}
        handleChangeExpandedMessageIndex={this._handleChangeExpandedMessageIndex}
        welcomeMessage={welcomeMessage}
      />
    );
  }

}

HomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  me: PropTypes.object,
  unreadMessages: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(HomeContainer);
