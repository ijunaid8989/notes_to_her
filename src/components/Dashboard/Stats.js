import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from "moment"

import Navigation from "./Navigation"

import {
  Container,
  Loader,
  Button,
  Menu
} from 'semantic-ui-react'

class Stats extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      data: {},
    }
    this.getBackToNotes = this.getBackToNotes.bind(this)
  }

  componentDidMount() {
    console.log(this.props.notes.notes)
    let data = {
      labels: [],
      datasets: [
        {
          label: 'Note Word Count',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: '#3e95cd',
          borderWidth: 2,
          data: []
        }
      ]
    }
    this.props.notes.notes.forEach((note) => {
      data.labels.push(note.emoji)
      data.datasets[0].data.push(note.count)
    })
    this.setState({ data })
  }

  getBackToNotes() {
    this.props.history.push("/")
  }

  render() {
    return (
      <Container textAlign='center'>
        <button className="ui icon left labeled button" onClick={this.getBackToNotes}>
          <i aria-hidden="true" className="left arrow icon"></i>
          Back
        </button>
        <Container textAlign='justified'>
          <Line
            data={this.state.data}
            options={{
            }}
          />
        </Container>
      </Container>
    );
  }
}

Stats.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  notes: state.notes
});

export default connect(mapStateToProps, { })(
  withRouter(Stats)
);
