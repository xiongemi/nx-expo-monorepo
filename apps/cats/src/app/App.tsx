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
import { IconButton, Button } from 'react-native-paper';

import Facts from '../facts/facts';
import Bookmarks from './bookmarks/bookmarks';
import { AppRoutes } from './app-routes';

const App = () => {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    transforms: [transformEntityStateToPersist],
  };
  const { store, persistor } = createRootStore(persistConfig);

  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();
  let edit = false;
  return (
    <PersistGate loading={<Loading />} persistor={persistor}>
      <StoreProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {Platform.OS === 'web' && <ReactQueryDevtools />}
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name={AppRoutes.catFacts}
                component={Facts}
                options={({ navigation }) => ({
                  headerRight: () => (
                    <IconButton
                      icon="lightbulb-multiple"
                      onPress={() => navigation.navigate(AppRoutes.bookmarks)}
                    />
                  ),
                })}
              />
              <Stack.Screen
                name={AppRoutes.bookmarks}
                component={Bookmarks}
                options={({ navigation }) => ({
                  headerRight: () => (
                    <Button
                      icon="bookmark-minus"
                      onPress={() => {
                        edit = !edit;
                        navigation.navigate(AppRoutes.bookmarks, {
                          edit,
                        });
                      }}
                    >
                      {edit ? 'Done' : 'Edit'}
                    </Button>
                  ),
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </QueryClientProvider>
      </StoreProvider>
    </PersistGate>
  );
};

export default App;
