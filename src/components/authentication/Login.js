import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./signup.css";
import axios from 'axios';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const [member, setMember] = useState({
    username: "",
    password: ""
  })

  const onSubmit = (data, e) => {
    console.log("data", data);
    axios
      .post("https://comake2.herokuapp.com/api/auth/login", member)
      .then(res => {
        console.log("res", res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("ID", res.data.userID);
        props.history.push("/dashboard")
        window.location.reload(false)
      })
      .catch(err => {
        console.log("err", err);
      })
  }
  // console.log(errors);

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="page_container">
      <div id="parent_cont" className="form1_container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h2> <Link id="head" to="/">Login!</Link></h2>

          <label>Username</label>
          <input
            className="signup_input"
            type="text"
            placeholder="Username"
            name="username"
            value={member.username}
            onChange={handleChanges}
            ref={register({ required: true })} />
          {errors.username && <p>Username required</p>}

          <label>Password</label>
          <input
            className="signup_input"
            type="password"
            placeholder="Password"
            name="password"
            value={member.password}
            onChange={handleChanges}
            ref={register({ required: true, minLength: 4 })} />
          {errors.password && <p>Password required and should be at least 4 characters</p>}

          <Button className="submit_button" color="primary" type="submit">Submit</Button>
          <small>Don't have an account? <Link id="sign-up" to="/signup">Join the Team!</Link></small>
        </form>
      </div></div>
  )
}