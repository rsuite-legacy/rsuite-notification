import { Alert } from '../src';
import { delay, getStyle } from './utils';

const defaultTop = '10px';
Alert.config({
  duration: 2,
  top: defaultTop
});
describe(' Alert Component test suite', async() => {

  it('there ars two success Alert should be render, after 5s, there are gone', async () => {
    Alert.success('message');
    Alert.success('message');
    expect(document.querySelectorAll('.rsuite-notification-success').length).toBe(2);
    const style = getStyle('.rsuite-alert');
    expect(style.top).toBe(defaultTop);

    await delay(3000);
    expect(document.querySelectorAll('.rsuite-notification-success').length).toBe(0);
  }, 6000);

  it('error alert should be render', async () => {
    Alert.error('error message');
    expect(document.querySelectorAll('.rsuite-notification-error').length).toBe(1);
    await delay(3000);
    expect(document.querySelectorAll('.rsuite-notification-error').length).toBe(0);
  });

  it('info alert should be render', async () => {
    Alert.info('Info message');
    expect(document.querySelectorAll('.rsuite-notification-info').length).toBe(1);
    await delay(3000);
    expect(document.querySelectorAll('.rsuite-notification-info').length).toBe(0);
  });

  it('warning alert should be render', async () => {
    Alert.warning('Warning message');
    expect(document.querySelectorAll('.rsuite-notification-warning').length).toBe(1);
    await delay(3000);
    expect(document.querySelectorAll('.rsuite-notification-warning').length).toBe(0);
  });

});

