import React from 'react';
import { render } from '@testing-library/react-native';

import Carousel from './carousel';

describe('Carousel', () => {
  it('should render successfully', () => {
    const { container } = render(< Carousel />);
    expect(container).toBeTruthy();
  });
});
