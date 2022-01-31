import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GET_POKEMON_DETAILS_REQUEST } from "../actions/actions";
import { pokemonDetailSelector } from "../selectors";
import { Spinner } from "../../../components/Spinner";

export const PokemonDetailContainer = () => {
  const dispatch = useDispatch();
  const { info, isLoading } = useSelector(pokemonDetailSelector);

  const { pokemonName } = useParams();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(pokemonName));
  }, [dispatch]);

  return <h1>{isLoading ? <Spinner /> : info.name}</h1>;
};
