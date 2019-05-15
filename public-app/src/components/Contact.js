import React from 'react';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer.js';
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

  render() {

    const { classes } = this.props;

    return (
      <div style={{margin: '0 auto', marginTop: this.props.marginTop, width: this.props.width}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>Contact</h2>

        <Typography variant="h6" className={classes.heading}>For Students</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        To ask about joining the Duke Conversations Executive Team, please email Bo Carlson (rwc15 AT duke.edu).</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        To recommend a professor to host a Duke Conversation, email the Duke Conversations Account (duconversations AT duke.edu).</Typography>

        <Typography variant="h6" className={classes.heading}>For Professors</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        If you are interested in hosting a dinner, email the Duke Conversations account (duconversations AT duke.edu).</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        To provide feedback on a dinner that you have hosted previously, <a href="https://goo.gl/forms/S5irZBXeFlpFMB892" target={"_blank"}>click here</a>.</Typography>

        <Typography variant="h6" className={classes.heading}>For general inquiries</Typography>
        <Typography variant="body1" gutterBottom className={classes.body} style={{fontSize: this.props.fontSize}}>
        Send a note to Bo Carlson (rwc15 AT duke.edu).</Typography>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(styles)(Contact);
