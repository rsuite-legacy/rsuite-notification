import Notification from './core';


let alertInstance;
let defaultDuration = 1.5;
let defaultTop;
let getContainer;

function getInstance(alertInstance) {
  return alertInstance || Notification.newInstance({
    top: defaultTop,
    duration: defaultDuration
  });
}

function notice(content, duration = defaultDuration, onClose, type) {
  let instance = getInstance();
  instance.notice({
    content,
    duration,
    onClose,
    type,
    closable: true
  });
}

export default {
  success(content, duration, onClose) {
    notice(content, duration, onClose, 'success');
  },
  error(content, duration, onClose) {
    notice(content, duration, onClose, 'error');
  },
  info(content, duration, onClose) {
    notice(content, duration, onClose, 'info');
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

