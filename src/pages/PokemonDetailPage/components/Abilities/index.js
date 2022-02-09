import style from "./styles.module.scss";

export const Abilities = ({ abilities, name }) => {
  return (
    <div className={style.abilities}>
      {abilities &&
        abilities.map((ability, index) => (
          <div key={`${index}_${name}`}>
            <h4 className={style.title}> {ability.title.toUpperCase()}:</h4>
            <div className={style.decoration}> {ability.description}</div>
          </div>
        ))}
    </div>
  );
};
