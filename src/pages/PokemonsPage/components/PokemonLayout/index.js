import { memo } from "react";

import { PokemonItem } from "../PokemonItem";
import { Paginate } from "../../../../components/Pagination";

import style from "./styles.module.scss";

export const PokemonLayout = memo(({ pokemonList, page, handlePageChange }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        {pokemonList.map(({ name, image, price, id }) => (
          <PokemonItem
            name={name}
            image={image}
            price={price}
            id={id}
            key={id}
          />
        ))}
      </div>
      <Paginate currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
});
