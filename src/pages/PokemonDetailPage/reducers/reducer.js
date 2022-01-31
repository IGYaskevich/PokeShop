import * as actions from "../actions/actions";
import { handleActions } from "redux-actions";

const initialState = {
  info: {},
  isLoading: false,
  errors: null,
};
export const pokemonDetailsReducer = handleActions(
  {
    [actions.GET_POKEMON_DETAILS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMON_DETAILS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      info: payload.response,
    }),
    [actions.GET_POKEMON_DETAILS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  initialState
);
