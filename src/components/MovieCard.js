import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ poster, movie }) => {
  const getMovieTrailer = () => {
    console.log(movie);
  };

  return (
    poster && (
      <div className="w-48 pr-4">
        <img
          onClick={getMovieTrailer}
          className="rounded-lg cursor-pointer h-[280px]"
          alt="Movie Cards"
          src={POSTER_CDN + poster}
        />
      </div>
    )
  );
};

export default MovieCard;
