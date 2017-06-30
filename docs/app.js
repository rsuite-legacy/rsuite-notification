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
  handleNotification = () => {
    notification.success({
      title: 'Notificition',
      content: 'long long long long long error messagelong long long long long error messagelong long long long long error messagelong long long long long error messagelong long long long long error message',
      duration: null,
      closable: true
    });
  }

  render() {
    return (
      <div className="doc-page">
        <section>
          <h2>Alert</h2>
          <button onClick={this.handleSuccess}>success</button>
          <button onClick={this.handleError}>error</button>
          <button onClick={this.handleInfo}>info</button>
        </section>
        <section>
          <h2>Notification</h2>
          <button onClick={this.handleNotifiySuccess}>success</button>
          <button onClick={this.handleNotifyError}>error</button>
          <button onClick={this.handleNotifyInfo}>info</button>
        </section>

      </div>
    );
  }
}

export default App;
