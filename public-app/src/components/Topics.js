import React, { Component } from 'react';

class Topics extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{marginTop: this.props.marginTop}}>
        <h2 style={{textAlign: 'center'}}>Topics</h2>
      </div>
    )
  }
}

export default Topics;
