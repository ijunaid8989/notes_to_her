import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import AddNote from "./AddNote"

const Controls = (props) => {
  const [open, setOpen] = useState(false)
  const addNote = () => setOpen(true)
  const hideNote = () => setOpen(false)
  return <React.Fragment>
    <AddNote showAddNote={open} hideAddNote={(e) => {hideNote(e)}} />
    <Button color="green" content='Add Note' icon='sticky note' labelPosition='left' onClick={(e) => {addNote(e)}}/>
    <Button color="red" content='Logout' icon='log out' labelPosition='right' onClick={props.logout} />
  </React.Fragment>
}

export default Controls
