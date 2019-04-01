// @Flow
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography, Paper, Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Info';
import BirthdayIcon from '@material-ui/icons/Cake';
import MapIcon from '@material-ui/icons/Map';

class ProfileComponent extends React.Component {

  render() {
    const { memberProfile } = this.props;
    if (!memberProfile) return <center><CircularProgress /></center>;

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={8}>
            <Paper style={{ padding: 20, marginTop: 20, height: '100%' }} elevation={1}>
              <Typography variant="h4">
                {memberProfile.name} {memberProfile.familyname}
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={memberProfile.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BirthdayIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={`${memberProfile.age} ans`} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={memberProfile.city} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AboutIcon />
                  </ListItemIcon>
                  <ListItemText inset primary={memberProfile.about} />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={{ padding: 20, marginTop: 20, height: '100%' }} elevation={1}>
              <Typography variant="h4">
                Trajets actifs
              </Typography>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <MapIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Beg-Leguer -> Lannion" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MapIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Beg-Leguer -> Lannion" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MapIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Beg-Leguer -> Lannion" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <MapIcon />
                  </ListItemIcon>
                  <ListItemText inset primary="Beg-Leguer -> Lannion" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

      </div>
    );
  }
}

ProfileComponent.propTypes = {
  memberProfile: PropTypes.object,
};

export default ProfileComponent;
