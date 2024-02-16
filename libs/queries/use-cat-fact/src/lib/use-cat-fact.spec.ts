import { TestWrapper } from '@nx-expo-monorepo/queries/test-wrapper';
import { renderHook, waitFor } from '@testing-library/react-native';
import { useCatFact } from './use-cat-fact';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mockAxios = new MockAdapter(axios);

describe('useCatFact', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it('status should be success', async () => {
    // simulating a server response
    mockAxios.onGet().replyOnce(200, {
      fact: 'random cat fact',
    });

    const { result } = renderHook(() => useCatFact(), {
      wrapper: TestWrapper,
    });
    result.current.refetch(); // refetching the query
    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.data).toEqual('random cat fact');
  });

  it('status should be error', async () => {
    mockAxios.onGet().replyOnce(500);

    const { result } = renderHook(() => useCatFact(), {
      wrapper: TestWrapper,
    });
    result.current.refetch(); // refetching the query
    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(true);
  });
});
