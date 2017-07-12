import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';
import chain from './utils/createChainedFunction';
// import Animate from 'rc-animate';

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
  animation: 'fade',
  style: {
    top: '5px',
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

  add = (notice) => {
    const { notices } = this.state;
    let key;
    if (notice.key !== undefined || notice.key !== null) {
      key = notice.key;
    } else {
      key = getUid();
    }
    notice.key = key;
    if (!notices.filter(notice => notice.key === key).length) {
      this.setState({
        notices: notices.concat(notice)
      });
    }
  }

  remove = (key) => {
    // console.log(this.state.notices.filter(notice => notice.key !== key));
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
    const transitionName = `${this.state.prefixCls}-${this.props.animation}`;
    return (
      <div className={classnames(classNames)} style={style}>
        <ReactCSSTransitionGroup
          transitionName={transitionName}
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}
        >
          {noticeNodes}
        </ReactCSSTransitionGroup>
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
