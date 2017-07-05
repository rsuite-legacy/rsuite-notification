import React, { Component } from 'react';
import { Notify } from '../../src/index';

class NotifyDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleNotify = (placement = 'topRight') => {
    Notify.open({
      title: 'Notify',
      description: 'long long long long long error messagelong long long long long error messagelong ',
      duration: 5,
      placement
    });
  }

  handleSuccess = () => {
    Notify.success({
      title: 'Success',
      description: 'success messages success messages success messages',
      duration: 50,
      onClose: this.handleOnClose
    });
  }

  handleError = () => {
    Notify.error({
      title: 'Error',
      description: ' messages  messages  messages messages',
      duration: 50,
      onClose: this.handleOnClose
    });
  }

  handleInfo = () => {
    Notify.info({
      title: 'Info',
      description: ' messages  messages  messages messages',
      duration: 50,
      onClose: this.handleOnClose
    });
  }

  handleOnClose = () => {
  }

  render() {
    return (
      <div>
        <ul className="buttons-list">
          <li>
            <button className="btn btn-primary" onClick={this.handleNotify.bind(null, 'topLeft')}>topLeft</button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={this.handleNotify.bind(null, 'topRight')}>topRight</button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={this.handleNotify.bind(null, 'bottomLeft')}>bottomLeft</button>
          </li>
          <li>
            <button className="btn btn-primary" onClick={this.handleNotify.bind(null, 'bottomRight')}>bottomRight</button>
          </li>
        </ul>

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

export default NotifyDemo;
