import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About"
import YouTube from "./components/Youtube"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path={"/"}>
        <Home />
      </Route>
      <Route path={"/about"}>
        <About />
      </Route>
      <Route exact path={"/video"}>
        <YouTube />
      </Route>
    </Switch>
    </div>
  );
}

export default App;