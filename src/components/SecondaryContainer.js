import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRated = useSelector((store) => store.movies?.topRatedMovies);
  const upcoming = useSelector((store) => store.movies?.upcomingMovies);
  return (
    movies && (
      <div className=" bg-black">
        <div className="relative z-20">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRated} />
          <MovieList title={"Upcoming"} movies={upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
