import React from "react";
import spinner from "../../static/images/spinner.png";
import style from "./styles.module.scss";

export const Spinner = () => {
  return (
    <div className={style.spinner}>
      <img className={style.image} src={spinner} alt="spinner" />
    </div>
  );
};
