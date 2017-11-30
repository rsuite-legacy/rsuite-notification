#### Notify

<!-- start-code -->
```javascript

class NotifyDemo extends React.Component {
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

  handleWarning = () => {
    Notify.warning({
      title: 'Warning',
      description: ' messages  messages  messages messages',
      duration: 50,
      onClose: this.handleOnClose
    });
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
          <li>
            <button className="btn btn-primary" onClick={this.handleWarning}>warning</button>
          </li>
        </ul>
      </div>
    );
  }
}
ReactDOM.render(<NotifyDemo />)
```
<!-- end-code -->

`Notify` 用于全局展示通知提醒，通过用于比较复杂，内容较多的通知。提供了下面几个方法：

* `Notify.open(config)` - 打开一个普通的消息框
* `Notify.success(config)` - 打开一个成功提醒的消息框
* `Notify.error(config)` - 打开一个错误提醒的消息框
* `Notify.info(config)` - 打开一个信息提醒的消息框
* `Notify.warning(config)` - 打开一个信息提醒的消息框
* `Notify.remove(key)` - 手动移除消息框
