import { Alert } from '../src';


describe(' Alert Component test suite', () => {

  it('there ars two Alert should be render', async () => {
    Alert.success('message');
    Alert.success('message');

    expect(document.querySelectorAll('.rsuite-notification-notice').length).toBe(2);
  });

  it('error alert should be render', async () => {
    Alert.error('error message');

    expect(document.querySelectorAll('.rsuite-notification-error').length).toBe(1);

  });
});

