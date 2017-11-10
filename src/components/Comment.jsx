import React, { Component } from 'react';

export default class Comment extends Component {
  render() {
    return (
      <div>
        <p>{this.props.txt}</p>
        <div>
          <span>+{(this.props.votes||{up:0}).up}</span>
          <span>-{(this.props.votes||{down:0}).down}</span>
        </div>
      </div>
    )
  }
}
