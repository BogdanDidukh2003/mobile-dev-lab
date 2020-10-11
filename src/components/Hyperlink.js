import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import CONSTANTS from './../constants';

const Hyperlink = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Text
        accessibilityRole='link'
        style={{
          color: CONSTANTS.COLORS.SKY_BLUE,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Hyperlink;
