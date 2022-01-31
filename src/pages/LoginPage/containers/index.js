import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Navigate } from "react-router-dom";

import { SIGN_IN_REQUEST } from "../actions";
import { ROUTES_NAMES } from "../../../routes/routesNames";
import { loginValidationSchema } from "../../../utils/validationSchema";

import { LoginForm } from "../components/LoginForm";
import { authSelector } from "../selectors";

import mainContainer from "../../../static/styles/mainContainer.module.scss";
import validationStyle from "../../../static/styles/validation.module.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(authSelector);

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(SIGN_IN_REQUEST(values));
    },
  });

  return (
    <div className={mainContainer.container}>
      <div className={validationStyle.content}>
        {isAuth ? (
          <Navigate to={ROUTES_NAMES.HOME} />
        ) : (
          <LoginForm form={loginForm} />
        )}
      </div>
    </div>
  );
};
