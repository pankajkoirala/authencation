import * as Yup from "yup";

export const RegistrationValidator = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
   .min(8, "Password is too short - should be 8 chars minimum."),  
   verifyPassword: Yup.string()
    .required("No password provided.")
   .min(8, "Password is too short - should be 8 chars minimum.").oneOf([Yup.ref('password'), null], 'Passwords must match')
});