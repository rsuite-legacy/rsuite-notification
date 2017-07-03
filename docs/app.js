import React, { Component } from 'react';
import { Alert, Notify } from '../src/index';
import { PLACEMENT_TYPES } from '../src/constants/index';

import '../src/less/index.less';

Alert.config({
  duration: 50,
  top: 20,
});

class App extends Component {

  handleSuccess = () => {
    Alert.success('message');
  }

  handleError = () => {
    Alert.error('error message');
  }

  handleInfo = () => {
    Alert.info('this is info message');
  }

  handleNotify = (placement = 'topRight') => {
    Notify.open({
      title: 'Notify',
      description: 'long long long long long error messagelong long long long long error messagelong long long long long error messagelong long long long long error messagelong long long long long error message',
      duration: 5,
      placement
    });
  }

  handleNotifySuccess = () => {
    Notify.success({
      title: 'Notify',
      description: 'long long long long long error messagelong long long long long error messagelong long long long long error messagelong long long long long error messagelong long long long long error message',
      duration: 5,
      onClose: this.handleOnClose
    });
  }
  handleOnClose() {
    console.log('closed');
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
          <button onClick={this.handleNotify.bind(null, PLACEMENT_TYPES.TOPLEFT)}>topLeft</button>
          <button onClick={this.handleNotify.bind(null, PLACEMENT_TYPES.TOPRIGHT)}>topRight</button>
          <button onClick={this.handleNotify.bind(null, PLACEMENT_TYPES.BOTTOMLEFT)}>bottomLeft</button>
          <button onClick={this.handleNotify.bind(null, PLACEMENT_TYPES.BOTTOMRIGHT)}>bottomRight</button>
          <button onClick={this.handleNotifySuccess}>Success</button>
        </section>

      </div>
    );
  }
}

export default App;
