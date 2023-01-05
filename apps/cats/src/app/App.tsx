import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Facts from './facts/facts';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cat Facts" component={Facts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
