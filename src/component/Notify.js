import React from 'react';
import classNames from 'classnames';
import { prefix } from 'rsuite-utils/lib/utils';

import Notification from '../core';
import { NOTICE_TYPES, PLACEMENT_TYPES, namespace } from '../constants/index';

let defaultPlacement = 'topRight';
let defaultTop = 24;
let defaultBottom = 24;
let defaultDuration = 4500;
let notityInstance = {};
let defaultClassPrefix = `${namespace}-notification`;
let getContainer;

const addPrefix = name => prefix(defaultClassPrefix)(name);

function getPlacementStyle(config) {
  let style = {};
  let className;
  const placement = config.placement || defaultPlacement;
  const top = config.top || defaultTop;
  const bottom = config.bottom || defaultBottom;

  switch (placement) {
    case PLACEMENT_TYPES.TOPLEFT:
      style = {
        top,
        left: 24,
      };
      className = addPrefix('top-left');
      break;
    case PLACEMENT_TYPES.TOPRIGHT:
      style = {
        top,
        right: 24,
      };
      className = addPrefix('top-right');
      break;
    case PLACEMENT_TYPES.BOTTOMLEFT:
      style = {
        bottom,
        left: 24,
      };
      className = addPrefix('bottom-left');
      break;
    case PLACEMENT_TYPES.BOTTOMRIGHT:
      style = {
        bottom,
        right: 24,
      };
      className = addPrefix('bottom-right');
      break;
    default:
      style = {
        top,
        left: 24,
      };
      break;
  }
  return { style, className };
}

function getInstance(config) {
  const placement = config.placement || defaultPlacement;
  if (!notityInstance[placement]) {
    let className = {
      [addPrefix('notify')]: true,
      [getPlacementStyle(config).className]: true,
    };
    notityInstance[placement] = Notification.newInstance({
      style: getPlacementStyle(config).style,
      className: classNames(className),
      classPrefix: defaultClassPrefix,
      getContainer,
    });
  }
  return notityInstance[placement];
}

/**
 *
 * @param {*} config: {} : title,description,style,duration,placement,top, bottom, onClose,type, key
 */
function notice(config) {
  let duration;
  let description = config.description;
  if (typeof description === 'function') {
    description = description();
  }
  if (config.duration === undefined) {
    duration = defaultDuration;
  } else {
    duration = config.duration;
  }

  let content = (
    <div className={addPrefix('content')}>
      <div className={addPrefix('title')}>{config.title}</div>
      <div className={addPrefix('description')}>{description}</div>
    </div>
  );
  let instance = getInstance(config);
  instance.notice({
    content,
    duration,
    closable: true,
    onClose: config.onClose,
    key: config.key,
    type: config.type,
    ...config,
  });
}

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
  },
  /**
   * 全局配置方法
   * @param {*} options{
   *  top,
   *  bottom,
   *  classPrefix,
   *  duration,
   *  getContainer
   * }
   */
  config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      // 如果存在实例，在设置新的top值后，需要将实例置空
      notityInstance = {};
    }
    if (options.bottom !== undefined) {
      defaultBottom = options.bottom;
      notityInstance = {};
    }
    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }

    if (options.classPrefix !== undefined) {
      defaultClassPrefix = options.classPrefix;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }
  },
};
