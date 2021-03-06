import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import Home from './Home.js';
import Dinners from './Dinners.js';
import Mission from './Mission.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Faq from './Faq.js';

const drawerWidth = 120;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    fontFamily: 'Overpass'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    fontFamily: 'Overpass'
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    fontFamily: 'Overpass'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  tab: {
    fontFamily: 'Overpass'
  }
});

class PersistentDrawerLeft extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, value: 0};
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChange = value => event => {
    this.setState({ value: value, open: false });
    console.log(value)
  };

  componentDidMount() {
    var pathname = window.location.href.split('/')[3];
    if (pathname === "home") {this.setState({ value: 0 });}
    if (pathname === "dinners") {this.setState({ value: 1 });}
    if (pathname === "mission") {this.setState({ value: 2 });}
    if (pathname === "contact") {this.setState({ value: 4 });}
    if (pathname === "faq") {this.setState({ value: 5 });}
    if (pathname === "team") {this.setState({ value: 3 });}
  }

  render() {
    const { classes, theme } = this.props;

    const menu = ['Home', 'Dinners', 'Mission', 'Team', 'Contact', 'FAQ'];

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{backgroundColor: '#001A57', color: '#0c9bf9'}}
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
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Duke Conversations
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}

          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List style={{fontFamily: 'Overpass'}}>

            {menu.map((text, index) => (
              <ListItem style={{fontFamily: 'Overpass'}} selected={this.state.value === index} button key={text} onClick={this.handleChange(index)}>
                <ListItemText primary={text} style={{fontFamily: 'Overpass'}} className={classes.tab}/>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: this.state.open,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.value === 0 && <Home marginTop={''}/>}
          {this.state.value === 1 && <Dinners mobile={this.props.mobile} marginTop={''}/>}
          {this.state.value === 2 && <Mission marginTop={''} width={'97%'} fontSize={'1.2em'}/>}
          {this.state.value === 3 && <Team marginTop={''}/>}
          {this.state.value === 4 && <Contact marginTop={''} width={'97%'} fontSize={'1.2em'}/>}
          {this.state.value === 5 && <Faq marginTop={''} width={'95%'}/>}
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
