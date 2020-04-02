import React from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'

const Stats = () => (
  <React.Fragment>
    <Button color="green" content='Add Note' icon='sticky note' labelPosition='left' />
    <Button color="red" content='Logout' icon='log out' labelPosition='right' />
  </React.Fragment>
)

export default Stats
