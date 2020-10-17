import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Styles from './../styles';
import {
  Button,
  InputField,
} from './../components';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={Styles.container}>
      <InputField
        placeholder='Email'
        onChangeText={email => setEmail(email)}
        value={email}
      />

      <InputField
        placeholder='Name'
        onChangeText={name => setName(name)}
        value={name}
      />

      <InputField
        placeholder='Phone'
        onChangeText={phone => setPhone(phone)}
        value={phone}
      />

      <InputField
        secureTextEntry
        placeholder='Password'
        onChangeText={password => setPassword(password)}
        value={password}
      />

      <Button
        title='SIGN UP'
        onPress={() => { }}
      />
    </View>
  );
};

export default SignUpScreen;
