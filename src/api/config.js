import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

const instance = axios.create({
  baseURL: `https://it-shatle-demo-api.herokuapp.com`,
});

instance.interceptors.request.use((axiosConfig) => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  axiosConfig.headers.Authorization = `Bearer ${accessToken}`;

  return axiosConfig;
});

export const pokemonAPI = {
  singUp(signData) {
    return instance.post("auth/signup", signData);
  },
  singIn(authData) {
    return instance.post("/auth/signIn", authData);
  },
  getPokemons() {
    return instance.get(`/products`);
  },
  getPokemonDetails(id) {
    return instance.get(`/products/${id}`);
  },
};
