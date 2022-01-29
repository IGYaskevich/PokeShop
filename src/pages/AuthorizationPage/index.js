import { useFormik } from "formik";

import { Button, TextField } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { validationSchema } from "../../utils/validationSchema";

import mainContainer from "../../static/styles/mainContainer.module.scss";
import style from "../../static/styles/validation.module.scss";

export const Authorization = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={mainContainer.container}>
      <div className={style.content}>
        <Paper className={style.paper} elevation={5}>
          <form
            className={style.authorizationForm}
            onSubmit={formik.handleSubmit}
          >
            <h1>SIGN IN</h1>

            <TextField
              className={style.textField}
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className={style.textField}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              className={style.button}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Log in
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};
