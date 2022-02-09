import { useCallback, useState } from "react";

import { NavLink } from "react-router-dom";

import { ROUTES_NAMES } from "../../../routes/routesNames";

import { Button, TextField } from "@material-ui/core";
import { Box, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import validationStyle from "../../../static/styles/validation.module.scss";

export const LoginForm = ({ form }) => {
  const [value, setValue] = useState(false);

  const handleClickShowPassword = useCallback(() => setValue(!value), [value]);

  return (
    <Paper className={validationStyle.paper} elevation={5}>
      <form
        className={validationStyle.authorizationForm}
        onSubmit={form.handleSubmit}
      >
        <h1>SIGN IN</h1>
        <Box className={validationStyle.textField}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.touched.email && form.errors.email}
          />
        </Box>
        <Box className={validationStyle.textField}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type={value ? "text" : "password"}
            value={form.values.password}
            onChange={form.handleChange}
            error={form.touched.password && Boolean(form.errors.password)}
            helperText={form.touched.password && form.errors.password}
            autoComplete="off"
          />
          <div onClick={handleClickShowPassword}>
            {value ? <VisibilityOff /> : <Visibility />}
          </div>
        </Box>
        <Button
          className={validationStyle.button}
          color="primary"
          variant="contained"
          fullWidth
          disabled={!form.values.password || !form.values.email}
          type="submit"
        >
          Log in
        </Button>
        <div className={validationStyle.button}>
          Don't have an account?
          <NavLink to={ROUTES_NAMES.SING_UP}>SING UP</NavLink>
        </div>
      </form>
    </Paper>
  );
};
