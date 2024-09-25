import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feather from 'react-native-vector-icons/Feather';
import DriverLoginScreen from '../../screens/driverscreen/login';
import Selectcityscreen from '../../screens/driverscreen/selectcity';
import Drivinglicensescreen from '../../screens/driverscreen/driverregisterion';
import Vehicleinformaion from '../../screens/driverscreen/vechalinformation';
import InappNavigationscreen from '../../screens/driverscreen/inappnavigation';
import CreatingProfile from '../../screens/driverscreen/creatingprofile';
import { Getstarted } from '../../screens/driverscreen/getstartedscreen';
import UserOtpscreen from '../../screens/driverscreen/otpscreen';
import Addusernamescreen from '../../screens/driverscreen/adduseernamescreen';
import BudgetScreen from '../../screens/driverscreen/budgetscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DRiverHome } from '../../screens/driverscreen/homescreen';
import Experiencscreen from '../../screens/driverscreen/experinceescreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import CusTomDrawer from '../customedrawer';
import Settingscreen from '../../screens/driverscreen/settingscreen';
import SElectstate from '../../screens/driverscreen/selectstate';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
export const DriverNavigator = () => {
  
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
      
        <Stack.Screen name="getstart" component={Getstarted} />
     
   <Stack.Screen name="DRAWER" component={DriverDrawerNavigator} /> 
         <Stack.Screen name="loginD" component={DriverLoginScreen} />
        <Stack.Screen name="otp" component={UserOtpscreen} />
        <Stack.Screen name="addusername" component={Addusernamescreen} />
        <Stack.Screen name="cityselect" component={Selectcityscreen} />  
        <Stack.Screen name="stateselect" component={SElectstate} />  
        <Stack.Screen name="budget" component={BudgetScreen} />  
        <Stack.Screen name="drivinglicense" component={Drivinglicensescreen} />  
        <Stack.Screen name="expscreen" component={Experiencscreen} />  
        
        <Stack.Screen name="setting" component={Settingscreen} />  
        {/* <Stack.Screen name="vechalinformation" component={Vehicleinformaion} />   */}
        {/* <Stack.Screen name="appnavigationscreen" component={InappNavigationscreen} />   */}
        {/* <Stack.Screen name="Creatingprofile" component={CreatingProfile} />   */}
        
        
      </Stack.Navigator>
  
  )
}
const DriverDrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{headerShown: false}}
      drawerContent={props => <CusTomDrawer {...props} />}
    
    >
      <Drawer.Screen name="DriverHome" component={BotomTabnavigation} />
      {/* Add other Drawer screens here */}
    </Drawer.Navigator>
  );
};




const BotomTabnavigation = () => {
  return (
  
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#A1D2FF',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#60B3FF',
          borderTopWidth: 0,
          elevation: 5,
          height: 60,
          paddingBottom: 10,
          borderTopLeftRadius:30,
          borderTopRightRadius:30
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      
      >
        <Tab.Screen name="map" component={DRiverHome} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="map" size={size} color={color} />
          ),
        }}
        
        
        />
      {/* <Stack.Screen name="setting" component={Settingscreen} /> */}

        {/* <Tab.Screen name="Message" component={Message} /> */}
     
      </Tab.Navigator>
 
  );
}


