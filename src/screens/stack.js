import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigator} from '../navigations/Appnavigator';
import SelectionType from './SelectionType';

const Stack = createNativeStackNavigator();

const NavigationInitial = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="selectionType">
      <Stack.Screen name="selectionType" component={SelectionType} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default NavigationInitial;
