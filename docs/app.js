import React, { Component } from 'react';
import { Markdown } from 'markdownloader';
import { Notify } from '../src/index';
import { PLACEMENT_TYPES } from '../src/constants/index';

import Header from './component/Header';
import AlertDemo from './component/Alert';
import NotifyDemo from './component/Notify';
import '../src/less/index.less';
import './less/index.less';


class App extends Component {
  render() {
    return (
      <div className="doc-page">
        <Header />
        <div className="container">
          <h1>Rsuite Notification</h1>
          <p>提供 Alert 和 Notify 两个组件，用于全局提示消息</p>
          <hr />
          <div>
            <h2>Alert - 消息提醒框</h2>
            <div className="row">
              <div className="col-md-8">
                <Markdown> {require('./md/Alert.md')}</Markdown>
              </div>
              <div className="col-md-4">
                <AlertDemo />
              </div>
            </div>
          </div>
          <div>
            <h2>Notify - 消息通知框</h2>
            <div className="row">
              <div className="col-md-8">
                <Markdown> {require('./md/Notify.md')}</Markdown>
              </div>
              <div className="col-md-4">
                <NotifyDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
