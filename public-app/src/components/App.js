import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Drawer from './Drawer.js';

import '../App.css';

import { simpleAction } from '../actions/simpleAction';

import Home from './Home.js';
import Dinners from './Dinners.js';
import Mission from './Mission.js';
import Team from './Team.js';
import Contact from './Contact.js';
import Faq from './Faq.js';

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

function isMobileDevice() {
    // return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

    var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  return (typeof window.orientation !== "undefined") || isMobile.any();
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

  componentDidMount() {
    console.log(window.location.pathname.split('/')[2])
    var pathname = window.location.pathname.split('/')[1];
    if (pathname === "home") {this.setState({ value: 0 });}
    if (pathname === "dinners") {this.setState({ value: 1 });}
    if (pathname === "mission") {this.setState({ value: 2 });}
    if (pathname === "contact") {this.setState({ value: 3 });}
    if (pathname === "faq") {this.setState({ value: 4 });}
    if (pathname === "team") {this.setState({ value: 5 });}
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
           <Tab style={{fontFamily: 'Overpass', fontSize: '0.9em'}} label="Home" />
           <Tab style={{fontFamily: 'Overpass', fontSize: '0.9em'}} label="Dinners" />
           <Tab style={{fontFamily: 'Overpass', fontSize: '0.9em'}} label="Who We Are" />
           <Tab style={{fontFamily: 'Overpass', fontSize: '0.9em'}} label="Contact Us" />
           <Tab style={{fontFamily: 'Overpass', fontSize: '0.9em'}} label="FAQ and Policies" />
           {/*<Tab style={{fontFamily: 'Overpass', fontSize: '0.9em'}} label="Our Team"/>*/}

         </Tabs>
       </AppBar>
       {value === 0 && <Home marginTop={50}/>}
       {value === 1 && <Dinners mobile={false} marginTop={50}/>}
       {value === 2 && <Mission marginTop={50} width={'75%'} fontSize={'1.2em'}/>}
       {value === 3 && <Contact marginTop={50} width={'72%'} fontSize={'1.2em'}/>}
       {value === 4 && <Faq marginTop={50} width={'75%'}/>}
       {value === 5 && <Team marginTop={50}/>}

     </div>


  </Router>
  );
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
