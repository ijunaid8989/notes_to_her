import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { isLoggedIn } from "./methods/auth"
import { Provider } from "react-redux"
import store from "./store"

import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard"

store.dispatch(isLoggedIn())

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
