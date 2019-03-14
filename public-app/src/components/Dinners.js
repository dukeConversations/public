import React from 'react';
import api from 'duke-convos-api'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from './Card.js';
import Footer from './Footer.js'

class Dinners extends React.Component {

  constructor(props) {
    super(props);
    this.state = {dinners: [], value: -1};
  }

  componentDidMount() {
    api.getDinners(
      dinners => {
        console.log(dinners);
        this.setState({dinners: dinners});
      },
      // an error is returned
      error => {
        console.error(error);
      }
    );
  }

  render() {

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if (this.state.dinners.length === 0) {
      return (
        <div style={{textAlign: 'center', marginTop: this.props.marginTop}}>
          <h2>Loading Dinners</h2>
        <CircularProgress />
        </div>
      )
    }

    return (
      <div style={{marginTop: this.props.marginTop}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>Upcoming Dinners</h2>

        {this.state.dinners.sort((a, b) => a.timeStamp - b.timeStamp).map(function(dinner, idx){

          var timestamp = new Date(dinner.timeStamp * 1000);
          var day = days[timestamp.getDay()];
          var date = timestamp.getDate();
          var month = months[timestamp.getMonth()];

          var date = day + ", " + month + " " + date;

          return (
            <div style={{maxWidth: 800, margin: '0 auto'}}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Card
                    mobile={this.props.mobile}
                    id={dinner.id}
                    firstName={dinner.professor.firstName}
                    lastName={dinner.professor.lastName}
                    title={dinner.professor.title}
                    picture={'http://i.imgur.com/w5rkSIj.jpg'}
                    topic={dinner.topic}
                    description={dinner.description}
                    timeStamp={date}/>
                </Grid>
              </Grid>
            </div>
          )

        }, this)}
        <Footer/>
      </div>
    )
  }
}


export default Dinners;
