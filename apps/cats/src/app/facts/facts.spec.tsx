import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { RootState, initialRootState } from '@nx-expo-monorepo/states/cat';
import * as ReactQuery from '@tanstack/react-query';

import Facts from './facts';
import { Provider } from 'react-redux';

jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
  jest.fn().mockReturnValue({
    data: 'random cat fact',
    isLoading: false,
    isSuccess: true,
    refetch: jest.fn(),
    isFetching: false,
    isError: false,
  })
);

describe('Facts', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  it('should render successfully', () => {
    const { root } = render(
      <Provider store={store}>
        <Facts />
      </Provider>
    );
    expect(root).toBeTruthy();
  });
});
