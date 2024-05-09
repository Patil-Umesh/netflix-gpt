import React from "react";
import Header from "./Header";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRatedMovies from "../hooks/useGetTopRatedMovies";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const searchView = useSelector((store) => store.gpt.toggleSearch);
  useGetMovies();
  useGetPopularMovies();
  useGetTopRatedMovies();
  useGetUpcomingMovies();
  return (
    <div>
      <Header />
      {searchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
