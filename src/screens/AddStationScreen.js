import React from 'react';
import { Text, View } from 'react-native';

import Styles from './../styles';
import {
  Button,
  InputField,
} from './../components';
import { useAddStationScreenBackend } from './../backend';
import { ThemeContext } from '../util';

const AddStationScreen = ({ navigation }) => {
  const {
    name,
    latitude,
    longitude,
    nameError,
    latitudeError,
    longitudeError,
    generalError,
    onChangeName,
    onChangeLatitude,
    onChangeLongitude,
    onPressAddStation,
  } = useAddStationScreenBackend(navigation);

  const { theme } = React.useContext(ThemeContext);

  return (
    <View style={Styles[theme].container}>

      <View style={Styles[theme].elementContainer}>
        <InputField
          placeholder='Name (ID)'
          onChangeText={onChangeName}
          value={name}
          errorMessage={nameError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <InputField
          placeholder='Latitude'
          onChangeText={onChangeLatitude}
          value={latitude}
          errorMessage={latitudeError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <InputField
          placeholder='Longitude'
          onChangeText={onChangeLongitude}
          value={longitude}
          errorMessage={longitudeError}
        />
      </View>

      <View style={Styles[theme].elementContainer}>
        <Text
          style={Styles[theme].errorText}
        >{generalError}</Text>
      </View>

      <View style={Styles[theme].elementContainer}>
        <Button
          title='ADD STATION'
          onPress={onPressAddStation}
        />
      </View>

    </View>
  );
};

export default AddStationScreen;
