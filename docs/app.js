import React, { Component } from 'react';
import { Alert } from '../src/index';
import '../src/less/index.less';
Alert.config({
  top: 30,
  duration: 5
});

class App extends Component {

  handleSuccess = () => {
    Alert.success('message', 3);
  }
  handleError = () => {
    Alert.error('error message');
  }
  handleInfo = () => {
    Alert.info('this is info message', 3);
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
