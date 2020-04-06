import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navigation from "./Navigation"

import {
  Container,
  Loader
} from 'semantic-ui-react'

class Stats extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Container textAlign='center'>
        <Navigation />
      </Container>
    );
  }
}

Stats.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { })(
  withRouter(Stats)
);
