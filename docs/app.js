import React, { Component } from 'react';
import Notification from '../src';
import '../src/less/index.less';

const notification = Notification.newInstance({});

class App extends Component {

  handleSuccess = () => {
    notification.success({
      content: 'message',
      duration: null,
      closable: true
    });
  }
  handleError = () => {
    notification.error({
      content: 'long long long long long error message',
      duration: null,
      closable: true
    });
  }
  handleInfo = () => {
    notification.info({
      content: 'message',
      duration: null,
      closable: true
    });
  }

  render() {
    return (
      <div className="doc-page">
        <button onClick={this.handleSuccess}>success</button>
        <button onClick={this.handleError}>error</button>
        <button onClick={this.handleInfo}>info</button>
      </div>
    );
  }
}

export default App;
