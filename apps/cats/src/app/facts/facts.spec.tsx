import React from 'react';
import { render } from '@testing-library/react-native';

import Facts from './facts';

describe('Facts', () => {
  it('should render successfully', () => {
    const { container } = render(< Facts />);
    expect(container).toBeTruthy();
  });
});
