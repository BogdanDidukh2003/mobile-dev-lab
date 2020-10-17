import React from 'react';
import { TextInput, Text, View } from 'react-native';

import Styles from './../styles';

const InputField = (props) => {

  const _showErrorMessage = (message) => {
    return <Text
      style={Styles.errorText}
    >* {message}</Text>;
  };

  const input = (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      style={props.errorMessage ?
        [Styles.textInput, Styles.textInputError]
        : Styles.textInput}
      autoCapitalize='none'
      autoCorrect={false}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
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
