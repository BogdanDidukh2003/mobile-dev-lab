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

  const [
    forcedPasswordErrorHighlight,
    setForcedPasswordErrorHighlight] = useState(false);

  const [requestSignUp, setRequestSignUp] = useState(false);

  useEffect(() => {
    if (requestSignUp && !(emailError || nameError || phoneError || passwordError)) {
      handleSignUp();
    }
    setRequestSignUp(false);
  }, [requestSignUp, emailError, nameError, phoneError, passwordError]);

  const _validateSignUpInput = () => {
    validateEmailInput(email, setEmail, setEmailError);
    validateNameInput(name, setName, setNameError);
    validatePhoneInput(phone, setPhone, setPhoneError);
    validatePasswordInputOnSignUp(
      password, repeatPassword, setPasswordError, setRepeatPasswordError,
      setForcedPasswordErrorHighlight);
  };

  const onPressSignUp = () => {
    setGeneralError(CONSTANTS.MESSAGES.DEFAULT);
    _validateSignUpInput();
    setRequestSignUp(true);
  };

  const handleSignUp = async () => {
    try {
      await firebase.signUp(email, name, phone, password);
    } catch ({ message }) {
      setGeneralError(message);
    }
  };

  const onChangeEmail = (email) => {
    if (emailError) {
      validateEmailInput(email, setEmail, setEmailError);
    }

    setEmail(email);
  };

  const onChangeName = (name) => {
    if (nameError) {
      validateNameInput(name, setName, setNameError);
    }

    setName(name);
  };

  const onChangePhone = (phone) => {
    if (phoneError) {
      validatePhoneInput(phone, setPhone, setPhoneError);
    }
    setPhone(phone);
  };

  const onChangePassword = (password) => {
    if (passwordError) {
      validatePasswordInputOnSignUp(
        password, repeatPassword, setPasswordError, setRepeatPasswordError,
        setForcedPasswordErrorHighlight);
    }

    setPassword(password);
  };

  const onChangeRepeatPassword = (repeatPassword) => {
    if (repeatPasswordError) {
      validatePasswordInputOnSignUp(
        password, repeatPassword, setPasswordError, setRepeatPasswordError,
        setForcedPasswordErrorHighlight);
    }

    setRepeatPassword(repeatPassword);
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
    forcedPasswordErrorHighlight,
    onChangeEmail,
    onChangeName,
    onChangePhone,
    onChangePassword,
    onChangeRepeatPassword,
    onPressSignUp,
  };
};
