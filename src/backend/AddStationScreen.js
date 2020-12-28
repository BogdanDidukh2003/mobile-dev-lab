import { useState, useEffect } from 'react';
import CONSTANTS from '../constants';

import {
  dataApi,
  validateFloatNumberInput,
  validateNameInput,
} from './../functions';

export const useAddStationScreenBackend = (navigation) => {
  const [name, setName] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [nameError, setNameError] = useState('');
  const [latitudeError, setLatitudeError] = useState('');
  const [longitudeError, setLongitudeError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const [requestAddStation, setRequestAddStation] = useState(false);

  useEffect(() => {
    if (requestAddStation && !(nameError || latitudeError || longitudeError)) {
      handleAddStation();
    }
    setRequestAddStation(false);
  }, [requestAddStation, nameError, latitudeError, longitudeError]);

  const handleAddStation = () => {
    dataApi.addStation(name, parseFloat(latitude), parseFloat(longitude), (res) => {
      if (res.code >= 400000) {
        setGeneralError(res.message);
      } else {
        navigation.goBack();
      }
    }).catch((error) => {
      setGeneralError(error);
    });
  };

  const _validateAllInputs = () => {
    validateNameInput(name, setName, setNameError);
    validateFloatNumberInput(latitude, setLatitude, setLatitudeError);
    validateFloatNumberInput(longitude, setLongitude, setLongitudeError);
  };

  const onPressAddStation = () => {
    setGeneralError(CONSTANTS.MESSAGES.DEFAULT);
    _validateAllInputs();
    setRequestAddStation(true);
  };

  const onChangeName = (name) => {
    if (nameError) {
      validateNameInput(name, setName, setNameError);
    }

    setName(name);
  };

  const onChangeLatitude = (latitude) => {
    if (latitudeError) {
      validateFloatNumberInput(latitude, setLatitude, setLatitudeError);
    }

    setLatitude(latitude);
  };

  const onChangeLongitude = (longitude) => {
    if (longitudeError) {
      validateFloatNumberInput(longitude, setLongitude, setLongitudeError);
    }

    setLongitude(longitude);
  };

  return {
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
  };
};
