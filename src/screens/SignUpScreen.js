import React, { useState } from 'react';
import { View } from 'react-native';

import Styles from './../styles';
import {
  Button,
  InputField,
} from './../components';
import {
  validateEmailInput,
  validateNameInput,
  validatePhoneInput,
  validatePasswordInput,
} from './../functions';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const _validateSignUpInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validateNameInput(name, setName, setNameError);
    validatePhoneInput(phone, setPhone, setPhoneError);
    validatePasswordInput(password, setPassword, setPasswordError);
  };

  const _onPressSignUp = () => {
    _validateSignUpInput();
  };

  return (
    <View style={Styles.container}>
      <InputField
        placeholder='Email'
        onChangeText={email => setEmail(email)}
        value={email}
        errorMessage={emailError}
      />

      <InputField
        placeholder='Name'
        onChangeText={name => setName(name)}
        value={name}
        errorMessage={nameError}
      />

      <InputField
        placeholder='Phone'
        onChangeText={phone => setPhone(phone)}
        value={phone}
        errorMessage={phoneError}
      />

      <InputField
        secureTextEntry
        placeholder='Password'
        onChangeText={password => setPassword(password)}
        value={password}
        errorMessage={passwordError}
      />

      <Button
        title='SIGN UP'
        onPress={_onPressSignUp}
      />
    </View>
  );
};

export default SignUpScreen;
