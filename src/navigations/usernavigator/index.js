import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../../screens/userscreen/startScreen/StartScreen';
import NameScreen from '../../screens/userscreen/NameScreen/NameScreen';
const Stack = createNativeStackNavigator();

export const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen}  />
      <Stack.Screen name="NameScreen" component={NameScreen}  />
    </Stack.Navigator>
  );
};
