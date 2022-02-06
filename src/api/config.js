import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

const config = {
  baseURL: `https://it-shatle-demo-api.herokuapp.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Pragma: "no-cache",
  },
};

const api = axios.create(config);

api.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  axiosConfig.headers.Authorization = `Bearer ${accessToken}`;

  return axiosConfig;
});

export default api;
