import React from 'react';
import { Route, Switch, Link } from "react-router-dom"
import './App.css';
import Nav from './components/authentication/Nav';

// Components
import Login from "./components/authentication/Login"
import Signup from "./components/authentication/Signup"
import PrivateRoute from "./utils/PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard"

function App() {
  return (
    <div className="App">
      <h1> Test Render </h1>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {/* Private Routes go here */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
