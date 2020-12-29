import { apiConfig } from './../config';

class DataAPI {
  constructor(config) {
    this.config = config;
  }

  async addStation(name, latitude, longitude, callback) {
    return fetch(this.config.POST_STATION_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        external_id: name,
        name: name,
        latitude: latitude,
        longitude: longitude,
      })
    })
      .then((response) => response.json())
      .then(callback);
  }

  async deleteStation(id, callback) {
    const url = this.config.DELETE_STATION_URL_BASE + id + this.config.DELETE_STATION_URL_END
    return fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(callback);
  }

  async getAllStations(callback) {
    return fetch(this.config.GET_STATIONS_URL)
      .then((response) => response.json())
      .then(callback);
  };
}

export default new DataAPI(apiConfig);
