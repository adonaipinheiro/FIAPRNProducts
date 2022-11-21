import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import Router from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
}
