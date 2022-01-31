import * as yup from "yup";

export const registerValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  firstName: yup
    .string("Enter your name")
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  lastName: yup
    .string("Enter your last name")
    .min(2, "Name should be of minimum 2 characters length")
    .required("Last name is required"),
  gender: yup
    .string("Enter gender male or female")
    .min(4, "Enter gender male or female")
    .required("Gender is required"),
  phone: yup
    .string("Enter your phone")
    .min(10, "Enter your phone")
    .required("Phone is required"),
});

export const loginValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
