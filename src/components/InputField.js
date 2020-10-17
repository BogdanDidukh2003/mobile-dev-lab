import React from 'react';
import { TextInput } from 'react-native';

import Styles from './../styles';

const InputField = (props) => {
  return (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      style={Styles.textInput}
      autoCapitalize='none'
      autoCorrect={false}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default InputField;
