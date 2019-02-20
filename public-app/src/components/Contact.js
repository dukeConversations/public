import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer.js';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  body: {
    lineHeight: '2.0em',
    fontFamily: 'Overpass'
  },
  heading: {
    fontFamily: 'Overpass',
    fontSize: '1.6em',
    fontWeight: 'bold'
  }
});

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <div style={{margin: '0 auto', marginTop: this.props.marginTop, width: this.props.width}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>Contact</h2>

        <Typography variant="h6" className={classes.heading}>For Students</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        To enquire about joining the Duke Conversations Executive Team: click here.</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        To recommend of a professor to host a Duke Conversations event: click here.</Typography>

        <Typography variant="h6" className={classes.heading}>For Faculty</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        If you are interesting in hosting a dinner: please reach out to the Duke Conversations account.</Typography>

        <Typography variant="h6" className={classes.heading}>For general inquiries</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        Send a note to Archana Ahlawat.</Typography>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(styles)(Contact);
