import React from "react";
import { MORE_INFO, PLAY_BTN } from "../utils/constants";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute bg-gradient-to-r from-black">
      <div className="w-[400px] h-[750px] pt-[150px] pl-12">
        <div className="font-bold text-white text-5xl">{title} </div>
        <div className="mt-4 text-white text-lg">{description} </div>
        <div className="flex my-5">
          <div className="flex mr-1 px-8 rounded-md py-2 bg-white text-black hover:text-white hover:bg-black hover:border border-white">
            <img alt="Play" className="w-8 h-8" src={PLAY_BTN} />
            <button className="px-2 font-bold">Play</button>
          </div>
          <div className="flex px-8 rounded-md py-2 bg-black text-white border border-white hover:text-black hover:bg-white">
            <img alt="More-Info" className="w-8 h-8" src={MORE_INFO} />
            <button className="px-2 font-bold">More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
