[![Travis](https://img.shields.io/travis/rsuite/rsuite-inputnumber.svg)](https://travis-ci.org/rsuite/rsuite-inputnumber) [![npm](https://img.shields.io/npm/v/rsuite-inputnumber.svg)](https://www.npmjs.com/package/rsuite-inputnumber)
# rsuite-inputnumber 数字输入框
通过鼠标或键盘，输入范围内的数值。

# 快速开始
### 安装
```
npm install rsuite-inputnumber --save
```
**示例**

```javascript
import React, { PropTypes } from 'react';
import RsuiteInputNumber from '../../src/index';

function handleOnChange(value){
  console.log('changed', value);
}
const Basic = props => (
  <RsuiteInputNumber
    defaultValue={34}
    step={1}
    max={10}
    min={0}
    onChange={handleOnChange}
  />
);
export default Basic;

```

# Props

Name | Type | Default | Description |
---- | ---- | ------- | ----------- |
min  | number | `Number.MIN_SAFE_INTEGER` |  最小值
max  | number | `Number.MAX_SAFE_INTEGER` |  最大值
step | number | 1 | 每次改变步数，可以为小数
defaultValue | number |  | 默认值
value | number |  | inputNumber 的值
prefix | string |  | 前缀
postfix | string | | 后缀
disabled | bool | false | 是否禁用
onChange | func |  | onChange 回调函数

# 测试
运行测试用例：
```
npm run test
```

