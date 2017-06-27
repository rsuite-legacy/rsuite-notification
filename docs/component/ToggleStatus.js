import React, { Component } from 'react';
import RsuiteInputNumber from '../../src/index';

function handleOnChange(value) {
  console.log('changed', value);
}

class ToggleStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };
  }

  handleToggle = (e) => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  render() {
    return (
      <div>
        <RsuiteInputNumber
          value={0.03}
          step={0.01}
          max={0.1}
          min={-0.1}
          disabled={this.state.disabled}
          onChange={handleOnChange}
        />
        <p></p>
        <button className="btn btn-default btn-primary" onClick={this.handleToggle}>toggle disabled</button>
      </div>
    );
  }
}

export default ToggleStatus;
