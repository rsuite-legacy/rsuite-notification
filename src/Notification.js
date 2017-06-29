import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import chain from 'createChainedFunction';
import Notice from './Notice';

let id = 0;
const getUid = () => {
  return `rsuite-noticition-${Date.now()}-${id++}`;
};

const propTypes = {
  prefixCls: PropTypes.string,
  transitionName: PropTypes.string,
  animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  style: PropTypes.object
};

const defaultProps = {
  prefixCls: 'rsuite-notification',
  animation: 'move-up',
  style: {
    top: '50px',
    left: '50%'
  }
};

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notices: []
    };
  }

  add = (notice) => {
    const { notices } = this.state;
    const key = notice.key = notice.key || getUid();
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
    const { notices } = this.state;

    const noticeNodes = notices.map((notice) => {
      return <Notice
        prefixCls={this.props.prefixCls}
        {...notice}
        onClose={chain(this.remove.bind(null, notice.key), notice.onClose)}
      />;
    });

    const className = {
      [props.prefixCls]: true,
      [className]: !!props.className
    };

    return (
      <div className={className} style={props.style}>
        {noticeNodes}
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
