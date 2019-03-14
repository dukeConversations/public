import React, { Component } from 'react';
import logo from './images/logo.jpg';
import Footer from './Footer.js';

import MediaQuery from "react-responsive";

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const width = '40%';

    return (
      <div style={{marginTop: this.props.marginTop, textAlign: 'center'}}>
        <MediaQuery query="(max-device-width: 1224px)">
          <div><img src={logo} alt={"logo"} width={'50%'}/></div>
          <iframe width="345" height="300" src="https://www.youtube.com/embed/HNkkqpDpAts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <div><img src={logo} alt={"logo"} width={'40%'}/></div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/HNkkqpDpAts" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </MediaQuery>
        <h2 style={{textAlign: 'center', fontFamily: 'Patrick Hand SC', fontSize: '2.5em'}}>Sign up. Show up. Converse.</h2>
        <Footer/>

      </div>
    )
  }
}

export default Home;
