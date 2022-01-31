import { Route, Routes } from "react-router-dom";
import { ROUTES_NAMES } from "./routesNames";
import { Login } from "../pages/LoginPage/containers";
import { Register } from "../pages/RegisterPage/containers";
import { ShoppingBasket } from "../pages/ShoppingBasketPage";
import { PokemonPageContainer } from "../pages/PokemonsPage/containers/PokemonPageContainer";
import { PokemonDetailContainer } from "../pages/PokemonDetailPage/container/PokemonDetailContainer";
import { PrivateRoute } from "./PrivateRoute";
import { HomePage } from "../pages/HomePage/containers";
import { AboutUsPage } from "../pages/AboutUsPage/containers";
import { BlogPage } from "../pages/BlogPage/containers";
import { ContactPage } from "../pages/ContactPage/containers";
import { UserPage } from "../pages/UserPage/containers";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES_NAMES.HOME} element={<HomePage />} />
      <Route path={ROUTES_NAMES.AUTHORIZATION} element={<Login />} />
      <Route path={ROUTES_NAMES.REGISTRATION} element={<Register />} />
      <Route
        path={ROUTES_NAMES.POKEMON}
        element={
          <PrivateRoute>
            <PokemonPageContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES_NAMES.POKEMON_DETAIL}
        element={
          <PrivateRoute>
            <PokemonDetailContainer />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES_NAMES.ABOUT_US}
        element={
          <PrivateRoute>
            <AboutUsPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES_NAMES.BLOG}
        element={
          <PrivateRoute>
            <BlogPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES_NAMES.CONTACT}
        element={
          <PrivateRoute>
            <ContactPage />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES_NAMES.SHOPPING_BASKET}
        element={
          <PrivateRoute>
            <ShoppingBasket />
          </PrivateRoute>
        }
      />
      <Route
        path={ROUTES_NAMES.USER}
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
