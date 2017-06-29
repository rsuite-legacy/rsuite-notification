import React, { Component } from 'react';
import Notification from '../src';
import '../src/less/index.less';

const notification = Notification.newInstance({});

class App extends Component {

  handleClick = () => {
    notification.notice({
      content: 'message',
      duration: null,
      closable: true
    });
  }

  render() {
    return (
      <div className="doc-page">
        <button onClick={this.handleClick}>open</button>
      </div>
    );
  }
}

export default App;
