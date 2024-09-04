import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartScreen from '../../screens/userscreen/startScreen/StartScreen';
import NameScreen from '../../screens/userscreen/NameScreen/NameScreen';
import OTPScreen from '../../screens/userscreen/OTPScreen/OTPScreen';
import UserDashboard from '../../screens/userscreen/userDashboard/UserDashboard';
import RequestCar from '../../screens/userscreen/RequestCar/RequestCar';
import Receipt from '../../screens/userscreen/Receipt/Receipt';
import Payment from '../../screens/userscreen/Payment/Payment';
import PaymentSuccess from '../../screens/userscreen/PaymentSuccess/PaymentSuccess';
const Stack = createNativeStackNavigator();

export const UserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="NameScreen" component={NameScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
      <Stack.Screen name="RequestCar" component={RequestCar} />
      <Stack.Screen name="Receipt" component={Receipt} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
    </Stack.Navigator>
  );
};
