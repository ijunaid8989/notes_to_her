import React, { Component } from 'react';
import './App.css';

import Login from "./components/Login"

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container textAlign='center'>
          <Login />
        </Container>
      </React.Fragment>
    )
  }
}

export default App;
