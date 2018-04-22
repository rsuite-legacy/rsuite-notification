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

    expect(document.querySelectorAll('.rs-notification-notice').length).toBe(2);

    Notify.remove(0);
    await delay(1000);
    expect(document.querySelectorAll('.rs-notification-notice').length).toBe(1);
    Notify.remove(1);
    await delay(1000);
    expect(document.querySelectorAll('.rs-notification-notice').length).toBe(0);
  });

  it('success notify should be render', async () => {
    Notify.success({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 0
    });
    expect(document.querySelectorAll('.rs-notification-success').length).toBe(1);

    Notify.remove(0);
    await delay(1000);
    expect(document.querySelectorAll('.rs-notification-success').length).toBe(0);
  });

  it('success notify should be render, after 2s, it is gone', async () => {
    Notify.success({
      title: 'Notify',
      description: 'desc',
      duration: 2,
      key: 0
    });
    expect(document.querySelectorAll('.rs-notification-success').length).toBe(1);

    await delay(3000);
    expect(document.querySelectorAll('.rs-notification-success').length).toBe(0);
  });

  it('error notify should be render', async () => {
    Notify.error({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 0
    });
    expect(document.querySelectorAll('.rs-notification-error').length).toBe(1);

    Notify.remove(0);
    await delay(1000);
    expect(document.querySelectorAll('.rs-notification-error').length).toBe(0);
  });

  it('info notify should be render', async () => {
    Notify.info({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 0
    });
    expect(document.querySelectorAll('.rs-notification-info').length).toBe(1);

    Notify.remove(0);
    await delay(1000);
    expect(document.querySelectorAll('.rs-notification-info').length).toBe(0);
  });

  it('warning notify should be render', async () => {
    Notify.warning({
      title: 'Notify',
      description: 'desc',
      duration: 0,
      key: 0
    });
    expect(document.querySelectorAll('.rs-notification-warning').length).toBe(1);

    Notify.remove(0);
    await delay(1000);
    expect(document.querySelectorAll('.rs-notification-warning').length).toBe(0);
  });


});

