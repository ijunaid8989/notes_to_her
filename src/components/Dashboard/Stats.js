import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from "./Navigation"

import {
  Container,
  Loader,
  Button,
  Menu
} from 'semantic-ui-react'

class Stats extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
    this.getBackToNotes = this.getBackToNotes.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
    console.log("hhhh")
  }

  getBackToNotes() {
    this.props.history.push("/")
  }

  render() {
    return (
      <Container textAlign='center'>
        <button className="ui icon left labeled button" onClick={this.getBackToNotes}>
          <i aria-hidden="true" className="left arrow icon"></i>
          Back
        </button>
        <Container textAlign='justified'>
        </Container>
      </Container>
    );
  }
}

Stats.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  notes: state.notes
});

export default connect(mapStateToProps, { })(
  withRouter(Stats)
);
