import React, { Component } from 'react'
import {
  Segment,
  Container,
  Header,
  Loader
} from 'semantic-ui-react'

import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { logoutUser } from "../../methods/auth"
import { getNotes } from "../../methods/notes"

import Avatar from "./Avatar"
import Controls from "./Controls"
import Notes from "./Notes"

class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    const { uid } = this.props.auth.user
    this.props.getNotes(uid)
  }

  render() {
    const { user } = this.props.auth
    const { notes, loading } = this.props.notes
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
        {loading ? <Loader active inline='centered' /> : <Notes notes={notes} />}
      </Container>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  notes: state.notes,
})

export default connect(mapStateToProps, { logoutUser, getNotes })(withRouter(Dashboard))

