import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

export interface TestWrapperProps {
  children: React.ReactNode;
}

export function TestWrapper({ children }: TestWrapperProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TestWrapper;
