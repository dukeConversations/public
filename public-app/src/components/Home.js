import React, { Component } from 'react';
import logo from './logo.jpg';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{marginTop: this.props.marginTop, textAlign: 'center'}}>
        <div><img src={logo} alt={"logo"} width={'40%'}/></div>
        <h2 style={{textAlign: 'center'}}>Sign up. Show up. Converse.</h2>
      </div>
    )
  }
}

export default Home;
