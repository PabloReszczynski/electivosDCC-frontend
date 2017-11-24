import React, { Component } from 'react';
import { Col, Panel, Glyphicon, Badge, FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';
import api from '../Api'


const styles = {
  icon: {
    padding: '10px'
  },
  badge: {
    margin: '5px'
  }
}

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'comment': '',
      api
    }
  }

  handleChange(e) {
    const text = e.target.value;
    this.setState({
      'comment': text
    })
  }

  send() {
    const comment = this.state.comment;
    if(comment.length > 0) {
      this.state.api.sendComment(this.props.id, this.state.comment).then(response => {
        if(response.ok) {
          this.props.newComment(comment);
        }
      })
      this.setState({
        'comment': ''
      })
    }
  }

  render() {
    return (
      <Panel>
        <div>
          <FormGroup
            controlId="formBasicText"
          >
            <form onSubmit={(e) => {
              e.preventDefault();
              this.send();
            }}>
              <InputGroup>
                <FormControl
                  value={this.state.comment}
                  type="text"
                  placeholder="Escribe tu comentario"
                  onChange={e => this.handleChange(e)}
                />
                <InputGroup.Button>
                  <Button onClick={() => this.send()}>Enviar</Button>
                </InputGroup.Button>
              </InputGroup>
            </form>
          </FormGroup>
        </div>
      </Panel>
    )
  }
}
