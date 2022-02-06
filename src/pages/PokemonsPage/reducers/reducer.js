import * as actions from "../actions/actions";
import { handleActions } from "redux-actions";

const initialState = {
  pokemonList: [],
  isLoading: false,
  errors: null,
};

export const pokemonPageReducer = handleActions(
  {
    [actions.GET_POKEMON_REQUEST]: (state) => {
      return { ...state, isLoading: true };
    },
    [actions.GET_POKEMON_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        pokemonList: payload.response,
      };
    },
    [actions.GET_POKEMON_FAIL]: (state, { payload }) => {
      return { ...state, isLoading: false, errors: payload.response };
    },
  },
  initialState
);
