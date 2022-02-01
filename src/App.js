import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movie/:id">
        <MoviePage />
      </Route>
    </Switch>
  );
};

export default App;
