import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Electivo from './components/Electivo.jsx';
import electivos from './electivos2.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchCoursesSuccess, newComment } from './state/store'
import Api from './Api';

class App extends Component {

  componentDidMount() {
    Api.fetchCourses().then((response) => {
      console.log(response);
      response.data && this.props.fetchCoursesSuccess(response.data.electivos)
    }).catch(err => {
      alert('El sitio tiene problemas, por favor intentalo de nuevo mas tarde.')
      console.error(err);
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: '#E0E0E0'}}>
        <Grid>
          <Row className="show-grid">
            {this.props.electivos.map((electivo, index) => [
            ((index % 3 == 0)
            ? (<Row />)
            : null),
              <Col sm={12} md={4}>
                <Electivo sendLike={this.props.sendLike} sendDislike={this.props.sendDislike} name={electivo.name} comments={electivo.comments} id={electivo.id} newComment={comment => this.props.newComment(comment, electivo.id)}/>
              </Col>
            ])}
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  electivos: state.electivos
});

const mapDispatchToProps = dispatch => ({
  fetchCoursesSuccess: (courses) =>
    dispatch(fetchCoursesSuccess(courses)),
  newComment: (comment, id) =>
    dispatch(newComment(comment, id))
});

const ElectivoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ElectivoApp;
