import Notification from './core';


let defaultDuration = 3;
function getInstance(alertInstance) {
  return alertInstance || Notification.newInstance({});
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
  }
};

