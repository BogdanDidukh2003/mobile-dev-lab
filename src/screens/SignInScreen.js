import React, { useState } from 'react';
import { Button, View, Text, TextInput } from 'react-native';

import CONSTANTS from './../constants';
import Styles from './../styles';
import { Hyperlink } from './../components';

const SignInScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.container}>

      {errorMessage &&
        <Text style={{ color: 'red' }}>
          {errorMessage}
        </Text>
      }

      <TextInput
        style={Styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        value={email}
      />

      <TextInput
        secureTextEntry
        style={Styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        value={password}
      />

      <Button 
        title="SIGN IN" 
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
