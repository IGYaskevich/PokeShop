import { memo } from "react";

import { ButtonGroups } from "../../../../components/ButtonGroup";
import { Abilities } from "../Abilities";

import { Stats } from "../Stats";

import Paper from "@mui/material/Paper";
import style from "./styles.module.scss";

export const PokemonDetailItem = memo(
  ({ abilities, image, name, price, stats }) => {
    return (
      <Paper className={style.container} elevation={3}>
        <div className={style.pokemonDescription}>
          <div className={style.image}>
            <img src={image} alt={"pokemonImage"} />
          </div>
          <h1 className={style.name}>{name && name.toUpperCase()}</h1>
        </div>

        {<Abilities abilities={abilities} name={name} />}

        <div className={style.pokemonStats}>{<Stats stats={stats} />}</div>

        <div className={style.buttons}>

          <div className={style.price}>price: {price}$</div>
          <ButtonGroups />

        </div>
      </Paper>
    );
  }
);
