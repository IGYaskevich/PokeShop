import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { RegisterForm } from "../components/RegisterForm";
import { registerSelector } from "../selectors";
import { registerValidationSchema } from "../../../utils/validationSchema";
import { SIGN_UP_REQUEST } from "../actions";

import mainContainer from "../../../static/styles/mainContainer.module.scss";
import validationStyle from "../../../static/styles/validation.module.scss";
import { Spinner } from "../../../components/Spinner";
import { Alert } from "@mui/material";

export const Register = () => {
  const dispatch = useDispatch();
  const { success, message, isLoading, errors } = useSelector(registerSelector);

  const registerForm = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: {
        country: " ",
        city: " ",
        addressLine1: " ",
        addressLine2: " ",
      },
      gender: "",
      password: "",
      phone: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      dispatch(SIGN_UP_REQUEST(values));
    },
  });

  return (
    <div className={mainContainer.container}>
      <div className={validationStyle.content}>
        <div className={validationStyle.error}>
          {success && <Alert severity="success">{message}</Alert>}
        </div>

        {isLoading ? <Spinner /> : <RegisterForm form={registerForm} />}
      </div>
    </div>
  );
};
