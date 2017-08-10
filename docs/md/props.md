### Alert
Name | Type | Default | Description |
---- | ---- | ------- | ----------- |
content（必选）  | string | |  通知内容
duration  | number | 1.5 |  消息框持续时间
onClose | function | | 关闭回调函数

### Notify
Name | Type | Default | Description |
---- | ---- | ------- | ----------- |
title（必选）  | string | |  标题
description（必选）  | string | 1.5 |  描述
duration  | number | 4.5 |  消息框持续时间
placement | string | topRight | 消息框的位置，共有四种位置 `topLeft`,`topRight`,`bottomLeft`,`bottomRight`
top | number | 24 | 消息框距离顶部的距离
bottom | number | 24 | 消息框距离底部的距离
onClose | function | | 关闭回调函数
style | object | | 自定义样式
key | string|number |  消息框唯一标识，如果要手动移除消息框，必须填写该字段


