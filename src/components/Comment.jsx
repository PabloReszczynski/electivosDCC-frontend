import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.txt}</p>
        <div>
          <span>+{this.props.votes.up}</span>,
          <span>-{this.props.votes.down}</span>
        </div>
      </div>
    )
  }
}
