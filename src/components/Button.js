import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Styles from './../styles';

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View
        style={Styles.buttonContainer}
      >
        <Text
          style={Styles.buttonText}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
