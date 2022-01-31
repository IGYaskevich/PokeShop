import Paper from "@mui/material/Paper";
import { Button, TextField } from "@material-ui/core";

import validationStyle from "../../../static/styles/validation.module.scss";

export const RegisterForm = ({ form }) => {
  return (
    <Paper className={validationStyle.paper} elevation={5}>
      <form
        className={validationStyle.authorizationForm}
        onSubmit={form.handleSubmit}
      >
        <h1>REGISTER</h1>
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={form.values.email}
          onChange={form.handleChange}
          error={form.touched.email && Boolean(form.errors.email)}
          helperText={form.touched.email && form.errors.email}
        />
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="firstName"
          name="firstName"
          label="First name"
          value={form.values.firstName}
          onChange={form.handleChange}
          error={form.touched.firstName && Boolean(form.errors.firstName)}
          helperText={form.touched.firstName && form.errors.firstName}
        />
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="lastName"
          name="lastName"
          label="Last name"
          value={form.values.lastName}
          onChange={form.handleChange}
          error={form.touched.lastName && Boolean(form.errors.lastName)}
          helperText={form.touched.lastName && form.errors.lastName}
        />
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="gender"
          name="gender"
          label="Gender"
          value={form.values.gender}
          onChange={form.handleChange}
          error={form.touched.gender && Boolean(form.errors.gender)}
          helperText={form.touched.gender && form.errors.gender}
        />
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={form.values.password}
          onChange={form.handleChange}
          error={form.touched.password && Boolean(form.errors.password)}
          helperText={form.touched.password && form.errors.password}
        />
        <TextField
          className={validationStyle.textField}
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          value={form.values.phone}
          onChange={form.handleChange}
          error={form.touched.phone && Boolean(form.errors.phone)}
          helperText={form.touched.phone && form.errors.phone}
        />
        <Button
          className={validationStyle.button}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Log in
        </Button>
      </form>
    </Paper>
  );
};
