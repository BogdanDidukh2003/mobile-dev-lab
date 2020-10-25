import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  MainScreen,
} from './../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={CONSTANTS.SCREENS.MAIN}
    >
      <Stack.Screen
        name={CONSTANTS.SCREENS.MAIN}
        component={MainScreen}
        options={{
          title: CONSTANTS.SCREEN_TITLES.MAIN,
        }}
      />
    </Stack.Navigator>
  );
};
