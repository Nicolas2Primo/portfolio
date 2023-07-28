import React, { useState, useContext } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { PiHandWavingFill } from "react-icons/pi";
import DevModeContext from "../../contexts/DevModeContext";
import Typing from "./Typing";
import "../../styles/FirstSection.css";

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
  const { devMode, setDevMode } = useContext(DevModeContext);
  const [animationRun, setAnimationRun] = useState(false);

  const handleDevMode = () => {
    if (devMode < 9) {
      setDevMode(devMode + 1);
      setAnimationRun(!animationRun);
      setTimeout(() => {
        setAnimationRun(false);
      }, 200);
    }
  };
  return (
    <div
      className={`flex flex-col 
      ${animationRun ? "shake-animation" : ""}
      items-center justify-center w-full h-screen px-4 background-gradient overflow-x-hidden`}
    >
      <span className=" absolute right-4 top-4 select-none font-bold text-[#917CAA] text-xs md:text-base font-titillium">
        {"<NormalMode />"}
      </span>
      <span
        className={`${
          animationRun ? " number-animation" : ""
        } absolute top-32 md:top-24 select-none font-bold text-[#917CAA] text-2xl md:text-6xl font-titillium`}
      >
        {devMode == 0 ? " " : devMode}
      </span>

      <div className="z-10 flex flex-col items-center md:items-start w-fit h-fit">
        <div className="flex items-center gap-1">
          <Typing text={["Oi, meu nome é Nicolas"]} />
          <PiHandWavingFill
            color="#DEAD00"
            className="z-10 cursor-pointer hand-shake"
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-white select-none sm:text-7xl text-opacity-90 font-titillium md:text-8xl lg:text-9xl">
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
                  className="hover:translate-y-[-5px] hover:duration-300 hover:transition-transform hover:scale-125 "
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
        <span className="flex text-4xl font-black text-white select-none text-opacity-90 font-titillium sm:text-7xl md:text-8xl lg:text-9xl">
          <div className="cursor-pointer shake-dev">
            <span onClick={handleDevMode} className=" dev-gradient">
              {"<DEV>"}
            </span>
          </div>
          ELOPER
        </span>
        <div className="flex items-center justify-center w-full mt-2 text-center md:mt-3 md:justify-end md:text-start md:pr-12 h-fit">
          <span className=" text-[10px] select-none  md:w-[410px] md:text-[12px] text-white font-titillium md:indent-12 leading-4 md:leading-5">
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
