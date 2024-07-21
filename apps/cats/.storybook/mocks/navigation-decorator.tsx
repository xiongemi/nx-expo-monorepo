import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export const NavigationDecorator = (story: any) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="MyStorybookScreen"
          component={story}
          initialParams={{ id: 123 }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
