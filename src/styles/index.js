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

  itemDescription: {
    paddingLeft: 16,
  },

  listContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
  },

  listItem: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  listItemSeparator: {
    height: 1,
    width: '80%',
    backgroundColor: CONSTANTS.COLORS.SILVER,
    marginHorizontal: '10%',
  },

  loadingIndicator: {
    paddingTop: 12,
  },

  mainMenuContainer: {
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    justifyContent: 'center',
  },

  refreshingIndicator: {
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    color: CONSTANTS.COLORS.SKY_BLUE,
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

  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },

  warningText: {
    color: CONSTANTS.COLORS.WARNING,
    fontSize: 20,
    fontWeight: 'bold',
  },

  wideButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CONSTANTS.COLORS.SKY_BLUE_TENDER,
    borderRadius: 16,
    padding: 8,
    margin: 8,
    marginTop: 0,
  },

  wideButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CONSTANTS.COLORS.WHITE_TEXT,
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

  itemDescription: {
    paddingLeft: 16,
  },

  listContainer: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.DARK_BACKGROUND,
  },

  listItem: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  listItemSeparator: {
    height: 1,
    width: '80%',
    backgroundColor: CONSTANTS.COLORS.SILVER,
    marginHorizontal: '10%',
  },

  loadingIndicator: {
    paddingTop: 12,
  },

  mainMenuContainer: {
    backgroundColor: CONSTANTS.COLORS.DARK_BACKGROUND,
    justifyContent: 'center',
  },

  refreshingIndicator: {
    backgroundColor: CONSTANTS.COLORS.ADDITIONAL_BACKGROUND,
    color: CONSTANTS.COLORS.LIGHT_ORANGE,
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

  title: {
    fontWeight: 'bold',
    marginBottom: 4,
  },

  warningText: {
    color: CONSTANTS.COLORS.WARNING,
    fontSize: 20,
    fontWeight: 'bold',
  },

  wideButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CONSTANTS.COLORS.LIGHT_ORANGE_TENDER,
    borderRadius: 16,
    padding: 8,
    margin: 8,
    marginTop: 0,
  },

  wideButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: CONSTANTS.COLORS.WHITE_TEXT,
  },

});

export default Styles;
