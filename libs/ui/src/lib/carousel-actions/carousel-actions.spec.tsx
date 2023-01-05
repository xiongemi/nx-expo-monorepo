import React from 'react';
import { render } from '@testing-library/react-native';

import CarouselActions from './carousel-actions';

describe('CarouselActions', () => {
  it('should render successfully', () => {
    const { container } = render(
      <CarouselActions close={jest.fn} like={jest.fn} previous={jest.fn} />
    );
    expect(container).toBeTruthy();
  });
});
