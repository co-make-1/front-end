import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./signup.css";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Hero from "./img/hero.jpg";


const Signup = ({ values, errors, touched }) => {

    
    return (
<div className="page_container">
    <h1>Join the Team!</h1> 
    <div className="img_holder">
        <img src={Hero}/>
    </div>    
        <div className="form_container">
            <Form className="form">
                <label htmlFor="fname" /> First Name: {" "}
                <Field 
                id="fname"
                type="text"
                name="fname"
                placeholder="Enter first name here"
                />
                {touched.fname && errors.fname && (<p>{errors.fname}</p>)}

                <label htmlFor="lname" /> Last Name: {" "}
                <Field 
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
                />
                {touched.email && errors.email && (<p>{errors.email}</p>)}

                <label htmlFor="password" /> Password: {" "}
                <Field 
                id="password"
                type="password"
                name="password"
                placeholder="Enter password here"
                />
                {touched.password && errors.password && (<p>{errors.password}</p>)}  

                <Button type="submit" className="submit_button" color="primary">Join the team!</Button>{' '}
                <small>Already have an account? <Link to="./login">Sign in here</Link></small>
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
        email: Yup.string().email("Please enter a valid email").required("Email required"),
        fname: Yup.string().required("Please enter your first name"),
        password: Yup.string().max(12, "The maximum amount of characters allowed is 12").min(8,"Minimum characters allowed is 8"),
    }),

    handleSubmit (values, {resetForm}) {
        resetForm()
        console.log(values)
    }


})(Signup);

export default FormikSignup;