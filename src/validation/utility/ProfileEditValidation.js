import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ProfileEditValidator = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  middleName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
   
  lastName: Yup.string() 
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    DOB:  Yup.date()
  .required('Required'),
  mobileNo: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  gender: Yup.string().oneOf(["male", "female"]).required("Required"),
  pCountry: Yup.string().max(50, "Too Long!").required("Required"),
  pCity: Yup.string().max(50, "Too Long!").required("Required"),
  pProvience: Yup.string().oneOf(["1","2","3","4","5","6","7"]).required("Required"),
  pPhoneNo: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  tCountry: Yup.string().max(50, "Too Long!").required("Required"),
  tCity: Yup.string().max(50, "Too Long!").required("Required"),
  tProvience: Yup.string().oneOf(["1","2","3","4","5","6","7"]).required("Required"),
  tPhoneNo:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});