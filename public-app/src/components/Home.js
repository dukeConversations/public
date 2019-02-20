import React, { Component } from 'react';
import logo from './images/logo.jpg';
import Footer from './Footer.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{marginTop: this.props.marginTop, textAlign: 'center'}}>
        <div><img src={logo} alt={"logo"} width={'40%'}/></div>
        <h2 style={{textAlign: 'center', fontFamily: 'Patrick Hand SC', fontSize: '2.5em'}}>Sign up. Show up. Converse.</h2>
        <Footer/>

      </div>
    )
  }
}

export default Home;
