import { Paper, Stack } from "@mui/material";
import Button from "@mui/material/Button";

import cartImg from '../../../../static/images/carts.png'
import style from "./styles.module.scss";
import { Order } from "../Order";

export const Cart = () => {
  return (
      <Paper className={style.container} elevation={3}>
        <div className={style.content}>
          <div className={style.headerCart}>
            <div className={style.title}>
              <img className={style.cartImg} src={cartImg} alt={'cartImg'}/>
              Корзина
            </div>
            <Stack direction="row" spacing={2}>
              <Button color="secondary">Очистить корзину</Button>
            </Stack>
          </div>
         <Order/>
         <Order/>
         <Order/>
         <Order/>
        </div>

      </Paper>
  );
};

