import React from "react";
import Header from "./common/header/Header";
import Home from "./screens/home/Home";
import MovieDetails from "./screens/movieDetails/MovieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Controller() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie-details" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default Controller;
