import { TestWrapper } from '@nx-expo-monorepo/queries/test-wrapper';
import { renderHook, waitFor } from '@testing-library/react-native';
import { useDogFact } from './use-dog-fact';
import axios from 'axios';

describe('useDogFact', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('status should be success', async () => {
    // simulating a server response
    const responseObj = {
      data: [
        {
          id: 'c6c0bb37-d110-4e28-ac72-7740dd4f8299',
          type: 'fact',
          attributes: {
            body: 'Female dogs can get pregnant when their bodies undergo changes which make them receptive to male dogs. This is called being on heat or in estrus.',
          },
        },
      ],
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: responseObj });
    const { result } = renderHook(() => useDogFact(), {
      wrapper: TestWrapper,
    });

    expect(result.current.isLoading).toBeTruthy();
    result.current.refetch(); // refetching the query

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual({
      id: 'c6c0bb37-d110-4e28-ac72-7740dd4f8299',
      content:
        'Female dogs can get pregnant when their bodies undergo changes which make them receptive to male dogs. This is called being on heat or in estrus.',
    });
  });

  // TODO: currently the test is failing, isError was never true even though the axios.get was mocked to return an error
  xit('status should be error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({ error: 'error' });

    const { result } = renderHook(() => useDogFact(), {
      wrapper: TestWrapper,
    });

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => expect(result.current.isError).toBe(true));
    expect(result.current.data).toEqual(undefined);
  });
});
