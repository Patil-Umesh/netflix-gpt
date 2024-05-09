import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const MainMovie = movies[0];

  const { original_title, overview, id } = MainMovie;
  return (
    <div>
      <VideoTitle title={original_title} description={overview} />
      <VideoBG movieId={id} />
    </div>
  );
};

export default MainContainer;
