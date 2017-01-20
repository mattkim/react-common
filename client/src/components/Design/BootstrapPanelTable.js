import React, { Component } from 'react';
import './Design.css';
import cx from 'classnames';

class BootstrapPanelTable extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container'>
          <div className={cx("panel", "panel-default")}>
            <div className="panel-heading">Panel heading</div>
            <div className="panel-body">
              <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
            <table className="table">
              <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BootstrapPanelTable;
