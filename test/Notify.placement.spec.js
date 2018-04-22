import { Notify } from '../src';

let defaultPlacement = 'topRight';
let defaultTop = '24px';
let defaultBottom = '24px';
let placement = {
  topLeft: 'topLeft',
  topRight: 'topRight',
  bottomLeft: 'bottomLeft',
  bottomRight: 'bottomRight'
};

function getStyle(el) {
  return document.querySelector(el).style;
}

describe('Notify component placement test suite', () => {
  it('topLeft placement notify should be render', async () => {
    Notify.open({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      placement: placement.topLeft,
      key: 0
    });

    expect(document.querySelectorAll('.rs-notification-top-left.rs-notification-notify').length).toBe(1);
    const style = getStyle('.rs-notification-top-left');
    expect(style.top).toBe(defaultTop);
  });

  it('topRight placement notify should be render', async () => {
    Notify.open({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      placement: placement.topRight,
      key: 0
    });

    expect(document.querySelectorAll('.rs-notification-top-right.rs-notification-notify').length).toBe(1);
    const style = getStyle('.rs-notification-top-right');
    expect(style.top).toBe(defaultTop);
  });

  it('bottomLeft placement notify should be render', async () => {
    Notify.open({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      placement: placement.bottomLeft,
      key: 0
    });

    expect(document.querySelectorAll('.rs-notification-bottom-left.rs-notification-notify').length).toBe(1);
    const style = getStyle('.rs-notification-bottom-left');
    expect(style.bottom).toBe(defaultBottom);
  });

  it('bottomRight placement notify should be render', async () => {
    Notify.open({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      placement: placement.bottomRight,
      key: 0
    });

    expect(document.querySelectorAll('.rs-notification-bottom-right.rs-notification-notify').length).toBe(1);
    const style = getStyle('.rs-notification-bottom-right');
    expect(style.bottom).toBe(defaultBottom);
  });
});
