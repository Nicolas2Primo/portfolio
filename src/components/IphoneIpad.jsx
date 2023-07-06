import React from "react";

const IphoneIpad = ({ iphone, ipad }) => {
  return (
    <div className="flex items-center justify-center w-full h-full md:h-fit">
      <div className="flex gap-2 cursor-pointer">
        <div className="flex items-end h-[278px] md:h-[415px]">
          <img src={iphone} alt="" className="w-[150px] md:w-[150px]" />
        </div>
        <img src={ipad} alt="" className="w-[200px] md:w-[300px]" />
      </div>
    </div>
  );
};

export default IphoneIpad;
