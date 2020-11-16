import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const Button = (props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View
        style={Styles[theme].buttonContainer}
      >
        <Text
          style={Styles[theme].buttonText}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
