import React, { useState } from 'react';
import { View } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import {
  Button,
  Hyperlink,
  InputField,
} from './../components';
import {
  validateEmailInput,
  validatePasswordInput,
} from './../functions';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const _validateSignInInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validatePasswordInput(password, setPassword, setPasswordError);
  };

  const _onPressSignIn = () => {
    _validateSignInInput();
  };

  const _onPressGoToSignUp = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_UP);
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
        secureTextEntry
        placeholder='Password'
        onChangeText={password => setPassword(password)}
        value={password}
        errorMessage={passwordError}
      />

      <Button
        title='SIGN IN'
        onPress={_onPressSignIn}
      />

      <Hyperlink
        text="Don't have an account? Sign Up"
        onPress={_onPressGoToSignUp}
      />
    </View>
  );
}

export default SignInScreen;
