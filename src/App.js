import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./components/Dashboard"

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
