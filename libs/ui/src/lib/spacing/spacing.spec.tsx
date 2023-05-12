import { render } from '@testing-library/react-native';
import React from 'react';

import Spacing from './spacing';

describe('Spacing', () => {
  it('should render successfully', () => {
    const { root } = render(
      <Spacing>
        <></>
      </Spacing>
    );
    expect(root).toBeTruthy();
  });
});
