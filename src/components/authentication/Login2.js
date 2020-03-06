// import React from 'react';
// import { useForm } from 'react-hook-form';
// import "./signup.css";
// import axios from 'axios';
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";

// export default function Login2() {
//   const { register, handleSubmit, errors } = useForm();
//   const onSubmit = data => {
//     console.log("data",data);
//     axios
//       .post("https://reqres.in/api/login", data)
//       .then(res => {
//         console.log("res",res);
//       })
//       .catch(err => {
//         console.log("err",err);
//       })}
//   console.log(errors);

//   return (
//     <div className="page_container">
//     <div id="parent_cont" className="form1_container">
//     <form className="form" onSubmit={handleSubmit(onSubmit)}>
//     <h2> <Link id="head" to="/">Login!</Link></h2>
//         <label>Username</label>
//       <input className="signup_input" type="text" placeholder="Username" name="username" ref={register({required: true})} />
//       {errors.username && <p>Username required</p>}
//       <label>Password</label>
//       <input className="signup_input" type="password" placeholder="Password" name="password" ref={register({required: true, minLength: 4})} />
//       {errors.password && <p>Password required and should be at least 4 characters</p>}

//       <Button className="submit_button" color="primary" type="submit">Submit</Button>
//       <small>Don't have an account? <Link id="sign-up" to="/signup">Join the Team!</Link></small>
//     </form>
//     </div></div>
//   )}