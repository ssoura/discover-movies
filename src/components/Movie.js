import React from "react";
const Movie = ({ Poster: poster, Title: title, Year: year }) => {
  return (
    <div className="">
      <img className="rounded-lg hover:scale-105" src={poster} alt={title} />
      <div className="">
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Movie;
