import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Formik } from "formik";
import { ProfileEditValidator } from "../../validation/utility/ProfileEditValidation";

const SignupComponent = (props) => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          gender: "",
          mobileNo: "",
          DOB: "",
          photo: "",
          pCountry: "",
          pCity: "",
          pProvience: "",
          pPhoneNo: "",
          tCountry: "",
          tCity: "",
          tProvience: "",
          tPhoneNo: "",
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
              <h5 className="text-left my-4">Personal Information</h5>

              <div className="row d-flex justify-content-around mt-4">
                <div className="col-md-4">
                  <Label>
                    First Name{" "}
                    <span className="text-danger font-weight-bold ">*</span>{" "}
                  </Label>
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
                  <Label>
                    Last Name{" "}
                    <span className="text-danger font-weight-bold ">*</span>
                  </Label>
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

              <div className=" row d-flex justify-content-evenly mt-4">
                <div className="col-md-4">
                  <Label>
                    mobileNo number{" "}
                    <span className="text-danger font-weight-bold ">*</span>
                  </Label>
                  <Input
                    name="mobileNo"
                    type="number"
                    placeholder="enter your "
                    value={values.mobileNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.mobileNo && errors.mobileNo && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.mobileNo}
                    </span>
                  )}
                </div>

                <div className="col-4">
                  <Label for="exampleDate">
                    Date of Birth{" "}
                    <span className="text-danger font-weight-bold ">*</span>
                  </Label>
                  <Input
                    type="date"
                    name="DOB"
                    value={values.DOB}
                    id="exampleDate"
                    placeholder="date placeholder"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.DOB && errors.DOB && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.DOB}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <h5 className="mt-4">
                  gender{" "}
                  <span className="text-danger font-weight-bold ">*</span>
                </h5>

                <div className=" mx-4">
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
                <div className=" mx-4">
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

              <div>
                <h6 className="mt-4">Temporary Address </h6>
                <div className="row">
                  <div className="col-md-3">
                    <Label for="examplepCity">
                      Country{" "}
                      <span className="text-danger font-weight-bold ">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="tCountry"
                      value={values.tCountry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tCountry && errors.tCountry && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tCountry}
                      </span>
                    )}
                  </div>

                  <div className="col-md-3">
                    <Label for="examplepCity">
                      City
                      <span className="text-danger font-weight-bold ">*</span>
                    </Label>
                    <Input
                      type="text"
                      name="tCity"
                      value={values.tCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tCity && errors.tCity && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tCity}
                      </span>
                    )}
                  </div>

                  <div className="col-md-3">
                    <Label for="exampleSelect">
                      Provience
                      <span className="text-danger font-weight-bold ">*</span>
                    </Label>
                    <Input
                      type="select"
                      name="tProvience"
                      value={values.tProvience}
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
                    {touched.tProvience && errors.tProvience && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tProvience}
                      </span>
                    )}
                  </div>
                  <div className="col-md-3">
                    <Label for="examplepCity">Phone number</Label>
                    <Input
                      type="number"
                      name="tPhoneNo"
                      value={values.tPhoneNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tPhoneNo && errors.tPhoneNo && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tPhoneNo}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h6 className="mt-4">Permanent Address</h6>
                <div className="row">
                  <div className="col-md-3">
                    <Label for="examplepCity">Country</Label>
                    <Input
                      type="text"
                      name="pCountry"
                      value={values.pCountry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.pCountry && errors.pCountry && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.pCountry}
                      </span>
                    )}
                  </div>

                  <div className="col-md-3">
                    <Label for="examplepCity">City</Label>
                    <Input
                      type="text"
                      name="pCity"
                      value={values.pCity}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.pCity && errors.pCity && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.pCity}
                      </span>
                    )}
                  </div>

                  <div className="col-md-3">
                    <Label for="exampleSelect">Provience</Label>
                    <Input
                      type="select"
                      name="pProvience"
                      value={values.pProvience}
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
                    {touched.pProvience && errors.pProvience && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.pProvience}
                      </span>
                    )}
                  </div>
                  <div className="col-md-3">
                    <Label for="examplepCity">Phone number</Label>
                    <Input
                      type="number"
                      name="pPhoneNo"
                      value={values.pPhoneNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.pPhoneNo && errors.pPhoneNo && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.pPhoneNo}
                      </span>
                    )}
                  </div>
                </div>
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

              <button
                className=" float-left  mt-4"
                type="button"
                onClick={() => {
                  props.showDisplay();
                  //handlesummit
                }}
              >
                Update
              </button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default SignupComponent;
