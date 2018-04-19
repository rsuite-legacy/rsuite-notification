// @flow
import * as React from 'react';
import classNames from 'classnames';
import { prefix } from 'rsuite-utils/lib/utils';

type Props = {
  duration: number,
  content: any,
  onClose?: () => void,
  closable?: boolean,
  classPrefix: string,
  className?: string,
  style?: Object,
  type?: string,
};

class Notice extends React.Component<Props> {
  componentDidMount() {
    const { duration } = this.props;
    if (duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, duration);
    }
  }

  componentWillUnmount() {
    this.clearCloseTimer();
  }

  clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }

  close = () => {
    const { onClose } = this.props;
    this.clearCloseTimer();
    onClose && onClose();
  };

  addPrefix = (name: string) => prefix(this.props.classPrefix)(name);

  closeTimer = null;

  render() {
    const {
      classPrefix,
      closable,
      className,
      content,
      style,
      type = '',
    } = this.props;
    const noticeClass = this.addPrefix('notice');
    const wrapperClass = classNames(className, `${noticeClass}-wrapper`);
    const classes = classNames(noticeClass, {
      [this.addPrefix('notice-closable')]: closable,
      [`${classPrefix}-${type}`]: !!type,
    });

    return (
      <div className={wrapperClass}>
        <div className={classes} style={style}>
          <div className={`${noticeClass}-content`}>{content}</div>
          {closable && (
            <div
              role="button"
              tabIndex="-1"
              onClick={this.close}
              className={`${noticeClass}-close`}
            >
              <span className={`${noticeClass}-close-x`} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Notice;
