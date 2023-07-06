import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { PiHandWavingFill } from "react-icons/pi";

const FirstSection = () => {
  const [icons, setIcons] = useState([
    {
      icon: <AiFillLinkedin />,
      link: "",
    },
    {
      icon: <AiFillGithub />,
      link: "",
    },
    {
      icon: <IoDocumentText />,
      link: "",
    },
  ]);
  return (
    <div className="flex items-center justify-center w-full h-screen px-6 background-gradient">
      <div className="flex flex-col items-center md:items-start w-fit h-fit">
        <span className="flex items-center gap-1 font-black text-[#917CAA] text-xs md:text-lg font-titillium">
          Oi <PiHandWavingFill color="#DEAD00" /> eu sou o Nicolas
        </span>

        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-white text-opacity-90 font-titillium md:text-9xl">
            REACT
          </span>
          <div className="hidden gap-4 mt-4 md:flex">
            <AiFillLinkedin
              size={38}
              color="#FEE6C2"
              className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
            />
            <AiFillGithub
              size={38}
              color="#FEE6C2"
              className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
            />
            <IoDocumentText
              size={38}
              color="#FEE6C2"
              className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
            />
          </div>
        </div>
        <span className="text-4xl font-black text-white text-opacity-90 font-titillium md:text-9xl">
          DEVELOPER
        </span>
        <div className="flex items-center justify-center w-full mt-2 text-center md:mt-3 md:justify-end md:text-start md:pr-12 h-fit">
          <span className=" text-[10px]  md:w-[410px] md:text-[12px] text-white font-titillium md:indent-12 leading-4 md:leading-5">
            TENHO 21 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIÊNCIA
            TRABALHANDO COMO FREELANCER.
          </span>
        </div>
        <div className="flex gap-4 mt-4 md:hidden">
          <AiFillLinkedin
            size={28}
            color="#FEE6C2"
            className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
          />
          <AiFillGithub
            size={28}
            color="#FEE6C2"
            className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
          />
          <IoDocumentText
            size={28}
            color="#FEE6C2"
            className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
