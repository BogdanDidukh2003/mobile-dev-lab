import React from 'react';
import { TextInput, Text } from 'react-native';
import CONSTANTS from '../constants';

import Styles from './../styles';
import { ThemeContext } from './../util';

const InputField = (props) => {
  const { theme } = React.useContext(ThemeContext);

  const _showErrorMessage = (message) => {
    return <Text
      style={Styles[theme].errorText}
    >{message}</Text>;
  };

  const input = (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      style={props.errorMessage || props.forcedErrorHighlight ?
        [Styles[theme].textInput, Styles[theme].textInputError]
        : Styles[theme].textInput}
      autoCapitalize='none'
      autoCorrect={false}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      placeholderTextColor={
        theme == CONSTANTS.THEMES.LIGHT
        ? CONSTANTS.COLORS.GREY_TEXT
        : CONSTANTS.COLORS.LIGHT_TEXT
      }
    />
  );

  if (props.errorMessage) {
    return (
      <>
        {input}
        {_showErrorMessage(props.errorMessage)}
      </>
    );
  }
  return input;
};

export default InputField;
