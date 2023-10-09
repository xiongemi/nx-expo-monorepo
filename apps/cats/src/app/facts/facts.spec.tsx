import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { RootState, initialRootState } from '@nx-expo-monorepo/states/cat';
import fetchMock from 'jest-fetch-mock';

import Facts from './facts';
import { Provider } from 'react-redux';
import { TestWrapper } from '@nx-expo-monorepo/queries/test-wrapper';

describe('Facts', () => {
  const mockStore = configureStore<RootState>([]);

  let store: MockStoreEnhanced<RootState>;

  beforeEach(() => {
    store = mockStore(initialRootState);
    store.dispatch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render successfully', async () => {
    // simulating a server response
    fetchMock.mockResponseOnce(
      JSON.stringify({
        fact: 'random cat fact',
      })
    );
    const { root, findByTestId } = render(
      <Provider store={store}>
        <Facts />
      </Provider>,
      {
        wrapper: TestWrapper,
      }
    );
    expect(root).toBeTruthy();
    expect(findByTestId('carousel-loading')).toBeTruthy();
    await waitFor(() =>
      expect(findByTestId('carousel-card-content')).toBeTruthy()
    );
  });
});
