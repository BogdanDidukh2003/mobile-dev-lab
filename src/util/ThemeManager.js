import React, { createContext, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import CONSTANTS from './../constants';
import { firebase } from './../functions';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(useColorScheme() || CONSTANTS.THEMES.LIGHT);

  const changeThemeTo = (theme) => {
    setTheme(theme);
    StatusBar.setBarStyle(
      (theme == CONSTANTS.THEMES.LIGHT
        ? 'dark' : 'light'
      ) + '-content');
    StatusBar.setBackgroundColor(
      theme == CONSTANTS.THEMES.LIGHT
        ? CONSTANTS.COLORS.MAIN_BACKGROUND
        : CONSTANTS.COLORS.DARK_BACKGROUND
    );
  };

  const switchTheme = () => {
    let newTheme;
    if (theme == CONSTANTS.THEMES.LIGHT) {
      newTheme = CONSTANTS.THEMES.DARK;
    } else {
      newTheme = CONSTANTS.THEMES.LIGHT;
    }

    changeThemeTo(newTheme);
    firebase.updateUserData({
      theme: newTheme,
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        changeThemeTo,
        switchTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeContext,
  ThemeProvider,
};
