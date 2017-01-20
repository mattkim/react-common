import React, { Component } from 'react';
import './Design.css';
import {
  Button,
} from 'react-bootstrap';
import {
  get,
} from '../../lib/fetch';

class GetStuff extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: {},
    };

    this.dostuff = this.dostuff.bind(this);
  }

  async dostuff() {
    const res = await get("test", {
      "test": "test",
      "test1": "test1",
    });
    this.setState({response: res});
  }

  renderResponse() {
    return JSON.stringify(this.state.response);
  }

  render() {
    return (
      <div className='root'>
        <div className='container'>
          <Button onClick={this.dostuff}>Test Get With Params</Button>
          <hr/>
          {this.renderResponse()}
        </div>
      </div>
    );
  }
}

export default GetStuff;
