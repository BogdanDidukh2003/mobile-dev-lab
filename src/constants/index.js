const CONSTANTS = {

  COLORS: {
    MAIN_BACKGROUND: '#FFFFFF',
    DARK_BACKGROUND: '#0A1D26',
    ADDITIONAL_BACKGROUND: '#5b5b5b',
    SKY_BLUE: '#58afef',
    SKY_BLUE_TENDER: '#87CEEB',
    LIGHT_ORANGE: '#EB884A',
    LIGHT_ORANGE_TENDER: '#FFB485',
    WHITE_TEXT: '#FFFFFF',
    LIGHT_TEXT: '#D3D3D3',
    GREY_TEXT: '#808080',
    BLACK_TEXT: '#000000',
    SILVER: '#CED0CE',
    WARNING: '#FCC201',
  },

  FIREBASE: {
    USERS_COLLECTION: 'Users',
  },

  LOGO: 'Lab 1',

  MESSAGES: {
    DEFAULT: '',
    FIELD_IS_EMPTY: 'field is empty',
    FIELD_IS_REQUIRED: 'field is required',
    INVALID_VALUE: 'value is invalid',
    NO_INTERNET: 'No Internet connection!',
    PASSWORD_TOO_SHORT: 'password is too short, min 8 characters required',
    PASSWORDS_DO_NOT_MATCH: 'passwords do not match, try again',
  },

  SCREEN_TITLES: {
    ADD_STATION: 'Add station',
    MAIN: 'Main',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Create account',
  },

  SCREENS: {
    ADD_STATION: 'AddStation',
    MAIN: 'Main',
    SIGN_IN: 'SignIn',
    SIGN_UP: 'SignUp',
  },

  STACKS: {
    AUTH: 'Auth',
    APP: 'App',
  },

  THEMES: {
    DARK: 'dark',
    LIGHT: 'light',
  },

  VALIDATION: {
    EMAIL_REGEX: '^(.+)@(.+)(\\.).{2,}$',
    FLOAT_NUMBER_REGEX: '^[\+\-]?[0-9]+(\.[0-9]+)?$',
    PHONE_MASK: '+38 ([000]) [000] [00] [00]',
    PHONE_REGEX: '^[0-9]{10}$',
  },

};

export default CONSTANTS;
