import React, { Component } from 'react'
import {
  Button,
  Modal,
  Loader,
  Dimmer,
  TextArea,
  Form,
  Input,
  Message,
} from 'semantic-ui-react'

import PropTypes from "prop-types"
import { connect } from "react-redux"
import { addNote } from "../../methods/notes"

class AddNote extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      emoji: "",
      open: false,
      note: "",
      formError: false,
      emojiError: "You cannot add more than one emoji.",
      noteError: "Your note cannot be long enough but 200 characters.",
      errorDisplay: "",
      errros: {}
    }
    this.addANote = this.addANote.bind(this)
    this.onChange = this.onChange.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.clearAllStates = this.clearAllStates.bind(this)
    this.openNote = this.openNote.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.errors).length !== 0) {
      this.setState({errors: nextProps.errors, loading: false})
    }

    const { closeModal } = nextProps.notes
    if (closeModal) {
      this.closeModal()
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  addANote() {
    this.setState({ loading: true })
    this.props.addNote({emoji: this.state.emoji, note: this.state.note, userId: this.props.auth.user.uid})
  }

  closeModal() {
    this.clearAllStates()
  }

  openNote() {
    this.setState({ open: true })
  }

  clearAllStates () {
    this.setState(prevState => ({
      ...prevState,
      open: false,
      loading: false,
      emoji: "",
      note: "",
      errors: {}
    }))
  }

  render() {
    return (
      <React.Fragment>
        <Button color="green" content='Note' icon='sticky note' labelPosition='left' onClick={this.openNote}/>
        <Modal size="mini" open={this.state.open} onClose={this.closeModal} closeOnDimmerClick={false}>
          <Modal.Header>How do you feel?</Modal.Header>
          <Modal.Content>
            {this.state.errors && this.state.errors.message}
            <Dimmer active={this.state.loading} inverted>
              <Loader inverted size="mini">Loading</Loader>
            </Dimmer>
            <Form error={this.state.formError}>
              <Form.Field>
                <Input
                  name="emoji"
                  onChange={this.onChange}
                  value={this.state.emoji}
                  label={{ icon: 'heart', color: "red" }}
                  labelPosition='left corner'
                  placeholder='place your emoji'
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  placeholder='Tell us more'
                  name="note"
                  onChange={this.onChange}
                  value={this.state.note}
                />
              </Form.Field>
              <Message error>
                <p>{this.state.errorDisplay}</p>
              </Message>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.closeModal}>No</Button>
            <Button
              onClick={this.addANote}
              disabled={this.state.formError}
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    )
  }
}

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  notes: state.notes
})

export default connect(mapStateToProps, { addNote })(AddNote)
