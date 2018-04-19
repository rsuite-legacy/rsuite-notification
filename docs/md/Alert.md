#### Alert - 消息提醒框
<!-- start-code -->
```js
// 自定义配置，全局有效
Alert.config({
  duration: 50000,
});

class AlertDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSuccess = () => {
    const content = <div>custom node</div>;
    Alert.success(content);
  }

  handleError = () => {
    Alert.error('error message');
  }

  handleInfo = () => {
    Alert.info('this is info message');
  }

  handleWarning = () => {
    Alert.warning('this is warning message');
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
          <li>
            <button className="btn btn-primary" onClick={this.handleWarning}>warning</button>
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<AlertDemo />)
```
<!-- end-code -->
`Alert` 用于全局展示操作反馈信息。可提供成功、信息和错误等反馈信息。顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。提供了下面几个方法：

* `Alert.success(content, duration, onClose)`
* `Alert.error(content, duration, onClose)`
* `Alert.info(content, duration, onClose)`
* `Alert.warning(content, duration, onClose)`


此外，`Alert` 还提供了全局配置的方法 `Alert.config(options)`,配置一次，全局有效。

options结构如下:

* top - 距离页面顶部的距离
* duration - Alert 框显示的时间
- classPrefix - 组件前缀名称
* getContainer - Alert 框的父级容器
