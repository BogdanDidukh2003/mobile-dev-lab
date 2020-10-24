import { StyleSheet } from 'react-native';

import CONSTANTS from './../constants';

const Styles = StyleSheet.create({

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

  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },

  textInputError: {
    borderColor: 'red',
  }

});

export default Styles;
