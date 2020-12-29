import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const Warning = (props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View
      style={Styles[theme].container}
    >
      <Text
        style={Styles[theme].warningText}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default Warning;
