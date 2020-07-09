import React from "react";
import { Form, FormGroup, Label, Input, CustomInput } from "reactstrap";
import { Formik } from "formik";
import { ProfileEditValidator } from "../../validation/utility/ProfileEditValidation";

const SignupComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          age: "",
          email: "",
          gender: "",
          phone: "",
          date: "",
          country: "",
          city: "",
          state: "",
          zip: "",
          picture:"",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
        validationSchema={ProfileEditValidator}
      >
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form>
            {" "}
            <FormGroup className="mt-4 p-4">
              <h1>Sample Form</h1>
              <h5 className="text-left m-4">
                NOTE:All Candidate Must Fillup All Information
              </h5>

              <div className="row d-flex justify-content-around mt-4">
                <div className="col-md-4">
                  <Label>First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="enter your name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {touched.firstName && errors.firstName && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.firstName}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <Label>Middle Name</Label>
                  <Input
                    type="text"
                    name="middleName"
                    placeholder="enter your name"
                    value={values.middleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.middleName && errors.middleName && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.middleName}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <Label>Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="enter your name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && errors.lastName && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className=" row d-flex justify-content-between mt-4">
                <div className="col-md-4">
                  <Label>Age</Label>
                  <Input
                    type="number"
                    name="age"
                    placeholder="enter your Age"
                    value={values.age}
                    min={0}
                    onChange={handleChange}
                  />
                  {touched.age && errors.age && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.age}
                    </span>
                  )}
                </div>

                <div className="col-md-4">
                  <Label>Phone number</Label>
                  <Input
                    name="phone"
                    type="number"
                    placeholder="enter your "
                    value={values.phone}
                    min={99999999}
                    max={9999999999}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phone && errors.phone && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="col-4">
                  <Label for="exampleDate">Date of Birth</Label>
                  <Input
                    type="date"
                    name="date"
                    value={values.date}
                    id="exampleDate"
                    placeholder="date placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.date && errors.date && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.date}
                    </span>
                  )}
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <Label for="exampleCity">Country</Label>
                  <Input
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.country && errors.country && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.country}
                    </span>
                  )}
                </div>

                <div className="col-md-3">
                  <Label for="exampleCity">City</Label>
                  <Input
                    type="text"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.city && errors.city && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.city}
                    </span>
                  )}
                </div>

                <div className="col-md-3">
                  <Label for="exampleSelect">state</Label>
                  <Input
                    type="select"
                    name="state"
                    value={values.state}
                    id="exampleSelect"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </Input>
                  {touched.state && errors.state && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.state}
                    </span>
                  )}
                </div>

                <div className="col-md-3">
                  <Label for="exampleZip">Zip</Label>
                  <Input
                    type="number"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.zip && errors.zip && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.zip}
                    </span>
                  )}
                </div>
              </div>

              <div className=" mt-4 w-50">
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="enter your email"
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
              </div>

              <div className="row mt-4">
                <div className="col-md-1">
                  <br />
                  <Input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Label className="">male</Label>
                </div>
                <div className="col-md-1">
                  <br />
                  <Input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Label className="align-right">female</Label>
                </div>
                {touched.gender && errors.gender && (
                  <span
                    className="text-danger col-md-12 text-left mb-2"
                    style={{ fontSize: 12 }}
                  >
                    {errors.gender}
                  </span>
                )}
              </div>

              <br />

              <div className="mt-4 mb-4">
                <Label>PP Photo</Label>
                <Input
                  type="file"
                  name="pic"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("pic", event.currentTarget.files[0]);
                  }}
                />

                {touched.pic && values.pic && (
                  <img
                    src={URL.createObjectURL(values.pic)}
                    alt="no pic"
                    height="200"
                  />
                )}
              </div>

              <div className="float-left">
                <CustomInput
                  type="switch"
                  id="exampleCustomSwitch2"
                  name="customSwitch"
                  label="Information is correct"
                />
              </div>
              <br />

              <button className=" float-left  mt-4" onClick={handleSubmit}>
                submit
              </button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignupComponent;
