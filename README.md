[![Travis](https://img.shields.io/travis/rsuite/rsuite-notification.svg)](https://travis-ci.org/rsuite/rsuite-notification) [![npm](https://img.shields.io/npm/v/rsuite-notification/version2.x.svg)](https://www.npmjs.com/package/rsuite-notification) [![Coverage Status](https://coveralls.io/repos/github/rsuite/rsuite-notification/badge.svg?branch=master)](https://coveralls.io/github/rsuite/rsuite-notification?branch=master)
# rsuite-notification
`rsuite-notification` 提供了 `Alert` 和 `Nofity` 两个组件。
## 快速开始
### 安装

```javascript
npm install rsuite-notification
```

### 引入less文件：

```
@import "~rsuite-notification/lib/less/index";
```

### 使用
```
import { Alert, Notify} from 'rsuite-notification'

Alert.success(content);

Notify.success({
      title: 'Success',
      description: 'success messages success messages success messages',
      duration: 50,
      onClose: this.handleOnClose
    });
```
