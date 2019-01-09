import React, { Component } from 'react';
import api from 'duke-convos-api'
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Dinners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dinners: [], value: -1};
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    api.getDinners(
      // the data is returned as students
      dinners => {
        console.log(dinners)
        this.setState({dinners: dinners, dinnerID: -1});

      },
      // an error is returned
      error => {
        console.error(error);
      }
    );
  }

  handleClickOpen = idx => event => {
    this.setState({ dinnerID: idx });
  };

  handleClose() {
    this.setState({ dinnerID: -1 });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit() {
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
        console.log(this.state.dinnerID)

        // create new dinner application
        axios.post('https://dukeconvo.herokuapp.com/application/register', {
          interest: this.state.interest,
          studentID: this.state.netID,
          dinnerID: this.state.dinnerID
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // an error is returned
      error => {
        console.error(error);
      }
    )
  }


  render() {

    const value = this.state.dinnerID;

    return (
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100}}>
        <h2>Dinners</h2>
        {this.state.dinners.map(function(dinner, idx){

            return (
              <Paper style={{width: 600, margin: '0 auto', marginTop: 10, padding: 25}}>
                <Grid container spacing={16}>
                <Grid item xs={4}>
                  <Typography>-- Picture --</Typography>
                  <Typography>{dinner.professor.firstName} {dinner.professor.lastName} </Typography>
                  <Typography>{dinner.professor.title}</Typography>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subheading">
                        {dinner.topic}
                      </Typography>
                      <Typography color="textSecondary">{dinner.address}</Typography>
                      <ExpansionPanel>
                        <ExpansionPanelSummary style={{paddingLeft: 8}} expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="heading">Description</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            {dinner.description}
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <Typography>{dinner.timeStamp}</Typography>

                      <Button onClick={this.handleClickOpen(dinner.id)}>Apply</Button>
                      <Dialog
                        open={value == dinner.id}
                        onClose={this.handleClose}
                        aria-labelledby={idx}
                      >
                        <DialogTitle id={dinner.id}>Application for {dinner.topic}</DialogTitle>
                        <DialogContent>
                          <TextField
                            autoFocus
                            margin="dense"
                            id="firstName"
                            label="First Name"
                            fullWidth
                            onChange={this.handleChange('firstName')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="lastName"
                            label="Last Name"
                            fullWidth
                            onChange={this.handleChange('lastName')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="netID"
                            label="NetID"
                            fullWidth
                            onChange={this.handleChange('netID')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="uniqueID"
                            label="UniqueID"
                            fullWidth
                            onChange={this.handleChange('uniqueID')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="major"
                            label="Major"
                            fullWidth
                            onChange={this.handleChange('major')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="phoneNumber"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            onChange={this.handleChange('phoneNumber')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="graduationYear"
                            label="Graduation Year"
                            type="number"
                            fullWidth
                            onChange={this.handleChange('graduationYear')}
                          />
                          <TextField
                            autoFocus
                            margin="dense"
                            id="genderPronouns"
                            label="Gender Pronouns"
                            fullWidth
                            onChange={this.handleChange('genderPronouns')}
                          />
                          <TextField
                            autoFocus
                            multiline
                            margin="dense"
                            id="interest"
                            label="Why do you want to attend this dinner?"
                            fullWidth
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

                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              </Paper>
            )

        }, this)}
      </div>
    )
  }
}


export default Dinners;
