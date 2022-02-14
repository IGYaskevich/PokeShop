import mainContainer from "../../../static/styles/mainContainer.module.scss";
import { EmptyCart } from "../components";

export const ShoppingBasket = () => {
  return <div className={mainContainer.container}>
    <EmptyCart />
  </div>;
};
