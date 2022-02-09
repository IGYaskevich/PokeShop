import { memo } from "react";
import { Link } from "react-router-dom";

import { ButtonGroups } from "../../../../components/ButtonGroup";

import { ROUTES_NAMES } from "../../../../routes/routesNames";

import { Paper } from "@mui/material";

import style from "./styles.module.scss";

export const PokemonItem = memo(({ name, image, price, id }) => {
  return (
    <div className={style.container}>
      <Paper className={style.content} elevation={3}>
        <Link to={`${ROUTES_NAMES.POKEMON}/${id}`} className={style.link}>
          <h3 className={style.name}>{name.toUpperCase()}</h3>
          <img className={style.image} src={image} alt={"pokemonImg"} />
        </Link>
        <div className={style.price}>price: {price}$</div>

        <ButtonGroups />
      </Paper>
    </div>
  );
});
