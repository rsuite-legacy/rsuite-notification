import React from 'react';
import { shallow } from 'enzyme';
import { Notify } from '../src';

const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout));

describe(' Notify Component', () => {

  it('there ars two notifiy should be render', async () => {
    Notify.open({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 0
    });
    Notify.open({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 1
    });

    expect(document.querySelectorAll('.rsuite-notification-notice').length).toBe(2);

    Notify.remove(0);
    // TODO timeout 时间太短=100，会导致remove事件尚未生效 为什么？
    await delay(1000);
    expect(document.querySelectorAll('.rsuite-notification-notice').length).toBe(1);
    Notify.remove(1);
    await delay(1000);
    expect(document.querySelectorAll('.rsuite-notification-notice').length).toBe(0);
  });
});

