import { Paper } from "@mui/material";
import style from "./styles.module.scss";
import emptyCart from "../../../static/images/empty-cart.png";

export const EmptyCart = () => {
  return (
    <Paper className={style.content} elevation={3}>
      <h2>Корзина пустая <>😕</></h2>
      <p>
        Вероятней всего, вы ещё не добавили заказ.<br/>
        Для того, чтобы заказать покемона, перейди на страницу магазина.
      </p>
      <img className={style.imgCart} src={emptyCart} alt={'Empty cart'}/>
    </Paper>
  );
};

