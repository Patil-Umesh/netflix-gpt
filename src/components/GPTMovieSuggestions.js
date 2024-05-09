import React from "react";
import MovieList from "./MovieList";

const GPTMovieSuggestions = ({ movies }) => {
  return (
    <div className="my-5 w-1/2 mx-auto relative z-10 bg-purple-500 text-white text-2xl rounded-md">
      <div className="pb-2">
        <MovieList title={"Search Results"} movies={movies} />
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
