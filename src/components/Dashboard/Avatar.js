import React from 'react'
import { Image } from 'semantic-ui-react'

const Avatar = (props) => (
  <div>
    <Image src={props.src} avatar  size='small'/>
  </div>
)

export default Avatar
