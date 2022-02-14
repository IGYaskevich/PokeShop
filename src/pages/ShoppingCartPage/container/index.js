import { EmptyCart } from "../components/EmptyCart";
import { Cart } from "../components/Cart";

import mainContainer from "../../../static/styles/mainContainer.module.scss";

export const ShoppingCart = () => {
  return <div className={mainContainer.container}>
    {/*<EmptyCart />*/}
    <Cart/>
  </div>;
};
