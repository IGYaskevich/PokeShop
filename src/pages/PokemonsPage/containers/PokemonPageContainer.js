import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonPageSelector } from "../selectors/selectors";

import { Spinner } from "../../../components/Spinner";
import { PokemonLayout } from "../components/PokemonLayout";
import { usePagination } from "../../../hooks";

import * as actions from "../actions/actions";

import mainContainer from "../../../static/styles/mainContainer.module.scss";

export const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const [page, handlePageChange] = usePagination("pokemonPage");

  const { pokemonList, isLoading } = useSelector(pokemonPageSelector);

  useEffect(() => {
    dispatch(actions.GET_POKEMON_REQUEST(page));
  }, [dispatch, page]);

  return (
    <div className={mainContainer.container}>
      {pokemonList && isLoading ? (
        <Spinner />
      ) : (
        <PokemonLayout
          pokemonList={pokemonList}
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};
