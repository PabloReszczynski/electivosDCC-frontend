import React, {Component} from 'react';
import {Panel, Glyphicon, Badge} from 'react-bootstrap';

const styles = {
    icon: {
        margin: '10px 10px 0',
        cursor: 'pointer',
    },
    badge: {
        margin: '5px'
    },
    panel: {
        margin: '4px 0',
    },
    panelText: {
        boxShadow: '2px 2px 10px -2px rgba(0,0,0,0.75)'
    }
};

export default class Comment extends Component {
    render() {
        return (
            <Panel style={styles.panel}>
                <Panel style={{...styles.panel, ...styles.panelText}}>{this.props.txt}</Panel>
                <div>
                    <Glyphicon glyph="thumbs-up" style={styles.icon}>
                        <Badge style={styles.badge}>{(this.props.votes || {up: 0}).up}</Badge>
                    </Glyphicon>
                    < Glyphicon glyph="thumbs-down" style={styles.icon}>
                        <Badge style={styles.badge}>{(this.props.votes || {down: 0}).down}</Badge>
                    </Glyphicon>
                </div>
            </Panel>
        )
    }
}
