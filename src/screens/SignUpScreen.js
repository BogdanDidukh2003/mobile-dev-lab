import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import {
  Button,
  InputField,
} from './../components';
import {
  firebase,
  validateEmailInput,
  validateNameInput,
  validatePhoneInput,
  validatePasswordInput,
} from './../functions';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [requestSignUp, setRequestSignUp] = useState(false);

  const _validateSignUpInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validateNameInput(name, setName, setNameError);
    validatePhoneInput(phone, setPhone, setPhoneError);
    validatePasswordInput(password, setPassword, setPasswordError);
  };

  const _onPressSignUp = () => {
    _validateSignUpInput();
    setRequestSignUp(true);
  };

  useEffect(() => {
    if (requestSignUp && !(emailError || nameError || phoneError || passwordError)) {
      handleSignUp();
    }
    setRequestSignUp(false);
  }, [requestSignUp, emailError, nameError, phoneError, passwordError]);

  const handleSignUp = async () => {
    try {
      await firebase.signUp(email, name, phone, password, () => {
        navigation.navigate(CONSTANTS.SCREENS.MAIN);
      });
    } catch (error) {
      setGeneralError(error.message);
    }
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
          placeholder='Name'
          onChangeText={name => setName(name)}
          value={name}
          errorMessage={nameError}
        />
      </View>

      <View style={Styles.elementContainer}>
        <InputField
          placeholder='Phone'
          onChangeText={phone => setPhone(phone)}
          value={phone}
          errorMessage={phoneError}
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
        <Text
          style={Styles.errorText}
        >{generalError}</Text>
      </View>

      <View style={Styles.elementContainer}>
        <Button
          title='SIGN UP'
          onPress={_onPressSignUp}
        />
      </View>

    </View>
  );
};

export default SignUpScreen;
