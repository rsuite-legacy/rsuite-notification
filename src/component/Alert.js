import Notification from '../core';
import { NOTICE_TYPES } from '../constants/index';

let alertInstance;
let defaultDuration = 1.5;
let defaultTop;
let getContainer;

function getInstance(alertInstance) {
  return alertInstance || Notification.newInstance({
    style: { top: defaultTop },
    duration: defaultDuration,
    className: 'rsuite-alert'
  });
}

function notice(content, duration = defaultDuration, onClose, type) {
  alertInstance = getInstance(alertInstance);
  alertInstance.notice({
    content,
    duration,
    onClose,
    type,
    closable: true
  });
}

export default {
  success(content, duration, onClose) {
    notice(content, duration, onClose, NOTICE_TYPES.SUCCESS);
  },
  error(content, duration, onClose) {
    notice(content, duration, onClose, NOTICE_TYPES.ERROR);
  },
  info(content, duration, onClose) {
    notice(content, duration, onClose, NOTICE_TYPES.INFO);
  },
  /**
   *
   * @param {*} options{
   *  top,
   *  duration,
   *  getContainer
   * }
   */
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      alertInstance = null;
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }
    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  }
};

