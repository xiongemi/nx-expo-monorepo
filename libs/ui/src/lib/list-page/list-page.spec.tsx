import React from 'react';
import { render } from '@testing-library/react-native';

import ListPage from './list-page';

describe('ListPage', () => {
  it('should render successfully', () => {
    const { root } = render(
      <ListPage
        editMode={false}
        onRemove={jest.fn()}
        onGoToDetails={jest.fn()}
        items={[]}
      />
    );
    expect(root).toBeTruthy();
  });
});
