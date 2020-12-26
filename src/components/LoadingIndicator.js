import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import Styles from './../styles';
import { ThemeContext } from './../util';

const LoadingIndicator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={Styles[theme].loadingIndicator}>
      <ActivityIndicator
        size='large'
        color='skyblue'
      />
    </View>
  );
};

export default LoadingIndicator;
