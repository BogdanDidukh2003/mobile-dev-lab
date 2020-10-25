import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { Button } from './../components';
import { firebase } from './../functions'

const MainScreen = () => {
  const [name, setName] = useState('');

  firebase.getUserData((userDoc) => {
    setName(userDoc.data().name);
  });

  const handleSignOut = () => {
    firebase.signOut();
  };

  return (
    <View style={Styles.container}>

      <View style={Styles.elementContainer}>
        <Text>Welcome, {name}</Text>
      </View>

      <View style={Styles.elementContainer}>
        <Button
          title='SIGN OUT'
          onPress={handleSignOut}
        />
      </View>

    </View>
  );
}

export default MainScreen;
