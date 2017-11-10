import React, { Component } from 'react';
import { Panel, Glyphicon, Badge } from 'react-bootstrap';

export default class Comment extends Component {
  render() {
    return (
      <Panel>
        <Panel>{this.props.txt}</Panel>
        <div>
          <Glyphicon glyph="thumbs-up">
            <Badge>{(this.props.votes||{up:0}).up}</Badge>
          </Glyphicon>

          <Glyphicon glyph="thumbs-down">
            <Badge>{(this.props.votes||{down:0}).down}</Badge>
          </Glyphicon>
        </div>
      </Panel>
    )
  }
}
