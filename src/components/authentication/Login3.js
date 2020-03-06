// import React from "react";
// import ReactDOM from "react-dom";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";
// import "./signup.css";
// import axios from "axios";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";

// function Login3({ values, errors, touched, isSubmitting }) {
//   return (
//     <div className="page_container">
//     <div id="parent_cont" className="form1_container">
//     < Form className="form">
//       <h2> <Link id="head" to="/">Login!</Link></h2>
//         <label>Email: </label>
//         <Field className="signup_input" type="email" name="email" placeholder="Email" />
//         {touched.email && errors.email && <p>{errors.email}</p>}
//       {/* <div>
//         {touched.name && errors.name && <p>{errors.name}</p>}
//         <Field type="text" name="name" placeholder="Name" />
//       </div> */}
//         <label>Password: </label>
//         <Field className="signup_input" type="password" name="password" placeholder="Password" />
//         {touched.password && errors.password && <p>{errors.password}</p>}
//       <Button className="submit_button" color="primary" disabled={isSubmitting}>Submit</Button>
//       <small>Don't have an account? <Link id="sign-up" to="/signup">Join the Team!</Link></small>
//     </Form>
//     </div> </div>
//   );
// }

// const FormikLoginForm = withFormik({
//   mapPropsToValues({ email, password, tos, meal }) {
//     return {
//       email: email || "",
//     //   name: name || "",
//       password: password || ""
//     };
//   },
//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .email("Email not valid")
//       .required("Email is required"),
//     //   name: Yup.string()
//     //   .required("Name is required"),
//     password: Yup.string()
//       .min(4, "Password must be 4 characters or longer")
//       .required("Password is required")
//   }),
//   handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
//       console.log(values)
//       axios
//         .post("https://reqres.in/api/login", values)
//         .then(res => {
//           console.log(res);
//           resetForm();
//           setSubmitting(false);
//         })
//         .catch(err => {
//           console.log(err);
//           setSubmitting(false);
//         })
//   }
// })(Login3);

// export default FormikLoginForm;