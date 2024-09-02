import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {AppNavigator} from './src/navigations/Appnavigator';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
