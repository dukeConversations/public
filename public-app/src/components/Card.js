import React from 'react';
import PropTypes from 'prop-types';
import api from 'duke-convos-api'
import axios from 'axios';

import {majorsDict, genderPronouns, gradYears} from '../dictionaries.js';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Collapse from '@material-ui/core/Collapse';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';

import NoteAdd from '@material-ui/icons/NoteAdd';
import LocalDining from '@material-ui/icons/LocalDining';

import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from './Snackbar.js';

const styles = theme => ({
  card: {
    maxWidth: 800,
  },
  title: {
    fontSize: '1.5em',
    fontFamily: 'Overpass',
    fontWeight: 'bold'
  },
  subheader: {
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  profName: {
    fontSize: '1.1em',
    fontFamily: 'Overpass'
  },
  profTitle: {
    fontFamily: 'Overpass',
    fontSize: '1em'
  },
  description: {
    fontFamily: 'Overpass',
    fontSize: '1em'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '45%',
  },
  interestField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '97%'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class DinnerCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {expanded: false, value: -1, appSuccess: false};
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkUndefined = this.checkUndefined.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClickOpen = idx => event => {
    this.setState({ dinnerID: idx });
  };

  handleClose() {
    this.setState({ dinnerID: -1, appSuccess: false});
  };

  formSubmit(interest, netID, dinnerID) {
      // create new dinner application
      axios.post('https://dukeconvo.herokuapp.com/application/register', {
        interest: interest,
        studentID: netID,
        dinnerID: dinnerID
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.setState({ dinnerID: -1, appSuccess: true});
  }

  checkUndefined(target, name) {

    var errorVar = "error" + name;

    if (typeof(target) == "undefined") {
      this.setState({
        [errorVar]: true,
      });
      return true;
    }
    else return false;
  }

  handleChange = name => event => {

    var errorVar = "error" + name;

    if (event.target.value.toString().trim() === '') {
      this.setState({
        [errorVar]: true,
      });
    }
    else {
      this.setState({
        [errorVar]: false,
      });
    }

    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit() {

    if (! (this.checkUndefined(this.state.firstName, 'firstName')
    || this.checkUndefined(this.state.lastName, 'lastName')
    || this.checkUndefined(this.state.netID, 'netID')
    || this.checkUndefined(this.state.uniqueID, 'uniqueID')
    || this.checkUndefined(this.state.major, 'major')
    || this.checkUndefined(this.state.graduationYear, 'graduationYear')
    || this.checkUndefined(this.state.genderPronouns, 'genderPronouns')
    || this.checkUndefined(this.state.interest, 'interest')) ) {

      api.updateStudent(
        this.state.netID,
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          uniqueID: this.state.uniqueID,
          netID: this.state.netID,
          major: this.state.major,
          phoneNumber: this.state.phoneNumber,
          graduationYear: this.state.graduationYear,
          genderPronouns: this.state.genderPronouns
        },
        // success callback
        student => {
          console.log(student);
          console.log(this.state.interest);
          console.log(this.state.netID);
          console.log("dinner id is " + this.state.dinnerID)

          this.formSubmit(this.state.interest, this.state.netID, this.state.dinnerID);
        },
        // an error is returned
        error => {
          console.error(error);
        }
      );

    }
  }

  render() {
    const { classes } = this.props;
    const value = this.state.dinnerID;
    const majors = Object.values(majorsDict());
    const genders = Object.values(genderPronouns());
    const graduationYears = gradYears();

    return (
      <div>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.appSuccess}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <MySnackbarContentWrapper
          onClose={this.handleClose}
          variant="success"
          message="Application submitted!"
        />
      </Snackbar>

      <Card className={classes.card}>
        <CardHeader
          classes={{
            title: classes.title,
            subheader: classes.subheader,
          }}
          avatar={
            <LocalDining/>
          }
          action={
            <Button onClick={this.handleClickOpen(this.props.id)} size="small" variant="contained">
              <NoteAdd style={{marginRight: 5}}/>
              Apply
            </Button>
          }
          title={this.props.topic}
          subheader={this.props.timeStamp}
        />
        <CardContent style={{paddingTop: 0}}>
          <Grid container spacing={12}>
            <Grid item xs={4}>
              <CardMedia
                className={classes.media}
                image="http://i.imgur.com/w5rkSIj.jpg"
                title={this.props.firstName}
                style={{marginBottom: 5}}
              />
            </Grid>
            <Grid item xs={8} sm container>
            <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
              <Typography className={classes.profName} variant="subtitle2" style={{fontWeight: 'bold'}} >
                {this.props.firstName} {this.props.lastName}
              </Typography>
              <Typography className={classes.profTitle}>
                {this.props.title}
              </Typography>

              <Button
              style={{marginLeft: -13}}
              size="big"
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more">
                <ExpandMoreIcon className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })} style={{paddingLeft: -10, marginRight: 2}}/>
                Learn More
              </Button>

            </CardContent>
            </Grid>
          </Grid>
        </CardContent>

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className={classes.description}>
              {this.props.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Dialog
        open={value === this.props.id}
        scroll="body"
        onClose={this.handleClose}
        aria-labelledby={this.props.id}
        fullScreen={this.props.mobile}

        maxWidth={'sm'}
      >
        <DialogTitle id={this.props.id}>Application for {this.props.topic}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            className={classes.textField}
            required
            error={this.state.errorfirstName}
            onChange={this.handleChange('firstName')}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last Name"
            className={classes.textField}
            required
            error={this.state.errorlastName}
            onChange={this.handleChange('lastName')}
          />
          <TextField
            margin="dense"
            id="netID"
            label="NetID"
            className={classes.textField}
            required
            error={this.state.errornetID}
            onChange={this.handleChange('netID')}
          />
          <TextField
            margin="dense"
            id="uniqueID"
            label="UniqueID"
            className={classes.textField}
            required
            error={this.state.erroruniqueID}
            onChange={this.handleChange('uniqueID')}
          />

          <TextField
            id="major"
            select
            label="Major"
            className={classes.textField}
            value={this.state.major}
            onChange={this.handleChange('major')}
            required
            error={this.state.errormajor}
            margin="dense"
          >
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          {majors.map(function(major,idx) {
          if (idx > 0) return (<MenuItem key={idx} value={idx}>{major}</MenuItem>) })}
          </TextField>

          <TextField
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            className={classes.textField}
            onChange={this.handleChange('phoneNumber')}
            type="number"
          />

          <TextField
            id="graduationYear"
            select
            label="Graduation Year"
            className={classes.textField}
            onChange={this.handleChange('graduationYear')}
            required
            value={this.state.graduationYear}
            error={this.state.errorgraduationYear}
            margin="dense"
          >
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          {graduationYears.map(function(gy,idx) {
          if (idx > 0) return (<MenuItem key={idx} value={idx}>{gy}</MenuItem>) })}
          </TextField>

          <TextField
            id="genderPronouns"
            select
            label="Gender Pronouns"
            className={classes.textField}
            onChange={this.handleChange('genderPronouns')}
            required
            value={this.state.genderPronouns}
            error={this.state.errorgenderPronouns}
            margin="dense"
          >
          <MenuItem value="0">
            <em>None</em>
          </MenuItem>
          {genders.map(function(gp,idx) {
          if (idx > 0) return (<MenuItem key={idx} value={idx}>{gp}</MenuItem>) })}
          </TextField>

          <TextField
            multiline
            variant="outlined"
            margin="dense"
            id="interest"
            label="Why do you want to attend this dinner?"
            className={classes.interestField}

            required
            error={this.state.errorinterest}
            onChange={this.handleChange('interest')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Proceed
          </Button>
        </DialogActions>

      </Dialog>

      </div>
    );
  }
}

DinnerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DinnerCard);
