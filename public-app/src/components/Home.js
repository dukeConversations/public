import React, { Component } from 'react';
import logo from './images/logo.jpg';
import Footer from './Footer.js';
import ReactPlayer from 'react-player';
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
          <div><img src={logo} alt={"logo"} width={'80%'}/></div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 1224px)">
          <div><img src={logo} alt={"logo"} width={'40%'}/></div>
        </MediaQuery>
        {/*<ReactPlayer url='https://www.youtube.com/watch?v=qi1dxcVxyfc' playing controls loop style={{display:'inline-block'}}/>*/}
        <h2 style={{textAlign: 'center', fontFamily: 'Patrick Hand SC', fontSize: '2.5em'}}>Sign up. Show up. Converse.</h2>
        <Footer/>

      </div>
    )
  }
}

export default Home;
