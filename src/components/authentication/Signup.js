import React, { useState } from "react";
import { Field, Form } from "formik";
import * as Yup from "yup";
import "./signup.css";

const Signup = () => {
   
  return (
      <div>
    <Form>
        <label htmlFor="email"/> Email:
        <Field
        id="email"
        type="email"
        name="email"
        placeHolder="Type email here"
        />
    </Form>
    </div>
  );
};


export default Signup;