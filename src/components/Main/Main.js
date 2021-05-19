import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home"
import About from "../About/About"
import Error from "../Error/Error"
import Activity  from "../Activity/Activity"
import Learning  from "../Learning/Learning"
import Statistic  from "../Statistic/Statistic"

function Main() {
  return (
      <Switch>
        <Route exact path="/">
        	<Home/>
        </Route>
        <Route path="/about">
        	<About/>
        </Route>
        <Route path="/activity">
        	<Activity/>
        </Route>
        <Route path="/learning">
            <Learning/>
        </Route>
        <Route path="/statistic">
            <Statistic/>
        </Route>
        <Route >
        	<Error/>
        </Route>
      </Switch>
	);
}

export default Main;