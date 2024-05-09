import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovies } from "../utils/moviesSlice";

const useGetMoviesBySearch = () => {
  const dispatch = useDispatch();
  const newTxt = useSelector((store) => store.gpt?.searchTxt);

  const getMoviesBySearchText = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/collection?query=" +
        newTxt +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const movies = await data.json();
    dispatch(addSearchMovies(movies.results));
  };

  useEffect(() => {
    getMoviesBySearchText();
  }, [newTxt]);
};

export default useGetMoviesBySearch;
