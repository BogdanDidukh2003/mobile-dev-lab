import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { call } from 'react-native-reanimated';

import CONSTANTS from '../constants';
import { dataApi, firebase } from './../functions';

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

export const useMainScreenBackend = (navigation) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    pullData();
  }, []);

  const handleDeleteStation = (station) => {
    const callback = (...args) => {
      onRefresh();
    };
    dataApi.deleteStation(station.id, callback)
      .catch(callback);
  };

  const onLongPress = (item) => {
    return () => {
      Alert.alert(item.name, 'Are you sure you want to delete the station?', [
        {
          text: 'NO',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            handleDeleteStation(item);
          },
        },
      ],
        { cancelable: false });
    };
  };

  const onPressAddStation = () => {
    navigation.navigate(CONSTANTS.SCREENS.ADD_STATION);
  };

  const onRefresh = () => {
    setRefreshing(true);
    pullData();
  };

  const pullData = () => {
    dataApi.getAllStations((res) => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      setData(res);
      setLoading(false);
      setRefreshing(false);
    }).catch((error) => {
      console.error(error)
    });
  };

  return {
    data,
    loading,
    refreshing,
    onLongPress,
    onPressAddStation,
    onPressSignOut,
    onRefresh,
  };
};
