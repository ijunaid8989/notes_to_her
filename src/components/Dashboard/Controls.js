import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import AddNote from "./AddNote"

class Controls extends Component {
  constructor() {
    super()
  }

  switchStats(history) {
    history.push("/stats")
  }

  render() {
    return (
      <React.Fragment>
        <AddNote />
        <Button color="red" content='Logout' icon='log out' labelPosition='right' onClick={this.props.logout} />
        <Button color="blue" content='Stats' icon='heartbeat' labelPosition='right' onClick={(e) => {this.switchStats(this.props.history)}} />
      </React.Fragment>
    )
  }
}

export default Controls
