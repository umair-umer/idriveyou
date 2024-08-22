import React,{useEffect} from 'react'
import { Text, View } from 'react-native'
import { AppNavigator } from './src/navigations/Appnavigator'
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => { SplashScreen.hide(); },[])
  return (
    <AppNavigator/>
  )
}

export default App