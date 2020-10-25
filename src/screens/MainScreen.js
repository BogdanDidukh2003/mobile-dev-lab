import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { Button } from './../components';
import { useMainScreenBackend } from './../backend';

const MainScreen = () => {
  const { name, handleSignOut } = useMainScreenBackend();

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
