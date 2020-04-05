import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Stats extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <div>STATS</div>
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
