import React, { Component } from 'react';
import logo from './logo.jpg';
import ReactPlayer from 'react-player';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{marginTop: this.props.marginTop, textAlign: 'center'}}>
        <ReactPlayer url='https://www.youtube.com/watch?v=qi1dxcVxyfc' playing controls loop style={{display:'inline-block'}}/>
        <h2 style={{textAlign: 'center', fontFamily: 'Patrick Hand SC', fontSize: '2.5em'}}>Sign up. Show up. Converse.</h2>
      </div>
    )
  }
}

export default Home;
