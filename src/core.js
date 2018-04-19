// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Transition } from 'rsuite-utils/lib/Animation';
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
  animated: boolean,
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
      animated: false,
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
    notice.animated = true;
    if (!notices.filter((n: Object) => n.key === key).length) {
      this.setState({
        notices: notices.concat(notice),
      });
    }
  };

  remove = (key: string) => {
    const { notices } = this.state;
    const nextNotices = notices.map(n => {
      if (n.key === key) {
        n.animated = false;
      }
      return n;
    });
    this.setState(
      {
        notices: nextNotices,
      },
      () => {
        setTimeout(() => {
          this.actualRemove(key);
        }, 1000);
      },
    );
  };

  actualRemove = (key: string) => {
    this.setState((prevState: State) => {
      return {
        notices: prevState.notices.filter(notice => notice.key !== key),
      };
    });
  };

  addPrefix = (name: string | Array<any>) =>
    prefix(this.props.classPrefix)(name);

  render() {
    const { notices } = this.state;
    const { className, style, classPrefix } = this.props;

    const noticeNodes = notices.map((notice: Object) => {
      return (
        <Transition
          key={notice.key}
          in={notice.animated}
          exitedClassName={this.addPrefix('fade-exited')}
          exitingClassName={this.addPrefix(['fade-entered', 'fade-leave-active'])}
          enteringClassName={this.addPrefix('fade-entering')}
          enteredClassName={this.addPrefix('fade-entered')}
          timeout={300}
        >
          <Notice
            classPrefix={classPrefix}
            {...notice}
            onClose={createChainedFunction(
              () => this.remove(notice.key),
              notice.onClose,
            )}
          />
        </Transition>
      );
    });

    const classes = classNames(classPrefix, className);
    return (
      <div className={classes} style={style}>
        {noticeNodes}
      </div>
    );
  }
}

export default Notification;
