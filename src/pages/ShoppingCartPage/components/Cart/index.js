import { Paper } from "@mui/material";

import { Order } from "../Order";
import { ButtonManager } from "../../../../components/Button";
import { HeaderCart } from "../HeaderCart";

import style from "./styles.module.scss";

export const Cart = () => {
  return (
    <Paper className={style.container} elevation={3}>
      <div className={style.content}>
        <HeaderCart />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
      <div className={style.cartManager}>
        <ButtonManager title={'Вернуться в магазин'}/>
        <ButtonManager title={'Оформить заказ'}/>
      </div>
    </Paper>
  );
};

