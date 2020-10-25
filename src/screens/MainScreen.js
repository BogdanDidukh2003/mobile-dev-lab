import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { Button } from './../components';
import { useMainScreenBackend } from './../backend';

const MainScreen = () => {
  const { name, onPressSignOut } = useMainScreenBackend();

  return (
    <View style={Styles.container}>

      <View style={Styles.elementContainer}>
        <Text>Welcome, {name}</Text>
      </View>

      <View style={Styles.elementContainer}>
        <Button
          title='SIGN OUT'
          onPress={onPressSignOut}
        />
      </View>

    </View>
  );
}

export default MainScreen;
