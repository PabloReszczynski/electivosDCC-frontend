import React, { Component } from 'react';
import Comment from './Comment.jsx';
import { Col } from 'react-bootstrap';

const styles = {
  container: {
    backgroundColor: 'white',
    marginBottom: '10px',
    marginTop: '10px'
  },
  comments: {
    overflow: 'scroll',
    maxHeight: '500px'
  },
  header: {
    padding: '10px',
    backgroundColor: '#2196F3',
    color: 'white'
  }
}

export default class Electivo extends Component {
  render() {
      console.log(this.props);
    return (
      <div style={styles.container}> 
        <div style={styles.header}>
          <h1>{this.props.name}</h1>
        </div>
        <div style={styles.comments}>
          {this.props.comments.map(comment => (
            <Comment txt={comment.txt} votes={comment.votes} />
          ))}
        </div>
      </div>
    )
  }
}
