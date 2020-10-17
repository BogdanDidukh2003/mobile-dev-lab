import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './../styles';

const Hyperlink = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Text
        accessibilityRole='link'
        style={Styles.hyperlink}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Hyperlink;
