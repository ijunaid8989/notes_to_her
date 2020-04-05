import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import AddNote from "./AddNote"

class Controls extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <React.Fragment>
        <AddNote />
        <Button color="red" content='Logout' icon='log out' labelPosition='right' onClick={this.props.logout} />
        <Button color="blue" content='Stats' icon='heartbeat' labelPosition='right' />
      </React.Fragment>
    )
  }
}

export default Controls
