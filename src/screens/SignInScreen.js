import React, { useState } from 'react';
import { View, Text } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import { 
  Button,
  Hyperlink,
  InputField,
} from './../components';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.container}>
      <InputField 
        placeholder='Email'
        onChangeText={email => setEmail(email)}
        value={email}
      />

      <InputField 
        secureTextEntry
        placeholder='Password'
        onChangeText={password => setPassword(password)}
        value={password}
      />

      <Button 
        title='SIGN IN'
        onPress={() => navigation.navigate(CONSTANTS.SCREENS.MAIN)} 
      />

      <Hyperlink 
        text="Don't have an account? Sign Up"
        onPress={() => navigation.navigate(CONSTANTS.SCREENS.SIGN_UP)}
      />
    </View>
  );
}

export default SignInScreen;
