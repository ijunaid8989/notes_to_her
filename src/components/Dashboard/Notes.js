import React from 'react'
import { Button, Card, Image, Label, Icon } from 'semantic-ui-react'

const Notes = () => (
  <Card.Group centered>
    <Card>
      <Card.Content>
        <Label corner="left" color="red" icon='heart' />
        <Card.Header>😘</Card.Header>
        <Card.Description>
          This is a dummy note from me
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='calendar times' />
          Monday 22 2017
        </a>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default Notes