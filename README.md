# rsuite-notification
>消息通知及提醒组件
`rsuite-notification` 提供了 `Alert` 和 `Nofity` 两个组件。`Alert` 用于消息提醒，`Notify` 用于通知及显示较多的文本。

# Alert 用法

* `Alert.success(content, duration, onClose)`
* `Alert.error(content, duration, onClose)`
* `Alert.info(content, duration, onClose)`

## Prop
Name | Type | Default | Description |
---- | ---- | ------- | ----------- |
content（必选）  | string | ReactDOM |  |  通知内容
duration  | number | 1.5 |  消息框持续时间
onClose | function | | 关闭回调函数


# 测试
运行测试用例：
```
npm run test
```

