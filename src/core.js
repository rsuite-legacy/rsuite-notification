// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Transition from 'rsuite-utils/lib/Animation/Transition';
import { prefix, createChainedFunction } from 'rsuite-utils/lib/utils';
import { namespace } from './constants/index';

import Notice from './notice';

let id = 0;
const getUid = () => {
  id += 1;
  return `${namespace}-notification-${Date.now()}-${id}`;
};

type Props = {
  className?: string,
  classPrefix?: string,
  style?: Object,
};

type State = {
  notices: Array<any>,
};

class Notification extends React.Component<Props, State> {
  static defaultProps = {
    classPrefix: `${namespace}-notification`,
    style: {
      top: '5px',
    },
  };
  static newInstance(properties?: Object) {
    const { getContainer, ...props } = properties || {};
    let div;
    if (getContainer) {
      div = getContainer();
    } else {
      div = document.createElement('div');
      document.body && document.body.appendChild(div);
    }

    const notificationComponent =
      ReactDOM.render(<Notification {...props} />, div) || null;

    return {
      notice(noticeProps: Object) {
        notificationComponent.add(noticeProps);
      },
      remove(key: string) {
        notificationComponent.remove(key);
      },
      component: notificationComponent,
      destroy() {
        ReactDOM.unmountComponentAtNode(div);
        document.removeChild(div);
      },
    };
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      notices: [],
    };
  }

  add = (notice: Object) => {
    const { notices } = this.state;
    let key;
    if (notice.key === undefined || notice.key === null) {
      key = getUid();
    } else {
      key = notice.key;
    }
    notice.key = key;
    if (!notices.filter((n: Object) => n.key === key).length) {
      this.setState({
        notices: notices.concat(notice),
      });
    }
  };

  remove = (key: string) => {
    this.setState((prevState: State) => {
      return {
        notices: prevState.notices.filter(notice => notice.key !== key),
      };
    });
  };

  addPrefix = (name: string) => prefix(this.props.classPrefix)(name);

  render() {
    const { notices } = this.state;
    const { className, style, classPrefix } = this.props;

    const noticeNodes = notices.map((notice: Object) => {
      return (
        <Notice
          classPrefix={classPrefix}
          {...notice}
          onClose={createChainedFunction(
            () => this.remove(notice.key),
            notice.onClose,
          )}
        />
      );
    });

    const classes = classNames(classPrefix, className);

    return (
      <Transition
        exitedClassName={this.addPrefix('fade-leaved')}
        enteredClassName={this.addPrefix('fade-entered')}
        enteringClassName={this.addPrefix('fade-enter-active')}
      >
        <div className={classes} style={style}>
          {noticeNodes}
        </div>
      </Transition>
    );
  }
}

export default Notification;
