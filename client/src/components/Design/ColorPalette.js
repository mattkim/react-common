import React, { Component } from 'react';
import {
  Button,
  FormControl,
} from 'react-bootstrap';
import './Design.css';
import cx from 'classnames';

class ColorPalette extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container'>
          <div className={cx("panel", "panel-default")}>
            <div className="panel-heading" style={{
              "background": "#ffffff",
              "color": "#ffffff",
            }}>
              Panel heading
            </div>
            <div className="panel-body">
              <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
            <div style={{"padding": "5px"}}>
              <Button style={{
                "background": "#eebcb1",
                "background-image": "-webkit-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
                "background-image": "-moz-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
                "background-image": "-ms-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
                "background-image": "-o-linear-gradient(top, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
                "background-image": "linear-gradient(to bottom, #eebcb1, #E75B64)", // eslint-disable-line no-dupe-keys
                "border": "0",
                "color": "#ffffff",
                "float": "right",
              }}>
                Done
              </Button>
              <div style={{
                "overflow": "hidden",
                "padding-right": ".5em",
              }}>
                <FormControl className="borderless-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorPalette;
