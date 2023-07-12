import React from "react";

const IphoneIpad = ({ iphone, ipad, link }) => {
  return (
    <div className="flex items-center justify-center w-full h-full md:h-fit">
      <a href={link} className="flex gap-2 cursor-pointer">
        <div className="flex items-end h-[278px] sm:h-[347px] md:h-[415px]">
          <img
            src={iphone}
            alt=""
            className="w-[68px] sm:w-[100px] md:w-[150px]"
          />
        </div>
        <img
          src={ipad}
          alt=""
          className="w-[200px] sm:w-[250px]  md:w-[300px]"
        />
      </a>
    </div>
  );
};

export default IphoneIpad;
