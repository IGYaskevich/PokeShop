import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonPageSelector } from "../selectors/selectors";
import * as actions from "../actions/actions";

import { ROUTES_NAMES } from "../../../routes/routesNames";
import { Link } from "react-router-dom";
import { Spinner } from "../../../components/Spinner";

import mainContainer from "../../../static/styles/mainContainer.module.scss";

export const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const { pokemonList, isLoading } = useSelector(pokemonPageSelector);

  useEffect(() => {
    dispatch(actions.GET_POKEMON_REQUEST());
  }, [dispatch]);
  return (
    <div className={mainContainer.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        pokemonList.map(({ name, id }) => (
          <Link to={`${ROUTES_NAMES.POKEMON}/${id}`} key={id}>
            <div>{name}</div>
          </Link>
        ))
      )}
    </div>
  );
};
