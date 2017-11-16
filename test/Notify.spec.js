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
    await delay(1000);
    expect(document.querySelectorAll('.rsuite-notification-notice').length).toBe(1);
    Notify.remove(1);
    await delay(1000);
    expect(document.querySelectorAll('.rsuite-notification-notice').length).toBe(0);
  });

  it('success notify should be render', async () => {
    Notify.success({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 0
    });
    expect(document.querySelectorAll('.rsuite-notification-success').length).toBe(1);

    Notify.remove(0);
    await delay(1000);
    expect(document.querySelectorAll('.rsuite-notification-success').length).toBe(0);
  });
});

