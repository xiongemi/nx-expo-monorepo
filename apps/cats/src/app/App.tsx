import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Platform } from 'react-native';
import Facts from './facts/facts';

const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {Platform.OS === 'web' && <ReactQueryDevtools />}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Cat Facts" component={Facts} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
