import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import '../App.css';

import { simpleAction } from '../actions/simpleAction';

import Home from './Home.js';
import Dinners from './Dinners.js';
import Mission from './Mission.js';
import Application from './Application.js';
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

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired,
// };


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

  return (
   <Router>
    <div style={{position: 'fixed', overflow: 'scroll', height: '100%', width: '100%', margin: '0 auto'}}>
    <AppBar position="fixed">
      <Tabs value={value} onChange={this.handleChange}>
        <Tab label="Home" href="/"/>
        <Tab label="Dinners"/>
        <Tab label="Application"/>
        <Tab label="Mission"/>
        <Tab label="Our Team"/>
        <Tab label="Contact Us"/>
        <Tab label="FAQ and Policies"/>
        <Tab label="Topics"/>
      </Tabs>
    </AppBar>
      {value === 0 && <TabContainer></TabContainer>}
      {value === 1 && <TabContainer><Dinners/></TabContainer>}
      {value === 2 && <TabContainer><Application/></TabContainer>}
      {value === 3 && <TabContainer><Mission/></TabContainer>}
      {value === 4 && <TabContainer><Team/></TabContainer>}
      {value === 5 && <TabContainer><Contact/></TabContainer>}
      {value === 6 && <TabContainer><Faq/></TabContainer>}
      {value === 7 && <TabContainer><Topics/></TabContainer>}
    </div>
  </Router>
  );
 }
}

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
