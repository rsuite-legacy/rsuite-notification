```javascript
import React, { PropTypes } from 'react';
import RsuiteInputNumber from '../../src/index';

function handleOnChange(value){
  console.log('changed', value);
}
const PrefixAndPostfix = props => (
  <RsuiteInputNumber
    value={34}
    step={0.01}
    max={130}
    min={0}
    prefix='$'
    postfix='￥'
    onChange={handleOnChange}
  />
);
export default PrefixAndPostfix;

```
