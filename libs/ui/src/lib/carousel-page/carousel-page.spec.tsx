import React from 'react';
import { render } from '@testing-library/react-native';

import CarouselPage from './carousel-page';

describe('CarouselPage', () => {
  it('should render successfully', () => {
    const { root } = render(
      <CarouselPage
        onReload={jest.fn()}
        isLoading={false}
        isSuccess={true}
        isError={false}
        children={<></>}
      ></CarouselPage>
    );
    expect(root).toBeTruthy();
  });
});
