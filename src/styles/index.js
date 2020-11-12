import { StyleSheet } from 'react-native';

import CONSTANTS from './../constants';

const Styles = new Map();

Styles[CONSTANTS.THEMES.LIGHT] = StyleSheet.create({

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 120,
    backgroundColor: CONSTANTS.COLORS.SKY_BLUE,
    borderRadius: 13,
  },

  buttonText: {
    color: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },

  elementContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  errorText: {
    width: '90%',
    textAlign: 'center',
    color: 'red',
  },

  hyperlink: {
    color: CONSTANTS.COLORS.SKY_BLUE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  switchThemeButton: {
    fontSize: 40,
    color: CONSTANTS.COLORS.SKY_BLUE,
    marginRight: 8,
    marginBottom: 8,
  },

  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: CONSTANTS.COLORS.BLACK_TEXT,
  },

  textInputError: {
    borderColor: 'red',
  },

  textStyle: {
    color: CONSTANTS.COLORS.BLACK_TEXT,
  },

});

Styles[CONSTANTS.THEMES.DARK] = StyleSheet.create({

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 120,
    backgroundColor: CONSTANTS.COLORS.LIGHT_ORANGE,
    borderRadius: 13,
  },

  buttonText: {
    color: '#fff',
  },

  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.DARK_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },

  elementContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  errorText: {
    width: '90%',
    textAlign: 'center',
    color: 'red',
  },

  hyperlink: {
    color: CONSTANTS.COLORS.LIGHT_ORANGE,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  switchThemeButton: {
    fontSize: 40,
    color: CONSTANTS.COLORS.LIGHT_ORANGE,
    marginRight: 8,
    marginBottom: 8,
  },

  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    color: CONSTANTS.COLORS.WHITE_TEXT,
  },

  textInputError: {
    borderColor: 'red',
  },

  textStyle: {
    color: CONSTANTS.COLORS.WHITE_TEXT,
  },

});

export default Styles;
