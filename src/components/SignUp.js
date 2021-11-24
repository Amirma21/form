
import { useFormik } from "formik";
import "./SignUp.css";
import * as Yup from 'yup';

const submitHandler = (value) => {
  // submit Handler
  console.log(value);
};

const initialValues = { name: "", email: "", password: "" }; // inirialValues

const validationSchema = Yup.object({
  name: Yup.string().min(2).required(" Name is required "),
  email: Yup.string().email("invalid email format").required("Email is required")  ,
  password:Yup.string("invalid password format").required("password is required ")
})


const SignUp = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema,
  }); // manage state , handling submit and validation with fomik

  // console.log(formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="formParent">
        <div className="form">
          <label>Name</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            value={formik.values.name}
            name="name"
          ></input>
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
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
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
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
          {formik.errors.password && formik.touched.password && (
            <div className="error">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className="submitBtn">
          submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
