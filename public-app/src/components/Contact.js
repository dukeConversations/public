import React, { Component } from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div style={{margin: '0 auto', marginTop: this.props.marginTop, width: this.props.width}}>
        <h2 style={{fontFamily: 'Patrick Hand SC', textAlign: 'center', fontSize: '2.3em'}}>Contact</h2>
        <h3>For Students</h3>
        <p>To enquire about joining the Duke Conversations Executive Team: click here.</p>
        <p>To recommend of a professor to host a Duke Conversations event: click here.</p>

        <h3>For Faculty</h3>
        <p>If you are interesting in hosting a dinner: please reach out to the Duke Conversations account.</p>

        <h3>For general inquiries</h3>
        <p>Send a note to Archana Ahlawat.</p>
      </div>
    )
  }
}

export default Contact;
