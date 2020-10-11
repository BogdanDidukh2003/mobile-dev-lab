import React from 'react';
import { Text, View } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';

const MainScreen = () => {
  return (
    <View style={Styles.container}>
      <Text>Welcome, {CONSTANTS.LOGO}</Text>
    </View>
  );
}

export default MainScreen;
