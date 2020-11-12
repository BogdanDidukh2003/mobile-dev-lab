import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const Hyperlink = (props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <Text
        accessibilityRole='link'
        style={Styles[theme].hyperlink}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Hyperlink;
