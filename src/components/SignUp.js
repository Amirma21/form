import React, { useState } from "react";
import { useFormik } from "formik";
import "./SignUp.css"

const submitHandler = (value) => {
  // submit Handler
  console.log(value);
};

const initialValues = { name: "", email: "", password: "" }; // inirialValues

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "password is required";
  }

  return errors;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validate,
  }); // manage state , handling submit and validation with fomik

  console.log(formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="formParent" >
        <div className="form" >  
          <label>Name</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            value={formik.values.name}
            name="name"
          ></input>
          {formik.errors.name &&  formik.touched.name && <div className="error">{formik.errors.name}</div>}
        </div>
        <div className="form">
          <label>Email</label>
          <input
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            name="email"
          ></input>
          {formik.errors.email &&  formik.touched.email && <div className="error">{formik.errors.email}</div>}
        </div>
        <div className="form">
          <label>password</label>
          <input
            type="text"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="password"
          ></input>
          {formik.errors.password &&  formik.touched.password && <div className="error">{formik.errors.password}</div>}
        </div>
        <button type="submit" className="submitBtn">submit</button>
      </form>
    </div>
  );
};

export default SignUp;
