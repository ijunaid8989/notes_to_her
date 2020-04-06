import React, { Component } from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  Segment,
  Header,
  Loader
} from 'semantic-ui-react'

import { logoutUser } from "../../methods/auth"
import Avatar from "./Avatar"
import Controls from "./Controls"

class Navigation extends Component {
  constructor() {
    super()
  }

  render() {
    const { user } = this.props.auth
    console.log(this.props)
    return (
      <React.Fragment>
        <Segment placeholder>
          <Header icon>
            <Avatar src={user.photoURL} />
          </Header>
          Hi {user.displayName} how are you feeling today?
          <Segment.Inline>
            <Controls history={this.props.history} logout={this.props.logoutUser} />
          </Segment.Inline>
        </Segment>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navigation))

