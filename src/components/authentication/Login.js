
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import { withFormik, Field } from "formik";
// import * as Yup from "yup";
// import "./login.css";
// import { Form, Message } from 'semantic-ui-react';
// import {axiosWithAuth} from "../../utils/axiosWithAuth";

import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


const Login = ({ errors, touched }) => {


    
return (
<div className="page_container">
    <h1 className="h1"><span></span></h1>  
        <div id="parent_cont" className="form1_container">
           <Form className="form">
                <h2> <Link id="head" to="/">Login!</Link></h2>

                <label htmlFor="name" /> Name: {" "}
                <Field 
                className="signup_input"
                id="name"
                type="text"
                name="fname"
                placeholder="Enter name here"
                />
                {touched.fname && errors.fname && (<p>{errors.fname}</p>)}

                <label htmlFor="password" /> Password: {" "}
                <Field 
                id="password"
                type="password"
                name="password"
                placeholder="Enter password here"
                className="signup_input"
                />
                {touched.password && errors.password && (<p>{errors.password}</p>)}  

                
       <Button type="submit" className="submit_button" color="primary">Submit!</Button>{' '}
                <small>Don't have an account? <Link id="sign-up" to="/signup">Join the Team!</Link></small>
       </Form>   
       </div></div> )}

const FormikLogin = withFormik({
    mapPropsToValues({ name, password }){
       return {
        
        name: name || "",
        password: password || "",
    }},


    validationSchema: Yup.object().shape({
        fname: Yup.string().required("Please enter your name"),
        password: Yup.string().required("password is a required field").min(4),
    }),

    handleSubmit (values, {resetForm}) {
        resetForm()
        console.log(values)
    }


})(Login);

export default FormikLogin;
