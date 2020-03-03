import React, {useEffect, useState} from 'react';

import './App.css';
import {Route} from "react-router-dom";
import Login from "./components/authentication/Login";

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
