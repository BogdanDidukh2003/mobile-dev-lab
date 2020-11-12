import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  SignInScreen,
  SignUpScreen,
} from './../screens';
import { ThemeContext } from './../util';

const SwitchThemeButton = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <Button
      title='Switch'
      onPress={() => {
        switchTheme();
      }}
      color={
        theme == CONSTANTS.THEMES.LIGHT
          ? CONSTANTS.COLORS.SKY_BLUE
          : CONSTANTS.COLORS.LIGHT_ORANGE
      }
    />
  );
};

const Stack = createStackNavigator();

export const AuthStack = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName={CONSTANTS.SCREENS.SIGN_IN}
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
        name={CONSTANTS.SCREENS.SIGN_IN}
        component={SignInScreen}
        options={{
          title: CONSTANTS.SCREEN_TITLES.SIGN_IN,
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCREENS.SIGN_UP}
        component={SignUpScreen}
        options={{
          title: CONSTANTS.SCREEN_TITLES.SIGN_UP,
        }}
      />
    </Stack.Navigator>
  );
};
