import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export interface TestWrapperProps {
  children: JSX.Element;
}

export function TestWrapper({ children }: TestWrapperProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TestWrapper;
