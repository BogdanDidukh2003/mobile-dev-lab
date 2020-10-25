import { useState, useEffect } from 'react';

import CONSTANTS from './../constants';
import {
  firebase,
  validateEmailInput,
  validatePasswordInput,
} from './../functions';

export const useSignInScreenBackend = (navigation) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [requestSignIn, setRequestSignIn] = useState(false);

  const _validateSignInInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validatePasswordInput(password, setPassword, setPasswordError);
  };

  const onPressSignIn = () => {
    setGeneralError('');
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
      await firebase.signIn(email, password);
    } catch ({ message }) {
      setGeneralError(message);
    }
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      setGeneralError('');
    });
  }, [navigation]);

  const onPressGoToSignUp = () => {
    navigation.navigate(CONSTANTS.SCREENS.SIGN_UP);
  };

  return {
    email,
    password,
    emailError,
    passwordError,
    generalError,
    onChangeEmail: (email) => { setEmail(email) },
    onChangePassword: (password) => { setPassword(password) },
    onPressSignIn,
    onPressGoToSignUp,
  };
};
