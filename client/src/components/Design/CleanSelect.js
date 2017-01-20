import React, { Component } from 'react';
import './Design.css';

class CleanSelect extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container'>
            <div className="select-style">
              <select>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
              </select>
            </div>
        </div>
      </div>
    );
  }
}

export default CleanSelect;
