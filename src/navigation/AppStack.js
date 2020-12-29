import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CONSTANTS from './../constants';
import {
  AddStationScreen,
  MainScreen,
} from './../screens';
import { SwitchThemeButton } from '../components';
import { ThemeContext } from '../util';
import { firebase } from '../functions';

const Stack = createStackNavigator();

export const AppStack = () => {
  const { theme, changeThemeTo } = React.useContext(ThemeContext);

  useEffect(() => {
    const unsubscribe = firebase.collectionReference
      .doc(firebase.auth.currentUser.uid)
      .onSnapshot(themeSynchronizationCallback);

    return () => {
      unsubscribe();
    };
  }, []);

  const themeSynchronizationCallback = (userDoc) => {
    const userTheme = userDoc.data().theme;
    if (userTheme) {
      changeThemeTo(userTheme);
    }
  };

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
      <Stack.Screen
        name={CONSTANTS.SCREENS.ADD_STATION}
        component={AddStationScreen}
        options={{
          title: CONSTANTS.SCREEN_TITLES.ADD_STATION,
        }}
      />
    </Stack.Navigator>
  );
};
