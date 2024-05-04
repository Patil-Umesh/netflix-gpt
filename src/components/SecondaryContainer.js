import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  return (
    movies && (
      <div className=" bg-black">
        <div className="-mt-[250px] relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRated} />
          <MovieList title={"Now Playing"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
