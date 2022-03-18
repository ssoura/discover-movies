import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Movie from "./Movie";

const Movies = () => {
  const { movies } = useGlobalContext();
  return (
    <section className="grid grid-rows-4 grid-flow-col gap-2 justify-center mt-4" >
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.imdbID}`}>
            <Movie key={movie.id} {...movie} />
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
