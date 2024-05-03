import React from "react";
import Header from "./Header";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
// import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetMovies();
  return (
    <div>
      <Header />
      {/* Main Container
            - Video Background
            - Video Title
          Secondary Container
            - MovieList*n
            - Cards*n
      */}
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
