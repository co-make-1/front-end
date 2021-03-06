import React, { useState } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./signup.css";
import axios from "axios";
{/*import { withFormik, form, input } from "formik";
import * as Yup from "yup";*/}

const Signup = props => {

    const { register, handleSubmit, errors } = useForm();

    const [member, setMember] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        email: ""
    });

    const onSubmit = () => {
        // setMember([...member, data])
        // reset();
        axios
            .post("https://comake2.herokuapp.com/api/auth/register", member)
            .then(res => {
                console.log("Signup", res)
                props.history.push("/dashboard")
            })
            .catch(err => {
                console.log("Signup Error", err)
            })
    }

    const handleChanges = e => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        })
    }

    // console.log(member);


    return (
        <div className="page_container">
            <h1 className="h1"><span></span></h1>
            <div id="parent_cont" className="form1_container">
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <h2><Link id="h2" to="/">Join the Team!</Link></h2>


                    <label htmlFor="username" /> Username: {" "}
                    <input
                        className="signup_input"
                        ref={register({ required: true, minLength: 3, maxLength: 12 })}
                        type="text"
                        name="username"
                        placeholder="Enter username here"
                        value={member.username}
                        onChange={handleChanges}
                    />
                    {errors.fname && (<p>This is a required field</p>)}
                    {errors.fname && errors.fname.type === "minLength" && (<p>Field requires atleast 2 characters</p>)}
                    {errors.fname && errors.fname.type === "maxLength" && (<p>Field requires no more than 12 characters</p>)}

                    {/* <label htmlFor="fname" /> First Name: {" "}
                    <input
                        className="signup_input"
                        ref={register({ required: true, minLength: 2, maxLength: 12 })}
                        type="text"
                        name="fname"
                        placeholder="Enter first name here"
                        value={member.first_name}
                        onChange={handleChanges}
                    />
                    {errors.fname && (<p>This is a required field</p>)}
                    {errors.fname && errors.fname.type === "minLength" && (<p>Field requires atleast 2 characters</p>)}
                    {errors.fname && errors.fname.type === "maxLength" && (<p>Field requires no more than 12 characters</p>)} */}





                    {/* <label htmlFor="lname" /> Last Name: {" "}
                    <input
                        className="signup_input"
                        ref={register({ required: true, minLength: 2, maxLength: 12 })}
                        type="text"
                        name="lname"
                        placeholder="Enter last name here"
                        value={member.last_name}
                        onChange={handleChanges}
                    />
                    {errors.lname && (<p>This is a required field</p>)}
                    {errors.lname && errors.lname.type === "minLength" && (<p>Field requires atleast 2 characters</p>)}
                    {errors.lname && errors.lname.type === "maxLength" && (<p>Field requires no more than 12 characters</p>)} */}




                    {/* <label id="gender" htmlFor="gender" /> Gender
                <select
                        className="signup_input"
                        ref={register()}
                        name="gender"
                    >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> */}


                    {/* 
                    <label htmlFor="email" /> Email: {" "}
                    <input
                        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                        type="email"
                        name="email"
                        placeholder="Enter email here"
                        className="signup_input"
                        value={member.email}
                        onChange={handleChanges}
                    /> */}
                    {/* {touched.email && errors.email && (<p>{errors.email}</p>)} */}
                    {/* {errors.email && (<p>Email is a required field</p>)} */}



                    <label htmlFor="password" /> Password: {" "}
                    <input
                        ref={register({ required: true, minLength: 6, maxLength: 12 })}
                        type="password"
                        name="password"
                        placeholder="Enter password here"
                        className="signup_input"
                        value={member.password}
                        onChange={handleChanges}
                    />
                    { /* {touched.password && errors.password && (<p>{errors.password}</p>)} */}
                    {errors.password && (<p>Password is a required field</p>)}
                    {errors.password && errors.password.type === "maxLength" && (<p>Field requires no more than 12 characters</p>)}
                    {errors.password && errors.password.type === "minLength" && (<p>Field requires atleast 6 characters</p>)}


                    {/* <label htmlFor="birthday"/> Birthday: {" "}
                <input
                ref={register}
                name="birthday"
                type="date"
                className="signup_input"
                />  */}

                    <Button type="submit" className="submit_button" color="primary">Join the team!</Button>{' '}
                    <small>Already have an account? <Link id="sign_in" to="/login">Sign in here</Link></small>
                </form>
            </div>
        </div>
    )
}

//  const FormikSignup = withFormik({
//      mapPropsToValues({ email, fname, lname, password }){
//         return {
//          email: email || "",
//          fname: fname || "",
//          lname: lname || "",
//          password: password || "",
//      }},


//      validationSchema: Yup.object().shape({
//          email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
//          fname: Yup.string().required("Please enter your first name"),
//          password: Yup.string().max(12, "The maximum amount of characters allowed is 12").min(8,"Minimum characters allowed is 8").required(),
//      }),

//      handleSubmit (values, {resetForm}) {
//          resetForm()
//          console.log(values)
//      }


//  })(Signup);

export default Signup;