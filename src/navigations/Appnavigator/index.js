import React from 'react';
import {DriverNavigator} from '../drivernavigator';
import {UserNavigator} from '../usernavigator';
import {useSelector} from 'react-redux';

export const AppNavigator = () => {
  const role = useSelector(state => state.userReducer?.role);

  console.log('role====>', role);

  return role == 'user' ? <UserNavigator /> : <DriverNavigator />;
};
