import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../pages/LoginPage/selectors";
import { ROUTES_NAMES } from "./routesNames";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector(authSelector);
  return isAuth ? children : <Navigate to={ROUTES_NAMES.SING_IN} />;
};
