import React, { Component } from 'react';
import { Col, Panel, Glyphicon, Badge } from 'react-bootstrap';

const styles = {
  icon: {
    padding: '10px'
  },
  badge: {
    margin: '5px'
  }
}

export default class Comment extends Component {
  render() {
    return (
      <Panel>
        <Panel>{this.props.txt}</Panel>
        <div>
           {/*<Glyphicon glyph="thumbs-up" style={styles.icon}>
            <Badge style={styles.badge}>{(this.props.votes||{up:0}).up}</Badge>
          </Glyphicon>
          <Glyphicon glyph="thumbs-down" style={styles.icon}>
            <Badge style={styles.badge}>{(this.props.votes||{down:0}).down}</Badge>
          </Glyphicon>*/}
        </div>
      </Panel>
    )
  }
}
