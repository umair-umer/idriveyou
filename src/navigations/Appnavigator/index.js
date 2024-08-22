import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DriverNavigator } from '../drivernavigator';
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={DriverNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
