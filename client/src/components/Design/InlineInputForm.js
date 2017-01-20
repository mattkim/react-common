import React, { Component } from 'react';
import './Design.css';

class InlineInputForm extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container'>
          test
          <form>
            <input type="submit" value="Go" style={{
              "float": "right"
            }}/>
            <div style={{
              "overflow": "hidden",
              "padding-right": ".5em",
            }}>
              <input type="text" name="term" style={{
                "width": "100%",
              }}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default InlineInputForm;
