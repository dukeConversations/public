import React, { Component } from 'react';
import api from 'duke-convos-api'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Dinners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dinners: []};
  }

  componentDidMount() {

    api.getDinners(
      // the data is returned as students

      dinners => {
        console.log(dinners)
        this.setState({
          dinners: dinners
        });
      },
      // an error is returned
      error => {
        console.error(error);
      }
    );
  }


  render() {

    return (
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100}}>
        <h2>Dinners</h2>
        {this.state.dinners.map(function(dinner){

            var catered = 'Yes';
            var transport = 'Yes';

            if (! dinner.catering) catered = 'No';
            if (! dinner.transportation) transport = 'No';

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
                      <Typography style={{paddingTop: 5}}>{dinner.timeStamp}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              </Paper>
            )

        })}
      </div>
    )
  }
}


export default Dinners;
