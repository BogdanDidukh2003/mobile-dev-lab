import CONSTANTS from './../constants';

const emailCondition = new RegExp(CONSTANTS.VALIDATION.EMAIL_REGEX);
const phoneCondition = new RegExp(CONSTANTS.VALIDATION.PHONE_REGEX);

const validateEmailInput = (email, setEmail, setEmailError) => {
  setEmailError(CONSTANTS.MESSAGES.DEFAULT);
  setEmail(email.trim());

  if (!email) {
    setEmailError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  } else if (!emailCondition.test(email)) {
    setEmailError(CONSTANTS.MESSAGES.INVALID_VALUE);
  }
};

const validateNameInput = (name, setName, setNameError) => {
  setNameError(CONSTANTS.MESSAGES.DEFAULT);
  setName(name.trim());

  if (!name) {
    setNameError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  }
};

const validatePhoneInput = (phone, setPhoneError) => {
  setPhoneError(CONSTANTS.MESSAGES.DEFAULT);

  if (!phone) {
    setPhoneError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  } else if (!phoneCondition.test(phone)) {
    setPhoneError(CONSTANTS.MESSAGES.INVALID_VALUE);
  }
};

const validatePasswordInput = (password, setPasswordError) => {
  setPasswordError(CONSTANTS.MESSAGES.DEFAULT);

  if (!password) {
    setPasswordError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  } else if (password.length < 8) {
    setPasswordError(CONSTANTS.MESSAGES.PASSWORD_TOO_SHORT);
  }
};

const validatePasswordInputOnSignUp = (
  password, repeatPassword, setPasswordError, setRepeatPasswordError,
  setForcedPasswordErrorHighlight) => {
  setForcedPasswordErrorHighlight(false);
  setPasswordError(CONSTANTS.MESSAGES.DEFAULT);
  setRepeatPasswordError(CONSTANTS.MESSAGES.DEFAULT);

  if (password != repeatPassword) {
    setForcedPasswordErrorHighlight(true);
    setRepeatPasswordError(CONSTANTS.MESSAGES.PASSWORDS_DO_NOT_MATCH);
  } else if (!password) {
    setPasswordError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
    setRepeatPasswordError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  } else if (password.length < 8) {
    setForcedPasswordErrorHighlight(true);
    setRepeatPasswordError(CONSTANTS.MESSAGES.PASSWORD_TOO_SHORT);
  }
};

export {
  validateEmailInput,
  validateNameInput,
  validatePhoneInput,
  validatePasswordInput,
  validatePasswordInputOnSignUp,
};
