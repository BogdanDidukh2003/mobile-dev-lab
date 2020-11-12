import React, { createContext, useState } from 'react';
import { StatusBar } from 'react-native';

import CONSTANTS from './../constants';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(CONSTANTS.THEMES.LIGHT);

  const switchTheme = () => {
    if (theme == CONSTANTS.THEMES.LIGHT) {
      setTheme(CONSTANTS.THEMES.DARK);
      StatusBar.setBarStyle('light-content');
    } else {
      setTheme(CONSTANTS.THEMES.LIGHT);
      StatusBar.setBarStyle('dark-content');
    }
  };

  return (
    <ThemeContext.Provider
      value={{ theme, switchTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export {
  ThemeContext,
  ThemeProvider,
};
