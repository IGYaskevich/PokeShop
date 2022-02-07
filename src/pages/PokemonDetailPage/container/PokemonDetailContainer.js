import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { pokemonDetailSelector } from "../selectors";
import { Spinner } from "../../../components/Spinner";
import { PokemonDetailItem } from "../components/PokemonItemDetail";

import { GET_POKEMON_DETAILS_REQUEST } from "../actions/actions";

import mainContainer from "../../../static/styles/mainContainer.module.scss";

export const PokemonDetailContainer = () => {
  const dispatch = useDispatch();
  const { info, isLoading } = useSelector(pokemonDetailSelector);

  const { abilities, id, image, name, price, stats } = info;

  const { pokemonName } = useParams();

  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <div className={mainContainer.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <PokemonDetailItem
          abilities={abilities}
          id={id}
          image={image}
          name={name}
          price={price}
          stats={stats}
        />
      )}
    </div>
  );
};
