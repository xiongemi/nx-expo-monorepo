import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export const QueryClientDecorator = (story: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
  );
};

export default QueryClientDecorator;
