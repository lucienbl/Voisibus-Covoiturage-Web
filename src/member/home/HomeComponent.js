// @Flow
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography, Paper, Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class HomeComponent extends React.Component {

  render() {
    const { me, unreadMessages, expandedMessageIndex, handleChangeExpandedMessageIndex, welcomeMessage } = this.props;
    if (!me) return <center><CircularProgress /></center>;

    return (
      <div>
        <Typography variant="h4">
          {welcomeMessage}
        </Typography>

        <Grid container spacing={16}>
          <Grid item xs={8}>
            <Paper style={{ padding: 20, marginTop: 20 }} elevation={1}>
              <Typography variant="h4">
                Informations
              </Typography>
              {unreadMessages.length <= 0 &&
                <Typography variant="h6">
                  Rien de neuf!
                </Typography>
              }
              {unreadMessages.map((message, index) => (
                <ExpansionPanel key={message.id} expanded={expandedMessageIndex === index} onChange={() => handleChangeExpandedMessageIndex(index)}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{message.title}</Typography>
                    <div style={{ flexGrow: 1 }} />
                    <Typography style={{ color: '#AAA', marginTop: 5 }}>Le <i>{new Date(message.creationTime).toLocaleString()}</i></Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
                    <Typography>
                      {message.message}
                    </Typography>
                    <Typography style={{ color: '#AAA', textAlign: 'right' }}>De <i>{message.authorName}</i></Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={{ padding: 20, marginTop: 20 }} elevation={1}>
              <Typography variant="h4">
                Mes trajets
              </Typography>
              <Typography variant="h6">
                Pas de trajet en vue!
              </Typography>
            </Paper>
          </Grid>
        </Grid>

      </div>
    );
  }
}

HomeComponent.propTypes = {
  me: PropTypes.object,
  unreadMessages: PropTypes.array.isRequired,
  expandedMessageIndex: PropTypes.number.isRequired,
  handleChangeExpandedMessageIndex: PropTypes.func.isRequired,
  welcomeMessage: PropTypes.string.isRequired
};

export default HomeComponent;
