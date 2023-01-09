import { TestWrapper } from '@nx-expo-monorepo/queries/test-wrapper';
import { renderHook } from '@testing-library/react-hooks';
import MockAxios from 'jest-mock-axios';
import { useCatFact } from './use-cat-fact';

describe('useCatFact', () => {
  beforeEach(() => {
    MockAxios.reset();
  });

  it('status should be success', async () => {
    const { result, waitFor } = renderHook(() => useCatFact(), {
      wrapper: TestWrapper,
    });

    expect(MockAxios.get).toHaveBeenCalled();
    // simulating a server response
    const responseObj = { data: { fact: 'random cat fact' } };
    MockAxios.mockResponse(responseObj);

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data).toEqual('random cat fact');
  });

  it('status should be error', async () => {
    const { result, waitFor } = renderHook(() => useCatFact(), {
      wrapper: TestWrapper,
    });

    expect(MockAxios.get).toHaveBeenCalled();
    // simulating a server error
    MockAxios.mockResponse({ status: 404, data: 'error' });

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => result.current.isError);
    expect(result.current.data).toEqual(undefined);
  });
});
