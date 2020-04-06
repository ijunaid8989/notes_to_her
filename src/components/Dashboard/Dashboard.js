import React, { Component } from 'react'
import {
  Container,
  Loader
} from 'semantic-ui-react'

import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { getNotes } from "../../methods/notes"


import Notes from "./Notes"
import Navigation from "./Navigation"

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
    const { notes, loading } = this.props.notes
    return (
      <Container textAlign='center'>
        <Navigation />
        {loading ? <Loader active inline='centered' /> : <Notes notes={notes} /> }
      </Container>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getNotes: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  notes: state.notes,
})

export default connect(mapStateToProps, { getNotes })(withRouter(Dashboard))

