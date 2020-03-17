import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Switch>
      <Navbar/>
      <Route exact path={"/"} component={Home}/>
      <Route path={"/about"} component={About}/>
    </Switch>
    </div>
  );
}

export default App;