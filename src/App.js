import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Electivo from './components/Electivo.jsx';
import electivos from './electivos2.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchCoursesSuccess, newComment, postLikeSuccess, postDislikeSuccess } from './state/store'
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

  sendLike (course_id, comment_id) {
    Api.postLike(comment_id).then((response) => {
      console.log(response);
      this.props.postLikeSuccess(course_id, comment_id)
    }).catch(err => {
      alert('El sitio tiene problemas, por favor intentalo de nuevo mas tarde.')
      console.error(err);
    })
    console.log('sendLike')
  }

  sendDislike (course_id, comment_id) {
    Api.postDislike(comment_id).then((response) => {
      console.log(response);
      this.props.postDislikeSuccess(course_id, comment_id)
    }).catch(err => {
      alert('El sitio tiene problemas, por favor intentalo de nuevo mas tarde.')
      console.error(err);
    })
    console.log('sendDislike') 
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
                <Electivo
                  sendLike={(course_id, comment_id) => this.sendLike(course_id, comment_id)}
                  sendDislike={(course_id, comment_id) => this.sendDislike(course_id, comment_id)}
                  name={electivo.name}
                  comments={electivo.comments}
                  id={electivo.id}
                  newComment={(comment, comm_id) => this.props.newComment(comment, comm_id, electivo.id)}
                />
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
  newComment: (comment, comm_id, elec_id) =>
    dispatch(newComment(comment, comm_id, elec_id)),
  postLikeSuccess: (comment, id) =>
    dispatch(postLikeSuccess(comment, id)),
  postDislikeSuccess: (comment, id) =>
    dispatch(postDislikeSuccess(comment, id)),
});

const ElectivoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ElectivoApp;
