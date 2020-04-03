import React, { Component } from 'react'
import {
  Button,
  Modal,
  Loader,
  Dimmer,
  TextArea,
  Form,
  Input,
  Divider,
  Message
} from 'semantic-ui-react'

import PropTypes from "prop-types"
import { connect } from "react-redux"
// import { addNote } from "../../methods/notes"

class AddNote extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      emoji: "",
      note: "",
      boxLimit: false
    }
    this.addANote = this.addANote.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors !== this.props.errors) {
      this.setState({ errors: newProps.errors })
    }


    // remove loading and clsoe modal
  }

  componentDidUpdate(prevProp, prevState) {
    console.log(prevState.note.length)
    if (prevState.note.length >= 100) {
      this.state.boxLimit = true
    } else {
      this.state.boxLimit = false
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  addANote() {
    this.setState({ loading: true })
  }

  clearAllStates () {
    this.setState({
      loading: false,
      emoji: "",
      node: ""
    }) 
  }

  render() {
    return (
      <div>
        <Modal size="mini" open={this.props.showAddNote} onClose={this.props.hideAddNote}>
          <Modal.Header>How do you feel?</Modal.Header>
          <Modal.Content>
            <Dimmer active={this.state.loading} inverted>
              <Loader inverted size="mini">Loading</Loader>
            </Dimmer>
            <Form error={this.state.boxLimit}>
              <Form.Field>
                <Input
                  label={{ icon: 'heart', color: "red" }}
                  labelPosition='left corner'
                  placeholder='place your emoji'
                />
              </Form.Field>
              <Form.Field>
                <TextArea
                  label={{ icon: 'sticky note', color: "red" }}
                  placeholder='Tell us more'
                  name="note"
                  onChange={this.onChange}
                  value={this.state.note}
                />
              </Form.Field>
              <Message
                error
                content='Your note cannot be long enough but 200 characters.'
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={this.props.hideAddNote}>No</Button>
            <Button
              onClick={this.addANote}
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

AddNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {  })(AddNote)
