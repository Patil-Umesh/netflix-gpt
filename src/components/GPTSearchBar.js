import React, { useRef } from "react";
import languages from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../utils/gptSlice";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import useGetMoviesBySearch from "../hooks/useGetMoviesBySearch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GPTSearchBar = () => {
  const inputTxt = useRef(null);
  const dispatch = useDispatch();
  const lang = useSelector((store) => store.config.lang);
  const searchMovies = useSelector((store) => store.movies?.searchMovies);
  const msg = useSelector((store) => store.gpt?.movieNotFoundMsg);

  const getSearchText = () => {
    const input = inputTxt.current.value;
    dispatch(setSearchText(input));
    const notify = () =>
      toast(
        "Getting Movies... If not found try searching Comedy, Drama, Horror !"
      );
    notify();
  };
  useGetMoviesBySearch();
  return (
    <div className="pt-[10%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 mx-auto relative z-10  bg-black opacity-70 grid grid-cols-12 rounded-md"
      >
        <input
          ref={inputTxt}
          type="text"
          placeholder={languages[lang].searchPlaceholder}
          className="py-2 px-5 mx-2 my-4 rounded-md col-span-9 outline-purple-700"
        />
        <button
          onClick={getSearchText}
          className="bg-purple-700 rounded-md py-2 px-5 mx-2 my-4 text-white hover:opacity-85 col-span-3"
        >
          {languages[lang].search}
        </button>
        <ToastContainer position="bottom-right" />
      </form>
      {searchMovies?.length ? (
        <GPTMovieSuggestions movies={searchMovies} />
      ) : (
        msg
      )}
    </div>
  );
};

export default GPTSearchBar;
