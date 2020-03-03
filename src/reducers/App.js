import React from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import '../App.css';

// Components
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";

function App() {
  return (
    <div className="App">
      <h1> Test Render </h1>
      {/* Nav bar goes here */}
      {/* <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} /> */}
      <Route path="/signup" component={Signup} /> 
      {/* Private Routes go here */}
    </div>
  );
}

export default App;
