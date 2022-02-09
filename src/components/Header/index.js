import { useSelector } from "react-redux";
import { authSelector } from "../../pages/LoginPage/selectors";
import { NavLink } from "react-router-dom";
import { ROUTES_NAMES } from "../../routes/routesNames";

import { icon } from "../../static/MaterialUI/icons";
import { image } from "../../static/rootImage/images";

import mainContainer from "../../static/styles/mainContainer.module.scss";
import style from "./styles.module.scss";
import AuthService from "../../services/authService";

export const Header = () => {
  const { isAuth } = useSelector(authSelector);

  return (
    <div className={mainContainer.container}>
      <div className={style.content}>
        <NavLink className={style.link} to={ROUTES_NAMES.HOME}>
          <img className={style.logo} src={image.logo} alt="logo" />
        </NavLink>

        <NavLink className={style.link} to={ROUTES_NAMES.POKEMON}>
          SHOP
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
          <div className={style.countBlock}>
            <div>COUNT</div>
            <div className={style.countProducts}> 10</div>
          </div>
        </NavLink>

        {isAuth ? (
          <div className={style.login}>
            <NavLink to={ROUTES_NAMES.USER}>
              <img
                className={style.icon}
                src={image.avatarUser}
                alt={"avatar"}
              />
            </NavLink>

            <NavLink to={ROUTES_NAMES.HOME}>
              <img
                className={style.icon}
                src={image.logOut}
                alt={"loginOut"}
                onClick={() => AuthService.signOut()}
              />
            </NavLink>
          </div>
        ) : (
          <div className={style.login}>
            <NavLink to={ROUTES_NAMES.SING_IN}>
              <icon.LoginIcon fontSize={"large"} color={"action"} />
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
