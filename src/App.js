import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Electivo from './components/Electivo.jsx';
import electivos from './electivos2.js';
import { Clearfix, Col } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clearfix>
          {this.props.electivos.electivos.map(electivo => (
            <Col>
              <Electivo name={electivo.name} comments={electivo.comments} />
            </Col>
          ))}
        </Clearfix>
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
