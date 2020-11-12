import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import { ThemeContext } from './../util';

const SwitchThemeButton = () => {
  const { theme, switchTheme } = React.useContext(ThemeContext);

  return (
    <>
    <TouchableOpacity
      onPress={() => {
        switchTheme();
      }}
    >
      <Text
        style={[Styles[theme].textStyle, Styles[theme].switchThemeButton]}
      >&#10227;</Text>
    </TouchableOpacity>
    {/*<Button
      title='&#10227;'
      onPress={() => {
        switchTheme();
      }}
      color={
        theme == CONSTANTS.THEMES.LIGHT
          ? CONSTANTS.COLORS.SKY_BLUE
          : CONSTANTS.COLORS.LIGHT_ORANGE
      }
    />*/}
    </>
  );
};

export default SwitchThemeButton;
