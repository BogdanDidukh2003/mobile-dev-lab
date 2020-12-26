import { useState, useEffect } from 'react';
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
  firebase.signOut();
};

export const useMainScreenBackend = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStations((res) => {
      res.sort((a, b) => a.name.localeCompare(b.name));
      setData(res);
      setLoading(false);
    });
  }, [])

  return {
    data,
    loading,
    onPressSignOut,
  };
};
