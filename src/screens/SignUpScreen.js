import React from 'react';
import { View, Text } from 'react-native';

import Styles from './../styles';
import {
  Button,
  InputField,
} from './../components';
import { useSignUpScreenBackend } from './../backend';

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
    onChangeEmail,
    onChangeName,
    onChangePhone,
    onChangePassword,
    onChangeRepeatPassword,
    onPressSignUp,
  } = useSignUpScreenBackend();

  return (
    <View style={Styles.container}>

      <View style={Styles.elementContainer}>
        <InputField
          placeholder='Email'
          onChangeText={onChangeEmail}
          value={email}
          errorMessage={emailError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <InputField
          placeholder='Name'
          onChangeText={onChangeName}
          value={name}
          errorMessage={nameError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <InputField
          placeholder='Phone'
          onChangeText={onChangePhone}
          value={phone}
          errorMessage={phoneError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <InputField
          secureTextEntry
          placeholder='Password'
          onChangeText={onChangePassword}
          value={password}
          errorMessage={passwordError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <InputField
          secureTextEntry
          placeholder='Repeat password'
          onChangeText={onChangeRepeatPassword}
          value={repeatPassword}
          errorMessage={repeatPasswordError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <Text
          style={Styles.errorText}
        >{generalError}</Text>
      </View>

      <View style={Styles.elementContainer}>
        <Button
          title='SIGN UP'
          onPress={onPressSignUp}
        />
      </View>

    </View>
  );
};

export default SignUpScreen;
