import React, { Component } from 'react';
import api from 'duke-convos-api'
import axios from 'axios';

import {majorsDict, genderPronouns} from '../dictionaries.js';

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
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';

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

      dinners => {
        console.log(dinners)
        this.setState({dinners: [{"topic": "Topic", "timeStamp": "timeStamp", "description": "blah", "professor": {"firstName": "Alethea", "lastName": "Toh", "title": "Professor"}}], dinnerID: -1});
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
    this.setState({ dinnerID: -1 });
  }


  render() {

    const value = this.state.dinnerID;
    const majors = Object.values(majorsDict());
    const genders = Object.values(genderPronouns());

    if (this.state.dinners.length == 0) {
      return (
        <div style={{marginTop: 50, marginLeft: 100, marginRight: 100, textAlign: 'center'}}>
          <h2 style={{textAlign: 'left'}}>Dinners</h2>
        <CircularProgress style={{margin: '0 auto'}}/>
        </div>
      )
    }

    return (
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100}}>
        <h2>Dinners</h2>

        {this.state.dinners.map(function(dinner, idx){

            return (
              <Paper style={{width: 800, margin: '0 auto', marginTop: 10, padding: 25}}>
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
                        scroll="paper"
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
                            margin="dense"
                            id="lastName"
                            label="Last Name"
                            fullWidth
                            onChange={this.handleChange('lastName')}
                          />
                          <TextField
                            margin="dense"
                            id="netID"
                            label="NetID"
                            fullWidth
                            onChange={this.handleChange('netID')}
                          />
                          <TextField
                            margin="dense"
                            id="uniqueID"
                            label="UniqueID"
                            fullWidth
                            onChange={this.handleChange('uniqueID')}
                          />
                          <FormControl>
                          <InputLabel htmlFor="major">Major</InputLabel>
                          <Select
                            value={this.state.major}
                            onChange={this.handleChange('major')}
                            inputProps={{
                              name: 'major',
                              id: 'major',
                            }}
                          >
                            <MenuItem value="0">
                              <em>None</em>
                            </MenuItem>
                            {majors.map(function(major,idx) {
                            if (idx > 0) return (<MenuItem value={idx}>{major}</MenuItem>) })}
                          </Select>
                          </FormControl>
                          <TextField
                            margin="dense"
                            id="phoneNumber"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            onChange={this.handleChange('phoneNumber')}
                          />
                          <TextField
                            margin="dense"
                            id="graduationYear"
                            label="Graduation Year"
                            type="number"
                            fullWidth
                            onChange={this.handleChange('graduationYear')}
                          />

                          <FormControl>
                          <InputLabel htmlFor="genderPronouns">Gender Pronouns</InputLabel>
                          <Select
                            value={this.state.genderPronouns}
                            onChange={this.handleChange('genderPronouns')}

                            inputProps={{
                              name: 'genderPronouns',
                              id: 'genderPronouns',
                            }}
                          >
                            <MenuItem value="0">
                              <em>None</em>
                            </MenuItem>
                            {genders.map(function(gp,idx) {
                            if (idx > 0) return (<MenuItem value={idx}>{gp}</MenuItem>) })}
                          </Select>
                          </FormControl>
                          <TextField
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
