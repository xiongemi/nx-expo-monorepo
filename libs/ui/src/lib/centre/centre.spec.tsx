import { render } from '@testing-library/react-native';
import React from 'react';

import Centre from './centre';

describe('Centre', () => {
  it('should render successfully', () => {
    const { root } = render(<Centre>Hello</Centre>);
    expect(root).toBeTruthy();
  });
});
