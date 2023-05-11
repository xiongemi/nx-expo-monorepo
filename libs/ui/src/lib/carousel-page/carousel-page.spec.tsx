import React from 'react';
import { render } from '@testing-library/react-native';

import CarouselPage from './carousel-page';

describe('CarouselPage', () => {
  it('should render successfully', () => {
    const { root } = render(<CarouselPage />);
    expect(root).toBeTruthy();
  });
});
