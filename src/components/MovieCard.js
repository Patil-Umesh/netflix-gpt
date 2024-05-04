import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 h-[18rem] mx-2">
      <img
        className="w-48 h-[18rem] rounded-lg"
        alt="Movie Cards"
        src={POSTER_CDN + poster}
      />
    </div>
  );
};

export default MovieCard;
