import React from 'react';
import { Route, Switch, Link } from "react-router-dom"
import './App.css';
import Nav from './components/authentication/Nav';

// Components
import Login from "./components/authentication/Login"
import Signup from "./components/authentication/Signup"
import PrivateRoute from "./utils/PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard"
import NewIssue from "./components/dashboard/NewIssue"
import EditIssue from "./components/dashboard/EditIssue"

function App() {
  return (
    <div className="App">
      {/* <h1> Test Render </h1> */}
      <Nav />
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* Private Routes go here */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/new" component={NewIssue} />
      <Route path="/edit" component={EditIssue} />

    </div>
  );
}

export default App;
