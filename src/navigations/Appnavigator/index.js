import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DriverNavigator} from '../drivernavigator';
import StartScreen from '../../screens/userscreen/startScreen/StartScreen';
import {UserNavigator} from '../usernavigator';
const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const role = 'user';

  return role === 'user' ? <UserNavigator /> : <DriverNavigator />;
};
