import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  duration: PropTypes.number,
  content: PropTypes.any,
  onClose: PropTypes.func
};

const defaultProps = {};

class Notice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { duration } = this.props;
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration * 1000);
    }
  }

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.clearCloseTimer);
      this.clearCloseTimer = null;
    }
  }

  close = () => {
    this.clearCloseTimer();
    this.props.onClose();
  }

  render() {
    const { prefixCls, closable, className, content, style } = this.props;
    const componentClass = `${prefixCls}-notice`;
    const classNames = {
      [`${componentClass}`]: true,
      [`${componentClass}-closable`]: closable,
      [className]: !!className
    };

    return (
      <div className={classnames(classNames)} style={style}>
        <div className={`${componentClass}-content`}>{content}</div>
        {closable && <a onClick={this.close} className={`${componentClass}-close`}>
          <span className={`${componentClass}-close-x`}></span>
        </a>}
      </div>
    );
  }
}

Notice.propTypes = propTypes;

Notice.defaultProps = defaultProps;

export default Notice;
