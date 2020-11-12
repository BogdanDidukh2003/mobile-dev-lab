import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { Button } from './../components';
import { useMainScreenBackend } from './../backend';
import { ThemeContext } from './../util';

const MainScreen = () => {
  const { name, onPressSignOut } = useMainScreenBackend();
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={Styles[theme].container}>

      <View style={Styles[theme].elementContainer}>
        <Text>Welcome, {name}</Text>
      </View>

      <View style={Styles[theme].elementContainer}>
        <Button
          title='SIGN OUT'
          onPress={onPressSignOut}
        />
      </View>

    </View>
  );
}

export default MainScreen;
