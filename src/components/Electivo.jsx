import React, {Component} from 'react';
import Comment from './Comment.jsx';
import { Col } from 'react-bootstrap';
import CommentForm from './CommentForm.jsx';

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
  },
  footer: {
    padding: '10px',
    backgroundColor: '#1565C0'
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
        <div style={styles.comments} ref={(ref) => {this.divComments = ref}}>
          {this.props.comments.map(comment => (
            <Comment
              course_id={this.props.id}
              sendLike={this.props.sendLike}
              sendDislike={this.props.sendDislike} {...comment}
            />
          ))}
        </div>
        <div style={styles.footer}>
          <CommentForm id={this.props.id} newComment={(comment, comm_id) => {
            this.props.newComment(comment, comm_id);
            this.divComments.scrollTop = this.divComments.scrollHeight;
          }}/>
        </div>
      </div>
    )
  }
}