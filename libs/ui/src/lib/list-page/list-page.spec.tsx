import React from 'react';
import { render } from '@testing-library/react-native';

import ListPage from './list-page';

describe('ListPage', () => {
  it('should render successfully', () => {
    const { container } = render(
      <ListPage
        title="List Page"
        editMode={false}
        onRemove={jest.fn()}
        onGoToDetails={jest.fn()}
        items={[]}
      />
    );
    expect(container).toBeTruthy();
  });
});
