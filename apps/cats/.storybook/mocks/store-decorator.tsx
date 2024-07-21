import { initialRootState, RootState } from '@nx-expo-monorepo/states/cat';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from 'redux-mock-store';

export const getStoreDecorator =
  (mockRootState: RootState = initialRootState) =>
  (story: any) => {
    const mockStore = configureStore<RootState>([]);
    const store = mockStore(mockRootState);
    return <StoreProvider store={store}>{story}</StoreProvider>;
  };
