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
    <div className="flex items-center justify-center w-full h-screen px-4 background-gradient">
      <div className="flex flex-col items-center md:items-start w-fit h-fit">
        <span className="flex items-center gap-1 font-black text-[#917CAA] text-[10px] md:text-lg font-titillium">
          Oi <PiHandWavingFill color="#DEAD00" /> eu sou o Nicolas
        </span>

        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-white sm:text-7xl text-opacity-90 font-titillium md:text-8xl lg:text-9xl">
            REACT
          </span>
          <div className="hidden gap-4 mt-4 md:flex">
            <abbr title="Linkedin">
              <a
                href="https://www.linkedin.com/in/nicolasprimodev"
                target="_blank"
              >
                <AiFillLinkedin
                  size={38}
                  color="#FEE6C2"
                  className="hover:translate-y-[-5px]  hover:duration-300 hover:transition-transform hover:scale-125 "
                />
              </a>
            </abbr>

            <abbr title="Github">
              <a href="https://github.com/Nicolas2Primo" target="_blank">
                <AiFillGithub
                  size={38}
                  color="#FEE6C2"
                  className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
                />
              </a>
            </abbr>

            <abbr title="Currículo">
              <a
                href="https://drive.google.com/file/d/1LeTHeDGzFVCo6ZlzdxvXS8RJrylwSoaf/view?usp=sharing"
                target="_blank"
              >
                <IoDocumentText
                  size={38}
                  color="#FEE6C2"
                  className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
                />
              </a>
            </abbr>
          </div>
        </div>
        <span className="text-4xl font-black text-white text-opacity-90 font-titillium sm:text-7xl md:text-8xl lg:text-9xl">
          DEVELOPER
        </span>
        <div className="flex items-center justify-center w-full mt-2 text-center md:mt-3 md:justify-end md:text-start md:pr-12 h-fit">
          <span className=" text-[10px]  md:w-[410px] md:text-[12px] text-white font-titillium md:indent-12 leading-4 md:leading-5">
            TENHO 21 ANOS SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIÊNCIA
            TRABALHANDO COMO FREELANCER.
          </span>
        </div>
        <div className="flex gap-4 mt-4 sm:gap-6 md:hidden">
          <abbr title="Linkedin">
            <a href="https://www.linkedin.com/in/nicolasprimodev">
              <AiFillLinkedin
                size={28}
                color="#FEE6C2"
                className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
              />
            </a>
          </abbr>

          <abbr title="Github">
            <a href="https://github.com/Nicolas2Primo">
              <AiFillGithub
                size={28}
                color="#FEE6C2"
                className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
              />
            </a>
          </abbr>

          <abbr title="Currículo">
            <a href="https://drive.google.com/file/d/1LeTHeDGzFVCo6ZlzdxvXS8RJrylwSoaf/view?usp=sharing">
              <IoDocumentText
                size={28}
                color="#FEE6C2"
                className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
              />
            </a>
          </abbr>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
