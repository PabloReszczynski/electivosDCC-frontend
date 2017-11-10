import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Electivo from './components/Electivo.jsx';
import electivos from './electivos2.js';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            {this.props.electivos.electivos.map(electivo => (
              <Col sm={6} md={3}>
                <Electivo name={electivo.name} comments={electivo.comments} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  electivos
});

const mapDispatchToProps = dispatch => ({});

const ElectivoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ElectivoApp;
