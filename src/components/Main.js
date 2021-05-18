import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home"
import About from "./About/About"
import Error from "./Error"

function Main() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </main>
	);
}

export default Main;