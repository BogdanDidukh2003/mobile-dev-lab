import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  SignInScreen,
  SignUpScreen,
} from './../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={CONSTANTS.SCREENS.SIGN_IN}
    >
      <Stack.Screen
        name={CONSTANTS.SCREENS.SIGN_IN}
        component={SignInScreen}
        options={{
          title: 'Sign In',
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.SIGN_UP}
        component={SignUpScreen}
        options={{
          title: 'Create Account',
        }}
      />
    </Stack.Navigator>
  );
};
