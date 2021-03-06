import React, { useState, useContext, useEffect } from "react";
const API_KEY = "268d9531";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Iron-man");
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovies = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT}&s=${query}`);
    const data = await response.json();

    if (data.Response === "True") {
      setLoading(false);
      setError({ show: false, msg: "" });
      setMovies(data.Search);
    } else {
      setLoading(false);
      setError({ show: true, msg: data.Error });
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [query]);

  return (
    <AppContext.Provider value={{ loading, movies, query, setQuery, error }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, API_ENDPOINT, useGlobalContext };
