import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer.js';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body: {
    lineHeight: '2.5em',
    marginBottom: '20px',
    fontFamily: 'Overpass'
  }
});

class Mission extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <div style={{margin: '0 auto', marginTop: this.props.marginTop, width: this.props.width}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>Mission</h2>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>The mission of Duke Conversations is to create a dynamic community characterized by vigorous discussion of current educational and global issues. Using the inspiration and guidance provided by professors, Duke Conversations seeks to be a catalyst for meaningful dialogue that will heighten the interdisciplinary learning of faculty and students alike. Through a series of informal dinners that nominated faculty members host in their homes, Duke Conversations aims to enhance intellectual and ethical awareness in its participants for taking principled action in this rapidly transforming, multicultural world. </Typography>
        <Footer/>

      </div>
    )
  }
}

export default withStyles(styles)(Mission);
