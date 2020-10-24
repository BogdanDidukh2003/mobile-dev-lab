import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import { firebase } from './../functions'

const MainScreen = () => {
  const [name, setName] = useState('');

  firebase.getUserData((userDoc) => {
    setName(userDoc.data().name);
  });

  return (
    <View style={Styles.container}>
      <Text>Welcome, {name}</Text>
    </View>
  );
}

export default MainScreen;
