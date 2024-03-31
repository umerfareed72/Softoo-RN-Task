// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Cart from '../screens/App/Cart';
import Home from '../screens/App/Home';

const Stack = createNativeStackNavigator();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default HomeStack;
