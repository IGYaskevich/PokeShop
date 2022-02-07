import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonPageSelector } from "../selectors/selectors";
import * as actions from "../actions/actions";

import { PokemonItem } from "../components/PokemonItem";
import { Spinner } from "../../../components/Spinner";

import mainContainer from "../../../static/styles/mainContainer.module.scss";
import style from "./styles.module.scss";

export const PokemonPageContainer = () => {
  const dispatch = useDispatch();

  const { pokemonList, isLoading } = useSelector(pokemonPageSelector);

  useEffect(() => {
    dispatch(actions.GET_POKEMON_REQUEST());
  }, [dispatch]);

  return (
    <div className={mainContainer.container}>
      <div className={style.content}>
        {isLoading ? (
          <Spinner />
        ) : (
          pokemonList.map(({ name, image, price, id }) => (
            <PokemonItem
              name={name}
              image={image}
              price={price}
              id={id}
              key={id}
            />
          ))
        )}
      </div>
    </div>
  );
};
