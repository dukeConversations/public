import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from './Footer.js';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

const styles = theme => ({
  body: {
    fontFamily: 'Overpass'
  },
  heading: {
    fontFamily: 'Overpass',
    fontSize: '1.4em',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  category: {
    fontFamily: 'Overpass',
    fontSize: '1em',
  },
});

class Faq extends React.Component {
  state = {
    expanded: '',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    const { classes } = this.props;

    return (
      <div style={{margin: '0 auto', marginTop: this.props.marginTop, width: this.props.width}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>FAQ and Policies</h2>

        <Typography variant="h6" className={classes.heading}>Policies</Typography>
        <div>
          <ExpansionPanel
            square
            expanded={expanded === 'panel1'}
            onChange={this.handleChange('panel1')}

          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.category}>Cancellation</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                If you sign up for, and are accepted to a dinner, but are unable to attend, you must give the Duke Conversations Executive member responsible for your dinner notice at least <b>1 DAY IN ADVANCE</b>. Otherwise, you will be prohibited from attending any Duke Conversations event for the remainder of the semester. ​
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === 'panel2'}
            onChange={this.handleChange('panel2')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.category}>Transportation</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                Transportation provided to the dinner will depart the Science Center Circle no later than 15 minutes before the starting time of the event itself. If you are late, you will be responsible for your own transportation.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            square
            expanded={expanded === 'panel3'}
            onChange={this.handleChange('panel3')}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.category}>Code of Conduct</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className={classes.body}>
                Participating in a Duke Conversations event is a privilege afforded to Duke students by the generosity of Duke professor's and by the Office of Undergraduate Education. Participants must not only be respectful to the Professors themselves, but also to each other and each other's perspectives.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </div>

        <Typography variant="h6" className={classes.heading} style={{marginTop: '10px'}}>FAQ</Typography>
        <ExpansionPanel
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.category}>When will I be notified if I have been accepted to attend a dinner?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              Acceptances will be sent out each Sunday afternoon.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel5'}
          onChange={this.handleChange('panel5')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.category}>How do I know if I was accepted to attend a dinner that I signed up for?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              Each dinner has a limited number of students who can attend. If you are selected for a dinner, you will be notified . Otherwise, we unfortunately did not have enough spots at that particular event for everyone to attend and your name was placed on the waitlist.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel6'}
          onChange={this.handleChange('panel6')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.category}>How do I get off the waitlist for a dinner?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              If accepted participants can no longer attend a particular dinner, we will notify students on the waitlist via text message or email.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel7'}
          onChange={this.handleChange('panel7')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.category}>What is the selection process like for a dinner?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.body}>
              Duke Conversations believes that conversations are the most meaningful and engaging when participants of all years, areas of study, and personal identity are represented. Thus, in addition to ensuring that students who have not previously attended a conversation are able participate, the Duke Conversations Executive Team carefully reviews and selects students who are both different from each other and have demonstrated interest in the professor or topic.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Footer/>

      </div>
    );
  }
}

export default withStyles(styles)(Faq);
