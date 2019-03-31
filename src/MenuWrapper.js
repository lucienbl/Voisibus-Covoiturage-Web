/* eslint-disable import/first */
// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { UrlBuilder } from './utils';
import classNames from 'classnames';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CancelIcon from '@material-ui/icons/Cancel';
import HomeIcon from '@material-ui/icons/Home';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as selectors from './member/selectors';
import * as homeActionCreators from './member/actionCreators';

const DarkAppTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const LightAppTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

const mapStateToProps = state => ({
  darkTheme: selectors.darkTheme(state),
});

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class MenuWrapper extends React.Component {

  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  _handleClickSignOut = () => {
    firebase.auth().signOut().then(() => {
      browserHistory.replace(UrlBuilder.login());
    });
  }

  _handleClickSwitchTheme = async () => {
    const { dispatch, darkTheme } = this.props;
    await dispatch(homeActionCreators.setDarkTheme(!darkTheme));
  }

  render() {
    const { classes, children, theme, darkTheme } = this.props;
    return (
      <MuiThemeProvider theme={darkTheme ? DarkAppTheme : LightAppTheme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar disableGutters={!this.state.open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, {
                  [classes.hide]: this.state.open,
                })}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap>
                Voisibus Covoiturage
              </Typography>

              <div style={{ flexGrow: 1 }} />

              <IconButton
                color="inherit"
                onClick={this._handleClickSwitchTheme}
                style={{ marginRight: 10 }}
              >
                {darkTheme ? <InvertColorsOffIcon/> : <InvertColorsIcon/>}
              </IconButton>

            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className={classNames(classes.drawer, {
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            })}
            classes={{
              paper: classNames({
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              }),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link to={UrlBuilder.member()} activeClassName="active">
                <ListItem button>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={this._handleClickSignOut}>
                <ListItemIcon><CancelIcon /></ListItemIcon>
                <ListItemText primary="Se deconnecter" />
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

MenuWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  darkTheme: PropTypes.bool.isRequired
};

const ThemedMenuWrapper = withStyles(styles, { withTheme: true })(MenuWrapper);
export default connect(mapStateToProps)(ThemedMenuWrapper);
