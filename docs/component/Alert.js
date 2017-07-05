import React, { Component } from 'react';
import { Alert } from '../../src/index';

Alert.config({
  duration: 50,
  top: 10,
});

class AlertDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSuccess = () => {
    Alert.success('message');
  }

  handleError = () => {
    Alert.error('error message');
  }

  handleInfo = () => {
    Alert.info('this is info message');
  }

  render() {
    return (
      <div>
        <ul className="buttons-list">
          <li>
            <button className="btn btn-primary" onClick={this.handleSuccess}>success</button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={this.handleError}>error</button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={this.handleInfo}>info</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AlertDemo;
