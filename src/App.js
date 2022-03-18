import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import MoviePage from "./components/MoviePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MoviePage />} />
    </Routes>
  );
};

export default App;
