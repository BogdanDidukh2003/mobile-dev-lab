import React from 'react';
import { View, Text } from 'react-native';

import Styles from './../styles';
import {
  Button,
  Hyperlink,
  InputField,
} from './../components';
import { useSignInScreenBackend } from './../backend';

const SignInScreen = ({ navigation }) => {
  const {
    email,
    password,
    emailError,
    passwordError,
    generalError,
    onChangeEmail,
    onChangePassword,
    onPressSignIn,
    onPressGoToSignUp,
   } = useSignInScreenBackend(navigation);

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
          secureTextEntry
          placeholder='Password'
          onChangeText={onChangePassword}
          value={password}
          errorMessage={passwordError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <Text
          style={Styles.errorText}
        >{generalError}</Text>
      </View>

      <View style={Styles.elementContainer}>
        <Button
          title='SIGN IN'
          onPress={onPressSignIn}
        />
      </View>

      <View style={Styles.elementContainer}>
        <Hyperlink
          text="Don't have an account? Sign Up"
          onPress={onPressGoToSignUp}
        />
      </View>

    </View>
  );
}

export default SignInScreen;
