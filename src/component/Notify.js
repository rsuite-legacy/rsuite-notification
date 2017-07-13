import React from 'react';
import classnames from 'classnames';
import Notification from '../core';
import { NOTICE_TYPES, PLACEMENT_TYPES } from '../constants/index';


let defaultPlacement = 'topRight';
let defaultTop = 24;
let defaultBottom = 24;
let defaultDuration = 4.5;
let notityInstance = {};

function getPlacementStyle(placement = defaultPlacement) {
  let style = {};
  let className;
  switch (placement) {
    case PLACEMENT_TYPES.TOPLEFT:
      style = {
        top: defaultTop,
        left: 24,
      };
      className = 'rsuite-topLeft';
      break;
    case PLACEMENT_TYPES.TOPRIGHT:
      style = {
        top: defaultTop,
        right: 24,
      };
      className = 'rsuite-topRight';
      break;
    case PLACEMENT_TYPES.BOTTOMLEFT:
      style = {
        bottom: defaultBottom,
        left: 24,
      };
      className = 'rsuite-bottomLeft';
      break;
    case PLACEMENT_TYPES.BOTTOMRIGHT:
      style = {
        bottom: defaultTop,
        right: 24,
      };
      className = 'rsuite-bottomRight';
      break;
    default:
      style = {
        top: defaultTop,
        left: 24,
      };
      break;
  }
  return { style, className };
}

function getInstance(placement = defaultPlacement) {
  if (!notityInstance[placement]) {
    let className = {
      'rsuite-notify': true,
      [getPlacementStyle(placement).className]: true
    }
    notityInstance[placement] = Notification.newInstance({
      style: getPlacementStyle(placement).style,
      className: classnames(className),
    });
  }
  return notityInstance[placement];
}

/**
 *
 * @param {*} config : title,description,style,duration,placement,top, bottom, onClose,type, key
 */
function notice(config) {
  let duration;

  if (config.duration === undefined) {
    duration = defaultDuration;
  } else {
    duration = config.duration;
  }

  if (config.top !== undefined) {
    defaultTop = config.top;
  }

  if (config.bottom !== undefined) {
    defaultBottom = config.bottom;
  }

  if (config.placement !== undefined) {
    defaultPlacement = config.placement;
  }

  let content = (
    <div className="notify">
      <div className="title">{config.title}</div>
      <div className="description">{config.description}</div>
    </div>
  );
  let instance = getInstance(config.placement);
  instance.notice({
    content,
    duration,
    closable: true,
    onClose: config.onClose,
    key: config.key,
    type: config.type
  });
};

export default {
  open(config) {
    notice(config);
  },
  success(config) {
    config.type = NOTICE_TYPES.SUCCESS;
    notice(config);
  },
  error(config) {
    config.type = NOTICE_TYPES.ERROR;
    notice(config);
  },
  info(config) {
    config.type = NOTICE_TYPES.INFO;
    notice(config);
  },
  warning(config) {
    config.type = NOTICE_TYPES.WARNING;
    notice(config);
  },
  remove(key) {
    if (notityInstance[defaultPlacement]) {
      notityInstance[defaultPlacement].remove(key);
    }
  }
};
