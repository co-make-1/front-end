import React from 'react';
import { Route, Switch, Link } from "react-router-dom"
import './App.css';
import Nav from './components/authentication/Nav';

// Components //Login2 - reacthookform, Login3 - formik, Login - initial
import Login from "./components/authentication/Login"
import Signup from "./components/authentication/Signup"
import PrivateRoute from "./utils/PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard"
import Login2 from "./components/authentication/Login2"
import Login3 from "./components/authentication/Login3"
import NewIssue from "./components/dashboard/NewIssue"
import EditIssue from "./components/dashboard/EditIssue"

function App() {
  return (
    <div className="App">
      {/* <h1> Test Render </h1> */}
      <Nav />
      <Route exact path="/" component={Login} />
      {/* <Route path="/login2" component={Login} /> */}
      <Route path="/login" component={Login2} />
      {/* <Route path="/login3" component={Login3} /> */}
      <Route path="/signup" component={Signup} />
      {/* Private Routes go here */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={NewIssue} />
      <Route path="/edit" component={EditIssue} />

    </div>
  );
}

export default App;
