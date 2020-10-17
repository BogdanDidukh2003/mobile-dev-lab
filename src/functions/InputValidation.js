import CONSTANTS from './../constants';

const emailCondition = new RegExp('^(.+)@(.+)$');
const phoneCondition = new RegExp('^(\\+)?([0-9]+)$');

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

const validatePhoneInput = (phone, setPhone, setPhoneError) => {
  setPhoneError(CONSTANTS.MESSAGES.DEFAULT);
  setPhone(phone.trim());

  if (!phone) {
    setPhoneError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  } else if (!phoneCondition.test(phone)) {
    setPhoneError(CONSTANTS.MESSAGES.INVALID_VALUE);
  }
};

const validatePasswordInput = (password, setPassword, setPasswordError) => {
  setPasswordError(CONSTANTS.MESSAGES.DEFAULT);
  setPassword(password.trim());

  if (!password) {
    setPasswordError(CONSTANTS.MESSAGES.FIELD_IS_REQUIRED);
  } else if (password.length < 8) {
    setPasswordError(CONSTANTS.MESSAGES.PASSWORD_TOO_SHORT);
  }
};

export {
  validateEmailInput,
  validateNameInput,
  validatePhoneInput,
  validatePasswordInput,
};
