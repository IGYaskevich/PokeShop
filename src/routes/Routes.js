import { Route, Routes } from "react-router-dom";
import { ROUTES_NAMES } from "./routesNames";
import { Authorization } from "../pages/AuthorizationPage";
import { Registration } from "../pages/RegistrationPage";
import { ShoppingBasket } from "../pages/ShoppingBasketPage";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAMES.AUTHORIZATION} element={<Authorization />} />
      <Route path={ROUTES_NAMES.REGISTRATION} element={<Registration />} />
      <Route path={ROUTES_NAMES.SHOPPING_BASKET} element={<ShoppingBasket />} />
    </Routes>
  );
};
