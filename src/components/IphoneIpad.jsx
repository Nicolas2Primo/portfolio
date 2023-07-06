import React from "react";

const IphoneIpad = ({ iphone, ipad }) => {
  return (
    <div className="flex items-center justify-center w-full gap-2 h-fit">
      <div className="flex items-end h-[415px]">
        <img src={iphone} alt="" className="w-[150px]" />
      </div>
      <img src={ipad} alt="" className="w-[300px]" />
    </div>
  );
};

export default IphoneIpad;
