import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = ({ text = [] }) => {
  return (
    <TypeAnimation
      sequence={text}
      wrapper="span"
      cursor={true}
      repeat={1}
      className="font-black text-[#917CAA] text-[10px] md:text-lg font-titillium inline-block select-none "
    />
  );
};

export default Typing;
