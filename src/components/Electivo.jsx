import React, { Component } from 'react';
import Comment from './Comment.jsx';

export default class Electivo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
      {this.props.comments.map(comment => (
        <li><Comment txt={comment.txt} votes={comment.votes} /></li>
      ))}
    </ul>
  </div>
    )
  }
}
