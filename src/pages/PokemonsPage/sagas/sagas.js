import { put, call, takeEvery } from "redux-saga/effects";
import * as actions from "../actions/actions";
import PokemonService from "../../../services/pokemonService";

function* pokemonPageWorker(action) {
  try {
    const response = yield call(PokemonService.getPokemon);

    yield put(actions.GET_POKEMON_SUCCESS(response));
  } catch (error) {
    yield put(actions.GET_POKEMON_FAIL(error));
  }
}

export function* pokemonPageWatcher() {
  yield takeEvery(actions.GET_POKEMON_REQUEST, pokemonPageWorker);
}
