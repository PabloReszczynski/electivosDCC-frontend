import React, { Component } from 'react';
import Comment from './Comment.jsx';
import { Col } from 'react-bootstrap';

const styles = {
  container: {
    backgroundColor: 'white'
  }
}

export default class Electivo extends Component {
  render() {
      console.log(this.props);
    return (
      <div style={styles.container}>
        <h1>{this.props.name}</h1>
        {this.props.comments.map(comment => (
          <Comment txt={comment.txt} votes={comment.votes} />
        ))}
      </div>
    )
  }
}
