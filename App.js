import React, {useEffect} from 'react';
import {AppNavigator} from './src/navigations/Appnavigator';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {StripeProvider} from '@stripe/stripe-react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StripeProvider
        publishableKey={
          'pk_test_51LNt6zKhmRit377zkPatzgi9ckH1GU0kWpMkAUNU3BX3VucekD9bkV6QFodRelAmt7vDAgoIdpYUeGtuGWfQlcWr00bTsqA7Dl'
        }>
        <AppNavigator />
      </StripeProvider>
    </NavigationContainer>
  );
};

export default App;
