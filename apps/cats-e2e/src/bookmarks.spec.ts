import { device, element, by, expect } from 'detox';

describe('Bookmarks', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should view bookmarks', async () => {
    await waitFor(element(by.id('Cat Facts')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('like-button'))).toBeVisible();
    await element(by.id('like-button')).tap();

    await expect(element(by.id('carousel-card'))).toBeVisible();
    await expect(element(by.id('carousel-card-content'))).toBeVisible();
    await expect(element(by.id('carousel-text'))).toBeVisible();
    const carouselText = await element(by.id('carousel-text')).getAttributes();

    await element(by.id('bookmarks-button')).tap();
    await element(by.id('Bookmarks')).tap();
    await element(by.id('bookmarks-page')).tap();
  });
});
