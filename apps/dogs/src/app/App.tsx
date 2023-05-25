import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import {
  createRootStore,
  transformEntityStateToPersist,
} from '@nx-expo-monorepo/states/cat';
import { Loading } from '@nx-expo-monorepo/ui';
import { Provider as StoreProvider } from 'react-redux';
import { IconButton, PaperProvider } from 'react-native-paper';
import 'react-native-get-random-values'; // import for uuid

import Facts from './facts/facts';
import Bookmarks from './bookmarks/bookmarks';
import { AppRoutes } from './app-routes';
import { theme } from './theme';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [transformEntityStateToPersist],
  };
  const { store, persistor } = createRootStore(persistConfig);

  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  return (
    <PaperProvider theme={theme}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <StoreProvider store={store}>
          <QueryClientProvider client={queryClient}>
            {Platform.OS === 'web' && <ReactQueryDevtools />}
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name={AppRoutes.dogFacts}
                  component={Facts}
                  options={({ navigation }) => ({
                    headerRight: () => (
                      <IconButton
                        testID="bookmarks-button"
                        icon="lightbulb-multiple"
                        onPress={() => navigation.navigate(AppRoutes.bookmarks)}
                      />
                    ),
                  })}
                />
                <Stack.Screen
                  name={AppRoutes.bookmarks}
                  component={Bookmarks}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </QueryClientProvider>
        </StoreProvider>
      </PersistGate>
    </PaperProvider>
  );
};

export default App;
