import React from 'react'
import { Button, Label, Icon } from 'semantic-ui-react'

const Controls = (props) => (
  <React.Fragment>
    <Button color="green" content='Add Note' icon='sticky note' labelPosition='left' />
    <Button color="red" content='Logout' icon='log out' labelPosition='right' onClick={props.logout} />
  </React.Fragment>
)

export default Controls
