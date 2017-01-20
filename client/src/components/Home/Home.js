import React, { Component } from 'react';
import './Home.css';
import {
  Grid,
  Row,
  Col,
} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className='root'>
        <div className='container'>
          <Grid>
            <Row>
              <Col xs={2} sm={4} md={4} lg={4} />
              <Col xs={8} sm={4} md={4} lg={4} className='centerText'>
                <Row>
                  <h1>
                    React Common
                  </h1>
                </Row>
              </Col>
              <Col xs={2} sm={4} md={4} lg={4} />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
