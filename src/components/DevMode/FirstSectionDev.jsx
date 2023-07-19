import React from "react";

const FirstSectionDev = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-screen px-4 background-gradient overflow-x-hidden`}
    >
      <div className="absolute flex flex-col items-center justify-center right-4 top-4">
        <span className=" select-none font-bold text-[#917CAA] text-xs md:text-base font-titillium">
          {"<dev mode />"}
        </span>
      </div>
      <span className="text-6xl font-black text-white font-titillium ">
        CURIOSO
      </span>
    </div>
  );
};

export default FirstSectionDev;
