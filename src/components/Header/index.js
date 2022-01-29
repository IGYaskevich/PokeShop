import { NavLink } from "react-router-dom";

import { ROUTES_NAMES } from "../../routes/routesNames";

import logo from "../../static/images/logo.png";
import shoppingBasket from "../../static/images/happyPoke.png";

import style from "./styles.module.scss";
import mainContainer from "../../static/styles/mainContainer.module.scss";
import { Spinner } from "../Spinner";

export const Header = () => {
  return (
    <div className={mainContainer.container}>
      <div className={style.content}>
        <NavLink className={style.link} to={ROUTES_NAMES.AUTHORIZATION}>
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.REGISTRATION}>
          Registration
        </NavLink>{" "}
        <NavLink className={style.link} to={ROUTES_NAMES.AUTHORIZATION}>
          AUTHORIZATION
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.AUTHORIZATION}>
          BLOG
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.AUTHORIZATION}>
          ABOUT US
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.AUTHORIZATION}>
          SHOP
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.AUTHORIZATION}>
          CONTACT
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.SHOPPING_BASKET}>
          <img className={style.logo} src={shoppingBasket} alt="basket" />
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.SHOPPING_BASKET}>
          <Spinner />
        </NavLink>
      </div>
    </div>
  );
};
