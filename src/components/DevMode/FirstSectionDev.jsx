import React from "react";
import Box from "../Box";

const FirstSectionDev = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen px-4 background-gradient-dev2 md:background-gradient-dev  overflow-x-hidden`}
    >
      <div className="absolute flex flex-col items-center justify-center right-4 top-4">
        <span className="text-xs font-bold text-white select-none text-opacity-70 md:text-base font-titillium">
          {"<DevMode />"}
        </span>
      </div>
      <span className="text-3xl font-black text-white md:text-4xl lg:text-6xl font-titillium ">
        DEVELOPING
      </span>
      <Box />
    </div>
  );
};

export default FirstSectionDev;
