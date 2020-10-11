import { StyleSheet } from 'react-native';

import CONSTANTS from './../constants';

const Styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.MAIN_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
  },

});

export default Styles;
