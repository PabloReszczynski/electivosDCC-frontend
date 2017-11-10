import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Electivo from './components/Electivo.jsx';
import electivos from './electivos2.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.electivos.electivos.map(electivo => (
          <Electivo name={electivo.name} comments={electivo.comments} />
        ))}
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
