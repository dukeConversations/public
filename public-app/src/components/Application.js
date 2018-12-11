import React, { Component } from 'react';
import axios from 'axios';
import { ReactTypeformEmbed } from 'react-typeform-embed';

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: '', netID: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  formHandler(formFields) {
   axios.post('/api/register', formFields)
     .then(function(response){
       console.log(response);
       //Perform action based on response
   })
     .catch(function(error){
       console.log(error);
       //Perform action based on error
     });
  }

  render() {

    const divStyle = {
      margin: '50px',
    };

    return <ReactTypeformEmbed style={divStyle} url={'https://aletheatoh.typeform.com/to/yjTBCz'}/>
  }
}

export default Application;
