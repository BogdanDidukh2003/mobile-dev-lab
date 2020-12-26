import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const WideButton = (props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View
        style={Styles[theme].wideButtonContainer}
      >
        <Text
          style={Styles[theme].wideButtonText}
        >{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WideButton;
