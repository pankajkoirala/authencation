import * as Yup from "yup";

export const ProfileEditValidator = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  middleName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string() 
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number().integer().positive()
    .min(2, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  gender: Yup.string().oneOf(["male", "female", "other"]).required("Required"),
  phone: Yup.number().integer().positive()
    .min(999999999, "Too Short!")
    .max(9999999999, "Too Long!")
    .required("Required"),
  date:  Yup.date()
  .required('Required'),
  country: Yup.string().max(50, "Too Long!").required("Required"),
  city: Yup.string().max(50, "Too Long!").required("Required"),
  state: Yup.string().oneOf(["1","2","3","4","5","6","7"]).required("Required"),
  zip: Yup.number().integer().positive()
    .max(99999, "Too Long!")
    .required("Required"),
});