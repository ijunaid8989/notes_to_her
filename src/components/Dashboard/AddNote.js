import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class AddNote extends Component {
  render() {
    return (
      <div>
        <Modal size="mini" open={this.props.showAddNote} onClose={this.props.hideAddNote}>
          <Modal.Header>Delete Your Account</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to delete your account</p>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.props.hideAddNote}>No</Button>
            <Button
              onClick={this.props.hideAddNote}
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default AddNote