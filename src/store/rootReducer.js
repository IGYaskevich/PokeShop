import { combineReducers } from "redux";
import { pokemonPageReducer } from "../pages/PokemonsPage/reducers/reducer";
import { pokemonDetailsReducer } from "../pages/PokemonDetailPage/reducers/reducer";
import { authReducer } from "../pages/LoginPage/reducers";
import { registerReducer } from "../pages/SingUpPage/reducers";
import { createBlacklistFilter } from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authBlackListedFields = createBlacklistFilter("auth", [
  "isLoading",
  "errors",
]);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
  transforms: [authBlackListedFields],
};

export const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  pokemonPage: pokemonPageReducer,
  pokemonDetailPage: pokemonDetailsReducer,
});

export const rootReducerPersist = persistReducer(persistConfig, rootReducer);
