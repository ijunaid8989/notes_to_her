import React, { Component } from 'react';
import { Button, Icon, Container } from 'semantic-ui-react'

import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { loginUser } from "../../methods/auth"


class Login extends Component {
  constructor() {
    super()
    this.state = {
      errors: {}
    }
    this.login = this.login.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.auth.isAuthenticated) {
        console.log(this.props)
        this.props.history.push("/");
      }
    }

    if (nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  login() {
    this.props.loginUser() 
  }

  render() {
    return (
      <Container textAlign='center'>
        <div className="buttons-holder">
          <Button color='google plus' size='massive' onClick={this.login}>
            <Icon name='google' /> Google
          </Button>
        </div>
      </Container>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(withRouter(Login))
