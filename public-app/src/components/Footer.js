import React, { Component } from 'react';
import logo from './images/logo.jpg';
import facebook from './images/facebook.svg';
import instagram from './images/instagram.svg';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  logo: {
    width: '25px',
    display: 'inline',
    margin: '3px',
    textAlign: 'center'
  }
});

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;
    var year = (new Date()).getFullYear();

    return (
      <div style={{marginTop: '20px',marginBottom:'10px',marginHorizontal: '0 auto',textAlign: 'center'}}>
        <div className={classes.logo}>
          <a href={"https://www.facebook.com/DukeConversations/"} target={"_blank"}><img src={facebook} alt={"facebook"} width={'28px'}/></a>
        </div>
        <div className={classes.logo}>
          <a href={"https://www.instagram.com/dukeconversations/?hl=en"} target={"_blank"}><img src={instagram} alt={"instagram"} width={'28px'}/></a>
        </div>
        <div style={{bottom:0, fontFamily: 'Overpass'}}>Duke Conversations {year} ©</div>
      </div>
        )
  }
}

export default withStyles(styles)(Footer);
