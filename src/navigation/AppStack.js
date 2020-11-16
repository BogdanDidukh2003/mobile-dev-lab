import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  MainScreen,
} from './../screens';
import { SwitchThemeButton } from '../components';
import { ThemeContext } from '../util';

const Stack = createStackNavigator();

export const AppStack = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName={CONSTANTS.SCREENS.MAIN}
      screenOptions={{
        headerRight: () => <SwitchThemeButton />,
        headerTintColor: theme == CONSTANTS.THEMES.LIGHT
          ? CONSTANTS.COLORS.BLACK_TEXT
          : CONSTANTS.COLORS.WHITE_TEXT,
        headerStyle: {
          backgroundColor: theme == CONSTANTS.THEMES.LIGHT
            ? CONSTANTS.COLORS.MAIN_BACKGROUND
            : CONSTANTS.COLORS.DARK_BACKGROUND,
        },
      }}
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
