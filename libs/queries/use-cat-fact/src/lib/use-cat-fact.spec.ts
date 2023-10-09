import { TestWrapper } from '@nx-expo-monorepo/queries/test-wrapper';
import { renderHook, waitFor } from '@testing-library/react-native';
import { useCatFact } from './use-cat-fact';
import fetchMock from 'jest-fetch-mock';

describe('useCatFact', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('status should be success', async () => {
    // simulating a server response
    fetchMock.mockResponseOnce(JSON.stringify({
      fact: 'random cat fact',
    }));

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
   fetchMock.mockRejectOnce();

    const { result } = renderHook(() => useCatFact(), {
      wrapper: TestWrapper,
    });
    result.current.refetch(); // refetching the query
    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => expect(result.current.isLoading).toBe(false));
    expect(result.current.isError).toBe(true);
  });
});
