import { TestWrapper } from '@nx-expo-monorepo/queries/test-wrapper';
import { renderHook, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import { useDogFact } from './use-dog-fact';

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
    // simulating a server response
    fetchMock.mockResponse(JSON.stringify(responseObj));
    const { result } = renderHook(() => useDogFact(), {
      wrapper: TestWrapper,
    });

    result.current.refetch(); // refetching the query
    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual({
      id: 'c6c0bb37-d110-4e28-ac72-7740dd4f8299',
      content:
        'Female dogs can get pregnant when their bodies undergo changes which make them receptive to male dogs. This is called being on heat or in estrus.',
    });
  });

  it('status should be error', async () => {
    const response = new Response(null, {
      status: 401,
    });
    fetchMock.mockReturnValueOnce(Promise.resolve(response));

    const { result } = renderHook(() => useDogFact(), {
      wrapper: TestWrapper,
    });

    try {
      result.current.refetch();
    } catch (actual) {
      expect(actual).toEqual(response);
    }
  });
});
