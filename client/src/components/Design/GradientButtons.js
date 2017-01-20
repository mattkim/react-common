import React, { Component } from 'react';
import {
  Button,
} from 'react-bootstrap';
import './Design.css';

class GradientButtons extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container'>
          <Button style={{
            "background": "#94C5CC",
            "background-image": "-webkit-linear-gradient(top, #94C5CC, #3F98A6)", // eslint-disable-line no-dupe-keys
            "background-image": "-moz-linear-gradient(top, #94C5CC, #3F98A6)", // eslint-disable-line no-dupe-keys
            "background-image": "-ms-linear-gradient(top, #94C5CC, #3F98A6)", // eslint-disable-line no-dupe-keys
            "background-image": "-o-linear-gradient(top, #94C5CC, #3F98A6)", // eslint-disable-line no-dupe-keys
            "background-image": "linear-gradient(to bottom, #94C5CC, #3F98A6)", // eslint-disable-line no-dupe-keys
            "color": "#FFFFFF",
            "border": "0px",
            "font-size": "50px",
            "padding-right": ".5em",
            "padding-left": ".5em",
          }}>
            Done
          </Button>
          <br/>
          <br/>
          <Button style={{
            "background": "#eebcb1",
            "background-image": "-webkit-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
            "background-image": "-moz-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
            "background-image": "-ms-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
            "background-image": "-o-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
            "background-image": "linear-gradient(to bottom, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
            "color": "#FFFFFF",
            "border": "0px",
            "font-size": "50px",
            "padding-right": ".5em",
            "padding-left": ".5em",
          }}>
            Done
          </Button>
        </div>
      </div>
    );
  }
}

export default GradientButtons;
