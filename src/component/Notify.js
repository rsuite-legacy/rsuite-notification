import React from 'react';
import Notification from '../core';
import { NOTICE_TYPES, PLACEMENT_TYPES } from '../constants/index';


let defaultPlacement = 'topRight';
let defaultTop = 24;
let defaultBottom = 24;
let defaultDuration = 4.5;
let notityInstance = {};

function getPlacementStyle(placement = defaultPlacement) {
  let style = {};
  switch (placement) {
    case PLACEMENT_TYPES.TOPLEFT:
      style = {
        top: defaultTop,
        left: 24,
      };
      break;
    case PLACEMENT_TYPES.TOPRIGHT:
      style = {
        top: defaultTop,
        right: 24,
      };
      break;
    case PLACEMENT_TYPES.BOTTOMLEFT:
      style = {
        bottom: defaultBottom,
        left: 24,
      };
      break;
    case PLACEMENT_TYPES.BOTTOMRIGHT:
      style = {
        bottom: defaultTop,
        right: 24,
      };
      break;
    default:
      style = {
        top: defaultTop,
        left: 24,
      };
      break;
  }
  return style;
}

function getInstance(placement = defaultPlacement) {
  if (!notityInstance[placement]) {
    notityInstance[placement] = Notification.newInstance({
      style: getPlacementStyle(placement),
      className: 'rsuite-notify',
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
  remove(key) {
    getInstance().remove(key);
  }
};
