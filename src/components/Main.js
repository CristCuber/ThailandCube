import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
import Error from "./Error"

function Main() {
  return (
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/about"><About/></Route>
        <Route ><Error/></Route>
      </Switch>
	);
}

export default Main;