import React, { Component } from 'react';
import './Design.css';
import {
  Button,
} from 'react-bootstrap';
import {
  post,
} from '../../lib/fetch';

class PostStuff extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: {},
    };

    this.dostuff = this.dostuff.bind(this);
  }

  async dostuff() {
    const res = await post("test", {"test": "test"});
    this.setState({response: res});
  }

  renderResponse() {
    return JSON.stringify(this.state.response);
  }

  render() {
    return (
      <div className='root'>
        <div className='container'>
          <Button onClick={this.dostuff}>Test Post</Button>
          <hr/>
          {this.renderResponse()}
        </div>
      </div>
    );
  }
}

export default PostStuff;
