import React from 'react';
import { render } from '@testing-library/react-native';

import TestWrapper from './test-wrapper';

describe('TestWrapper', () => {
  it('should render successfully', () => {
    const { container } = render(
      <TestWrapper>
        <>test</>
      </TestWrapper>
    );
    expect(container).toBeTruthy();
  });
});
