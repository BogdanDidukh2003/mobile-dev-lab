import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import { apiConfig } from './../config';
import { firebase } from './../functions';

const getAllStations = (callback) => {
  fetch(apiConfig.GET_STATIONS_URL)
    .then((response) => response.json())
    .then(callback)
    .catch((error) => {
      console.error(error);
    });
};

const onPressSignOut = () => {
  Alert.alert('Sign Out', 'Are you sure?', [
    {
      text: 'Cancel',
      onPress: () => { },
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: () => firebase.signOut(),
    },
  ],
    { cancelable: false });
};

export const useMainScreenBackend = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    pullData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    pullData();
  };

  const pullData = () => {
    getAllStations((res) => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      setData(res);
      setLoading(false);
      setRefreshing(false);
    });
  };

  return {
    data,
    loading,
    refreshing,
    onPressSignOut,
    onRefresh,
  };
};
