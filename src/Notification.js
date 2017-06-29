import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import chain from './utils/createChainedFunction';
import Animate from 'rc-animate';
import classnames from 'classnames';
import Notice from './Notice';

let id = 0;
const getUid = () => {
  return `rsuite-noticition-${Date.now()}-${id++}`;
};

const propTypes = {
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object
};

const defaultProps = {
  animation: 'move-up',
  style: {
    top: '5px',
    left: '50%'
  }
};

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefixCls: 'rsuite-notification',
      notices: []
    };
  }

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${this.state.prefixCls}-${props.animation}`;
    }
    return transitionName;
  }

  add = (notice, type) => {
    const { notices } = this.state;
    const key = notice.key = notice.key || getUid();
    notice.type = type;
    if (!notices.filter(notice => notice.key === key).length) {
      this.setState({
        notices: notices.concat(notice)
      });
    }
  }

  remove = (key) => {
    this.setState((prevState) => {
      return {
        notices: prevState.notices.filter(notice => notice.key !== key)
      };
    });
  }

  render() {
    const { notices, prefixCls } = this.state;
    const { className, style } = this.props;

    const noticeNodes = notices.map((notice) => {
      return <Notice
        prefixCls={this.state.prefixCls}
        {...notice}
        onClose={chain(this.remove.bind(null, notice.key), notice.onClose)}
      />;
    });

    const classNames = {
      [prefixCls]: true,
      [className]: !!className
    };
    const animateProps = {};
    if (this.state.notices.length <= 1) {
      animateProps.component = '';
    }

    return (
      <div className={classnames(classNames)} style={style}>
        <Animate transitionName={this.getTransitionName()} {...animateProps} >{noticeNodes}</Animate>
      </div>
    );
  }
}

Notification.propTypes = propTypes;

Notification.defaultProps = defaultProps;

Notification.newInstance = function newNotificationInstance(properties) {
  const { getContainer, ...props } = properties || {};
  let div;
  if (getContainer) {
    div = getContainer();
  } else {
    div = document.createElement('div');
    document.body.appendChild(div);
  }

  const notificationComponent = ReactDOM.render(<Notification {...props} />, div);

  return {
    success(noticeProps) {
      notificationComponent.add(noticeProps, 'success');
    },
    error(noticeProps) {
      notificationComponent.add(noticeProps, 'error');
    },
    info(noticeProps) {
      notificationComponent.add(noticeProps, 'info');
    },
    notice(noticeProps) {
      notificationComponent.add(noticeProps);
    },
    remove(key) {
      notificationComponent.remove(key);
    },
    component: notificationComponent,
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.removeChild(div);
    }
  };
};

export default Notification;
