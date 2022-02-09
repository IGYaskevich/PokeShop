import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";
import AuthService from "../services/authService";

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

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      AuthService.signOut();
    }
    return error;
  }
);

export default api;
