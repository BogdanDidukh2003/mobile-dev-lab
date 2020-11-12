import { useState, useEffect } from 'react';
import CONSTANTS from '../constants';

import {
  firebase,
  validateEmailInput,
  validateNameInput,
  validatePhoneInput,
  validatePasswordInputOnSignUp,
} from './../functions';

export const useSignUpScreenBackend = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [repeatPasswordError, setRepeatPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [requestSignUp, setRequestSignUp] = useState(false);

  const _validateSignUpInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validateNameInput(name, setName, setNameError);
    validatePhoneInput(phone, setPhone, setPhoneError);
    validatePasswordInputOnSignUp(
      password, repeatPassword, setPasswordError, setRepeatPasswordError);
  };

  const onPressSignUp = () => {
    setGeneralError(CONSTANTS.MESSAGES.DEFAULT);
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
      await firebase.signUp(email, name, phone, password);
    } catch ({ message }) {
      setGeneralError(message);
    }
  };

  return {
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
    onChangeEmail: (email) => { setEmail(email) },
    onChangeName: (name) => { setName(name) },
    onChangePhone: (phone) => { setPhone(phone) },
    onChangePassword: (password) => { setPassword(password) },
    onChangeRepeatPassword: (repeatPassword) => { setRepeatPassword(repeatPassword) },
    onPressSignUp,
  };
};
