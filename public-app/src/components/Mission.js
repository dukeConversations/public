import React, { Component } from 'react';

class Mission extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{marginTop: this.props.marginTop}}>
        <h2 style={{textAlign: 'center'}}>Mission</h2>
        <p>The mission of Duke Conversations is to create a dynamic community characterized by vigorous discussion of current educational and global issues. Using the inspiration and guidance provided by professors, Duke Conversations seeks to be a catalyst for meaningful dialogue that will heighten the interdisciplinary learning of faculty and students alike. Through a series of informal dinners that nominated faculty members host in their homes, Duke Conversations aims to enhance intellectual and ethical awareness in its participants for taking principled action in this rapidly transforming, multicultural world. </p>
      </div>
    )
  }
}

export default Mission;
