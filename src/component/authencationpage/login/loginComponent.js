import React from "react"
import "../../../component/authencationpage/login/login.css"
import { Formik } from "formik";
import{FormGroup,Label,Input} from "reactstrap"
import {LoginValidator} from "../../../validation/utility/LoginValidation"

const LoginComponent = () => {
  return (
    <div className=" background  d-flex justify-content-center">
      
      
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, action) => {
          console.log(values);
        }}
        validationSchema={LoginValidator}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form >
            <div className=" login rounded p-4" >
            <FormGroup className="">
            <h1>WELCOME</h1>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {touched.email && errors.email && (
              <span
                className="text-danger col-md-12 text-left mb-2"
                style={{ fontSize: 12 }}
              >
                {errors.email}
              </span>
            )}
            </FormGroup>
            <FormGroup className="">
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="password placeholder"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {touched.password && errors.password && (
              <span
                className="text-danger col-md-12 text-left mb-2"
                style={{ fontSize: 12 }}
              >
                {errors.password}
              </span>
            )}
            </FormGroup>
            <FormGroup className="">
              <button className="bg-primary rounded" type="button"  onClick={handleSubmit}>login</button>
            </FormGroup>
            </div>
          </form>
        )}
      </Formik>
     
    </div>
  );
};
export default LoginComponent;
