import { useSelector } from "react-redux";
import { authSelector } from "../../pages/LoginPage/selectors";
import { NavLink } from "react-router-dom";
import { ROUTES_NAMES } from "../../routes/routesNames";

import { icon } from "../../static/icons/icons";
import shoppingBasket from "../../static/images/happyPoke.png";
import logo from "../../static/images/logo.png";

import mainContainer from "../../static/styles/mainContainer.module.scss";
import style from "./styles.module.scss";

export const Header = () => {
  const { isAuth } = useSelector(authSelector);
  return (
    <div className={mainContainer.container}>
      <div className={style.content}>
        <NavLink className={style.link} to={ROUTES_NAMES.HOME}>
          <img className={style.logo} src={logo} alt="logo" />
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.POKEMON}>
          POKEMON SHOP
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.ABOUT_US}>
          ABOUT US
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.BLOG}>
          BLOG
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.CONTACT}>
          CONTACT
        </NavLink>
        <NavLink className={style.link} to={ROUTES_NAMES.SHOPPING_BASKET}>
          <img className={style.logo} src={shoppingBasket} alt="basket" />
          Count
        </NavLink>
        {isAuth ? (
          <div className={style.login}>
            <NavLink to={ROUTES_NAMES.USER}>
              <icon.FaceIcon fontSize={"large"} color={"secondary"} />
            </NavLink>
            <NavLink to={ROUTES_NAMES.HOME}>
              <icon.LogoutIcon fontSize={"large"} color={"secondary"} />
            </NavLink>
          </div>
        ) : (
          <div className={style.login}>
            <NavLink to={ROUTES_NAMES.AUTHORIZATION}>
              <icon.LockOpenIcon fontSize={"large"} color={"error"} />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
