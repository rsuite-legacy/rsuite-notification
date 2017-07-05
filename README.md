# rsuite-notification
`rsuite-notification` 提供了 `Alert` 和 `Nofity` 两个组件。安装：

```javascript
npm install rsuite-notification
```
# Alert
`Alert` 用于全局展示操作反馈信息。可提供成功、信息和错误等反馈信息。顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

* `Alert.success(content, duration, onClose)`
* `Alert.error(content, duration, onClose)`
* `Alert.info(content, duration, onClose)`

```javascript
import React, { Component } from 'react';
import { Alert } from '../src/index';
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
  handleOnClose() {
    console.log('closed');
  }

  render() {
    return (
      <div className="doc-page">
        <section>
          <h2>Alert</h2>
          <button className="btn btn-primary" onClick={this.handleSuccess}>success</button>
          <button className="btn btn-primary" onClick={this.handleError}>error</button>
          <button className="btn btn-primary" onClick={this.handleInfo}>info</button>
        </section>
      </div>
    );
  }
}

export default App;
```

此外，`Alert` 还提供了全局配置的方法 `Alert.config(options)`,配置一次，全局有效。

options包含:

* top - 距离页面顶部的距离
* duration - Alert 框显示的时间
* getContainer - Alert 框的父级容器

## Alert Props
Name | Type | Default | Description |
---- | ---- | ------- | ----------- |
content（必选）  | string | |  |  通知内容
duration  | number | 1.5 |  消息框持续时间
onClose | function | | 关闭回调函数


# Notify
`Notify` 用于全局展示通知提醒，通过用于比较复杂，内容较多的通知。

* `Notify.open(config)` - 打开一个普通的消息框
* `Notify.success(config)` - 打开一个成功提醒的消息框
* `Notify.error(config)` - 打开一个错误提醒的消息框
* `Notify.info(config)` - 打开一个信息提醒的消息框
* `Notify.remove(key)` - 手动移除消息框

## Config
Name | Type | Default | Description |
---- | ---- | ------- | ----------- |
title（必选）  | string | |  |  标题
description（必选）  | string | 1.5 |  描述
duration  | number | 4.5 |  消息框持续时间
placement | string | topRight | 消息框的位置，共有四种位置 `topLeft`,`topRight`,`bottomLeft`,`bottomRight`
top | number | 24 | 消息框距离顶部的距离
bottom | number | 24 | 消息框距离底部的距离
onClose | function | | 关闭回调函数
style | object | | 自定义样式


