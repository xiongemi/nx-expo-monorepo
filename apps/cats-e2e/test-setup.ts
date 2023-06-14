import { device } from 'detox';

beforeAll(async () => {
  await device.launchApp({ newInstance: false });
});

afterAll(async () => {
  await device.sendToHome();
  await device.launchApp({ newInstance: false });
});
