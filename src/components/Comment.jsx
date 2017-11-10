import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Comment extends Component {
  render() {
    return (
      <Col xs={12}>
        <p>{this.props.txt}</p>
        <div>
          <span>+{(this.props.votes||{up:0}).up}</span>
          <span>-{(this.props.votes||{down:0}).down}</span>
        </div>
      </Col>
    )
  }
}
