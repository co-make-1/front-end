import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


const Signup = ({ values, errors, touched }) => {

    
    return (
<div className="page_container">
    <h1 className="h1"><span></span></h1>  
        <div id="parent_cont" className="form1_container">
           <Form className="form">
                <h2> <Link id="head" to="/">Join the Team!</Link></h2>

                <label htmlFor="fname" /> First Name: {" "}
                <Field 
                className="signup_input"
                id="fname"
                type="text"
                name="fname"
                placeholder="Enter first name here"
                />
                {touched.fname && errors.fname && (<p>{errors.fname}</p>)}

                <label htmlFor="lname" /> Last Name: {" "}
                <Field 
                className="signup_input"
                id="lname"
                type="text"
                name="lname"
                placeholder="Enter last name here"
                />
                {touched.lname && errors.lname && (<p>{errors.lname}</p>)}

                <label htmlFor="email" /> Email: {" "}
                <Field 
                id="email"
                type="email"
                name="email"
                placeholder="Enter email here"
                className="signup_input"
                />
                {touched.email && errors.email && (<p>{errors.email}</p>)}

                <label htmlFor="password" /> Password: {" "}
                <Field 
                id="password"
                type="password"
                name="password"
                placeholder="Enter password here"
                className="signup_input"
                />
                {touched.password && errors.password && (<p>{errors.password}</p>)}  

                {/* <label htmlFor="birthday"/> Birthday: {" "}
                <Field
                id="birthday"
                name="birthday"
                type="date"
                className="signup_input"
                /> */}

                <Button type="submit" className="submit_button" color="primary">Join the team!</Button>{' '}
                <small>Already have an account? <Link id="sign_in" to="/login">Login in here</Link></small>
            </Form>   
        </div>
    </div>
    )
}

const FormikSignup = withFormik({
    mapPropsToValues({ email, fname, lname, password }){
       return {
        email: email || "",
        fname: fname || "",
        lname: lname || "",
        password: password || "",
    }},


    validationSchema: Yup.object().shape({
        email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
        fname: Yup.string().required("Please enter your first name"),
        password: Yup.string().max(12, "The maximum amount of characters allowed is 12").min(8,"Minimum characters allowed is 8").required(),
    }),

    handleSubmit (values, {resetForm}) {
        resetForm()
        console.log(values)
    }


})(Signup);

export default FormikSignup;