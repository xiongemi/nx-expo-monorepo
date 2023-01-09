import React from 'react';
import { render } from '@testing-library/react-native';

import ActionButton from './action-button';

describe('ActionButton', () => {
  it('should render successfully', () => {
    const { container } = render(<ActionButton />);
    expect(container).toBeTruthy();
  });
});
