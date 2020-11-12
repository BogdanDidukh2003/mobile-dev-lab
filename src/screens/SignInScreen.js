import React from 'react';
import { View, Text } from 'react-native';

import Styles from './../styles';
import {
  Button,
  Hyperlink,
  InputField,
} from './../components';
import { useSignInScreenBackend } from './../backend';
import { ThemeContext } from './../util';

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
          secureTextEntry
          placeholder='Password'
          onChangeText={onChangePassword}
          value={password}
          errorMessage={passwordError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <Text
          style={Styles[theme].errorText}
        >{generalError}</Text>
      </View>

      <View style={Styles[theme].elementContainer}>
        <Button
          title='SIGN IN'
          onPress={onPressSignIn}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <Hyperlink
          text="Don't have an account? Sign Up"
          onPress={onPressGoToSignUp}
        />
      </View>

    </View>
  );
}

export default SignInScreen;
