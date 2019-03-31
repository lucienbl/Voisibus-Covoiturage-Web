// @Flow
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography, Paper, Grid } from '@material-ui/core';

class HomeComponent extends React.Component {

  _getRandomWelcomeMessage = (name: string) => {
    const messages = ['Bienvenue', 'Salut', 'Bonjour', 'Vous voilà de retour', 'Comment allez-vous', 'Quel plaisir de vous revoir'];
    return `${messages[Math.floor(Math.random() * messages.length)]}, ${name}!`;
  };

  render() {
    const { me } = this.props;
    if (!me) return <center><CircularProgress /></center>;

    return (
      <div>
        <Typography variant="h4">
          {this._getRandomWelcomeMessage(me.name)}
        </Typography>

        <Grid container spacing={16}>
          <Grid item xs={8}>
            <Paper style={{ padding: 20, marginTop: 20 }} elevation={1}>
              <Typography variant="h4">
                Informations
              </Typography>
              <Typography variant="h6">
                Rien de neuf!
              </Typography>
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
};

export default HomeComponent;
