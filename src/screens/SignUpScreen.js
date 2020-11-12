import React from 'react';
import { View, Text } from 'react-native';

import Styles from './../styles';
import {
  Button,
  InputField,
} from './../components';
import { useSignUpScreenBackend } from './../backend';
import { ThemeContext } from '../util';

const SignUpScreen = () => {
  const {
    email,
    name,
    phone,
    password,
    repeatPassword,
    emailError,
    nameError,
    phoneError,
    passwordError,
    repeatPasswordError,
    generalError,
    forcedPasswordErrorHighlight,
    onChangeEmail,
    onChangeName,
    onChangePhone,
    onChangePassword,
    onChangeRepeatPassword,
    onPressSignUp,
  } = useSignUpScreenBackend();

  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={Styles[theme].container}>

      <View style={Styles[theme].elementContainer}>
        <InputField
          placeholder='Email'
          onChangeText={onChangeEmail}
          value={email}
          errorMessage={emailError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <InputField
          placeholder='Name'
          onChangeText={onChangeName}
          value={name}
          errorMessage={nameError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <InputField
          placeholder='Phone'
          onChangeText={onChangePhone}
          value={phone}
          errorMessage={phoneError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <InputField
          secureTextEntry
          placeholder='Password'
          onChangeText={onChangePassword}
          value={password}
          errorMessage={passwordError}
          forcedErrorHighlight={forcedPasswordErrorHighlight}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <InputField
          secureTextEntry
          placeholder='Repeat password'
          onChangeText={onChangeRepeatPassword}
          value={repeatPassword}
          errorMessage={repeatPasswordError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <Text
          style={Styles[theme].errorText}
        >{generalError}</Text>
      </View>

      <View style={Styles[theme].elementContainer}>
        <Button
          title='SIGN UP'
          onPress={onPressSignUp}
        />
      </View>

    </View>
  );
};

export default SignUpScreen;
