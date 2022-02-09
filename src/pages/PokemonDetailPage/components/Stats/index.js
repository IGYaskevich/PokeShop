import style from "./styles.module.scss";
import { pokeAbilities } from "../../../../static/rootImage/abilities";

export const Stats = ({ stats }) => {
  const imageAbilities = {
    hp: pokeAbilities.heart,
    attack: pokeAbilities.slash,
    defense: pokeAbilities.defense,
    "special-attack": pokeAbilities.fist,
    "special-defense": pokeAbilities.pokemon,
    speed: pokeAbilities.energetic,
  };
  return (
    <div className={style.stats}>
      <h4 className={style.title}>STATS:</h4>
      <div className={style.stat}>
        {stats &&
          stats.map((stats, index) => (
            <div key={`${index}_${stats.title}`}>
              <img
                className={style.imageAbilities}
                src={imageAbilities[stats.title]}
                alt={"ability"}
              />
              <div className={style.value}>{stats.value}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
