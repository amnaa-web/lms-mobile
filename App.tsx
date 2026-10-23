import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './src/navigation/AppNavigator';

export default function App() {
  return <NavigationContainer><StatusBar barStyle="dark-content" backgroundColor="#F7F9FC"/><AppNavigator/></NavigationContainer>;
}
