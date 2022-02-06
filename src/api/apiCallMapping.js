import * as pokemonPageActions from "../pages/PokemonsPage/actions/actions";
import * as pokemonDetailsAction from "../pages/PokemonDetailPage/actions/actions";
import * as loginActions from "../pages/LoginPage/actions";
import * as redisterActions from "../pages/SingUpPage/actions";

import PokemonService from "../services/pokemonService";
import AuthService from "../services/authService";

export const apiCallMapping = (action) => {
  const actionCallMap = {
    [pokemonPageActions.GET_POKEMON_REQUEST]: PokemonService.getPokemon,
    [pokemonDetailsAction.GET_POKEMON_DETAILS_REQUEST]:
      PokemonService.getPokemonDetails,

    [loginActions.SIGN_IN_REQUEST]: AuthService.signIn,
    [redisterActions.SIGN_UP_REQUEST]: AuthService.signUp,
  };
  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type];
};
