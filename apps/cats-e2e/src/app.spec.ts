import { device, element, by, expect } from 'detox';

describe('Cats', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display carousel', async () => {
    await waitFor(element(by.id('carousel-card')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('carousel-content'))).toBeVisible();
  });
});
