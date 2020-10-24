import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import {
  Button,
  Hyperlink,
  InputField,
} from './../components';
import {
  firebase,
  validateEmailInput,
  validatePasswordInput,
} from './../functions';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [requestSignIn, setRequestSignIn] = useState(false);

  const _validateSignInInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validatePasswordInput(password, setPassword, setPasswordError);
  };

  const _onPressSignIn = () => {
    _validateSignInInput();
    setRequestSignIn(true);
  };

  useEffect(() => {
    if (requestSignIn && !(emailError || passwordError)) {
      handleSignIn();
    }
    setRequestSignIn(false);
  }, [requestSignIn, emailError, passwordError]);

  const handleSignIn = async () => {
    try {
      await firebase.signIn(email, password, () => {
        navigation.navigate(CONSTANTS.SCREENS.MAIN);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const _onPressGoToSignUp = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_UP);
  };

  return (
    <View style={Styles.container}>

      <View style={Styles.elementContainer}>
        <InputField
          placeholder='Email'
          onChangeText={email => setEmail(email)}
          value={email}
          errorMessage={emailError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <InputField
          secureTextEntry
          placeholder='Password'
          onChangeText={password => setPassword(password)}
          value={password}
          errorMessage={passwordError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <Button
          title='SIGN IN'
          onPress={_onPressSignIn}
        />
      </View>

      <View style={Styles.elementContainer}>
        <Hyperlink
          text="Don't have an account? Sign Up"
          onPress={_onPressGoToSignUp}
        />
      </View>

    </View>
  );
}

export default SignInScreen;
