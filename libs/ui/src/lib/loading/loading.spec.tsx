import { render } from '@testing-library/react-native';
import React from 'react';

import Loading from './loading';

describe('Loading', () => {
  it('should render successfully', () => {
    const { root } = render(<Loading />);
    expect(root).toBeTruthy();
  });
});
