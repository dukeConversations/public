import React from 'react';

class Team extends React.Component {

  render() {

    return (
      <div style={{marginTop: this.props.marginTop}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>Team</h2>
      </div>
    )
  }
}

export default Team;
