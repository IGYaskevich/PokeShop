import style from "./styles.module.scss";

export const Stats = ({ stats }) => {
  return (
    <div className={style.stats}>
      <h4 className={style.title}>STATS:</h4>
      {stats &&
        stats.map((stats, index) => (
          <div className={style.stat} key={`${index}_${stats.title}`}>
            {stats.title.toUpperCase()}: {stats.value}
          </div>
        ))}
    </div>
  );
};
