import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../context";

const MoviePage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT}&i=${id}`);
    const data = await response.json();

    console.log(data);
    if (data.Response === "True") {
      setMovie(data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className=" px-24 py-24  grid grid-cols-2 justify-around gap-3">
      <div className=" justify-self-end">
        <img className="rounded-l-lg" src={movie.Poster} alt={movie.Title} />
      </div>
      <div className=" flex flex-col justify-self-start gap-3">
        <article class="prose prose-slate">
          <h1 className="text-4x1 text-blue-700 font-extrabold tracking-tight">{movie.Title}</h1>
          <p className="text-gray-999">{movie.Actors}</p>

          <p className="text-4x1 text-gray-900 font-bold tracking-tighter">{movie.plot}</p>
          <p>
            Year: <strong>{movie.Year}</strong>
          </p>
          <div className="bg-blue-700 text-white px-5 py-3 rounded-lg text-center text-sm">
            <Link to="/" className="rounded-lg w-24">
              Back to home
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MoviePage;
