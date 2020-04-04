import React, { Component } from 'react'
import { Card, Label, Icon } from 'semantic-ui-react'

import moment from "moment"

class Notes extends Component {
  render() {
    const cards = this.props.notes.map((note, idx) => {
      return (
        <Card key={idx}>
          <Card.Content>
            <Label corner="left" color="red" icon='heart' />
            <Card.Header><span role="img">{note.emoji}</span></Card.Header>
            <Card.Description>
              {note.note}
            </Card.Description>
          </Card.Content>
          <Card.Content extra color="red">
            <a className="wordCount">
              <Icon name='heartbeat' />
              {note.count}
            </a>
            <a className="momentAgo">
              <Icon name='calendar times' />
              {moment(note.date).fromNow()}
            </a>
          </Card.Content>
        </Card>
      )
    })

    return (
      <Card.Group centered>
        {cards}
      </Card.Group>
    )
  }
}

export default Notes