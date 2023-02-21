import React from 'react';
import { render } from '@testing-library/react-native';

import ListPage from './list-page';

describe('ListPage', () => {
  it('should render successfully', () => {
    const { container } = render(<ListPage />);
    expect(container).toBeTruthy();
  });
});
