import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import Drawer from './Drawer.js';

import '../App.css';

import { simpleAction } from '../actions/simpleAction';

import Home from './Home.js';
import Dinners from './Dinners.js';
import Mission from './Mission.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Faq from './Faq.js';
import Topics from './Topics.js';

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

class App extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  simpleAction = (event) => {
   this.props.simpleAction();
  }

 render() {

  const { value } = this.state;

  if (isMobileDevice()) {
    return (<Drawer mobile={true} />)
  }

  else return (
   <Router>
    <div style={{height: '100%', width: '100%', margin: '0 auto'}}>
    <AppBar position="fixed" style={{backgroundColor: '#001A57', color: '#0c9bf9'}}>
      <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
        <Tab label="Home"/>
        <Tab label="Dinners"/>
        <Tab label="Mission"/>
        <Tab label="Our Team"/>
        <Tab label="Contact Us"/>
        <Tab label="FAQ and Policies"/>
      </Tabs>
    </AppBar>
      {value === 0 && <Home marginTop={50}/>}
      {value === 1 && <Dinners mobile={false} marginTop={50}/>}
      {value === 2 && <Mission marginTop={50}/>}
      {value === 3 && <Team marginTop={50}/>}
      {value === 4 && <Contact marginTop={50}/>}
      {value === 5 && <Faq marginTop={50}/>}
    </div>

  </Router>
  );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
