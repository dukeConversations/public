import React from 'react';
import api from 'duke-convos-api'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './Card.js';

class Dinners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dinners: [], value: -1};
  }

  componentDidMount() {
    api.getDinners(

      dinners => {
        console.log(dinners);
        this.setState({dinners: [{"topic": "Topic 1", "timeStamp": "timeStamp", "description": "blah", "professor": {"firstName": "Alethea", "lastName": "Toh", "title": "Professor"}},{"topic": "Topic 2", "timeStamp": "timeStamp", "description": "blah", "professor": {"firstName": "Alethea", "lastName": "Toh", "title": "Professor"}}], dinnerID: -1});
      },
      // an error is returned
      error => {
        console.error(error);
      }
    );
  }

  render() {

    if (this.state.dinners.length === 0) {
      return (
        <div style={{textAlign: 'center', marginTop: this.props.marginTop}}>
          <h2>Upcoming dinners</h2>
        <CircularProgress />
        </div>
      )
    }

    return (
      <div style={{marginTop: this.props.marginTop}}>
        <h2 style={{textAlign: 'center'}}>Upcoming dinners</h2>
        {this.state.dinners.map(function(dinner, idx){
            return (
              <div style={{maxWidth: 800, margin: '0 auto'}}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Card
                  id={idx}
                  firstName={dinner.professor.firstName}
                  lastName={dinner.professor.lastName}
                  title={dinner.professor.title}
                  picture={'http://i.imgur.com/w5rkSIj.jpg'}
                  topic={dinner.topic}
                  description={dinner.description}
                  timeStamp={dinner.timeStamp}/>
                </Grid>
              </Grid>
              </div>

            )

        }, this)}

      </div>
    )
  }
}


export default Dinners;
