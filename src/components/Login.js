import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'

export default class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="buttons-holder">
        <Button color='google plus' size='massive'>
          <Icon name='google' /> Google
        </Button>
      </div>
    );
  }
}
