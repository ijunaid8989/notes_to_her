import React, { Component } from 'react'
import { Button, Icon, Segment, Container, Header } from 'semantic-ui-react'

import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "../../methods/auth"

import Avatar from "./Avatar"
import Controls from "./Controls"
import Notes from "./Notes"

class Dashboard extends Component {

  constructor() {
    super();
  }

  render() {
    const { user } = this.props.auth
    console.log(user)
    return (
      <Container textAlign='center'>
        <Segment placeholder>
          <Header icon>
            <Avatar src={user.photoURL} />
          </Header>
          Hi {user.displayName} how are you feeling today?
          <Segment.Inline>
            <Controls logout={this.props.logoutUser} />
          </Segment.Inline>
        </Segment>
        <Notes />
      </Container>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Dashboard))

