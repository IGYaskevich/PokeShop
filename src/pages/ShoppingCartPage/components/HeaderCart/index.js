import { ButtonManager } from "../../../../components/Button";
import cartImg from "../../../../static/images/location.png";

import style from "./styles.module.scss";

export const HeaderCart = () => {
  return (
      <div className={style.headerCart}>
        <div className={style.title}>
          <img className={style.cartImg} src={cartImg} alt={'cartImg'}/>
          Корзина
        </div>
        <ButtonManager title={'Очистить корзину'}/>
      </div>
  );
};

