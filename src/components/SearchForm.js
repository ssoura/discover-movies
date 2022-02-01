import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          placeholder="enter movie name"
          className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="error-text">{error.show ? error.msg : ''}</p>
      </form>
    </section>
  );
};

export default SearchForm;
