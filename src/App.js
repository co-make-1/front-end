import React from 'react';
import { Route, Link, Redirect } from "react-router-dom"
import './App.css';
import Nav from './components/authentication/Nav';

// Components
import Login from "./components/authentication/Login"
import FormikSignup from "./components/authentication/Signup"

function App() {
  return (
    <div className="App">
     {/* <h1> Test Render </h1> */}
      <Nav/>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup" component={FormikSignup} />
      {/* Private Routes go here */}
    </div>
  );
}

export default App;
