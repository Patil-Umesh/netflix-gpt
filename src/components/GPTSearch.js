import React from "react";
import Netflixbg from "../images/netflixBG.jpg";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <img
        alt="Netflix-BG-Logo"
        src={Netflixbg}
        className="absolute brightness-50"
      />
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearch;
