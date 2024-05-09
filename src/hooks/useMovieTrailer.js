import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  //fetch movie Trailer:
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const getMovieVideos = async () => {
    const videos = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await videos.json();

    const trailers = data?.results.filter((data) => data.type === "Trailer");

    const firstTrailer = trailers.length ? trailers[0] : data.results[0];

    dispatch(addTrailerVideo(firstTrailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
