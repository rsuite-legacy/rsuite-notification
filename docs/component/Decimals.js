import React, { PropTypes } from 'react';
import RsuiteInputNumber from '../../src/index';

function handleOnChange(value){
  console.log('changed', value);
}
const Decimals = props => (
  <RsuiteInputNumber
    value={0.03}
    step={0.01}
    max={0.1}
    min={-0.1}
    onChange={handleOnChange}
  />
);
export default Decimals;
