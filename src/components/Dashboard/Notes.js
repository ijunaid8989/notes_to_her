import React, { Component } from 'react'
import { Card, Label, Icon } from 'semantic-ui-react'

class Notes extends Component {
  render() {
    const cards = this.props.notes.map((note, idx) => {
      return (
        <Card key={idx}>
          <Card.Content>
            <Label corner="left" color="red" icon='heart' />
            <Card.Header><span role="img">{note.emoji}</span></Card.Header>
            <Card.Description>
              {note.note} {note.count}
            </Card.Description>
          </Card.Content>
          <Card.Content extra textAlign='right'>
            <a>
              <Icon name='calendar times' />
              {note.date}
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