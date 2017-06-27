```javascript
import React, { PropTypes } from 'react';

function handleOnChange(value){
  console.log('changed', value);
}
const Basic = props => (
  <RsuiteInputNumber
    defaultValue={8}
    value={9}
    step={1}
    max={10}
    min={0}
    onChange={handleOnChange}
  />
);
export default Basic;
```
