import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { RegisterForm } from "../components/RegisterForm";
import { registerSelector } from "../selectors";
import { registerValidationSchema } from "../../../utils/validationSchema";
import { SIGN_UP_REQUEST } from "../actions";

import mainContainer from "../../../static/styles/mainContainer.module.scss";
import style from "../../../static/styles/validation.module.scss";

export const Register = () => {
  const dispatch = useDispatch();
  const { success, message } = useSelector(registerSelector);

  const registerForm = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
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
      <div className={style.content}>
        {success ? <div>{message}</div> : <RegisterForm form={registerForm} />}
      </div>
    </div>
  );
};
