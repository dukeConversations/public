import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    return (
      <div style={{margin: '0 auto', marginTop: this.props.marginTop, width: this.props.width}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>FAQ and Policies</h2>

        <h3>Policies</h3>

        <div>
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}

        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{fontFamily: 'Overpass'}}>Cancellation</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
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
            <Typography>Transportation</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Transportation provided to the dinner will depart the Science Center Circle no later than 15 minutes before the starting time of the event itself. If you are late, you will be responsible for your own transportation
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Code of Conduct</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Participating in a Duke Conversations event is a privilege afforded to Duke students by the generosity of Duke professor's and by the Office of Undergraduate Education. Participants must not only be respectful to the Professors themselves, but also to each other and each other's perspectives.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        </div>
        <h3>FAQ</h3>
        <ExpansionPanel
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>WHEN WILL I BE NOTIFIED IF I HAVE BEEN ACCEPTED TO ATTEND A DINNER?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Acceptances will be sent out each Sunday afternoon
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel5'}
          onChange={this.handleChange('panel5')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>HOW DO I KNOW IF I WAS ACCEPTED TO ATTEND A DINNER THAT I SIGNED UP FOR?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Each dinner has a limited number of students who can attend. If you are selected for a dinner, you will be notified . Otherwise, we unfortunately did not have enough spots at that particular event for everyone to attend and your name was placed on the waitlist
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel6'}
          onChange={this.handleChange('panel6')}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>HOW DO I GET OFF THE WAITLIST FOR A DINNER?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
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
            <Typography>WHAT IS THE SELECTION PROCESS LIKE FOR A DINNER?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Duke Conversations believes that conversations are the most meaningful and engaging when participants of all years, areas of study, and personal identity are represented. Thus, in addition to ensuring that students who have not previously attended a conversation are able participate, the Duke Conversations Executive Team carefully reviews and selects students who are both different from each other and have demonstrated interest in the professor or topic.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    );
  }
}

export default Faq;
