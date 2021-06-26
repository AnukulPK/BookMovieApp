import React from "react";
import Header from "./common/header/Header";
import Home from "./screens/home/Home";
import Details from "./screens/details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Controller() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie-details/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default Controller;
