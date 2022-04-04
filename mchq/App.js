import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './src/navigation/RootStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RootStack/>
  );
}

export default App;
