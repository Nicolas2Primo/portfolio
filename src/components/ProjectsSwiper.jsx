import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import IphoneIpad from "./IphoneIpad";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsSwiper = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth > 768);
  const [projects, setProjects] = useState([
    {
      iphone: "./argosIphone.svg",
      ipad: "./argosIpad.svg",
    },
    {
      iphone: "./menmolistIphone.svg",
      ipad: "./argosIpad.svg",
    },
    {
      iphone: "./netflixIphone.svg",
      ipad: "./argosIpad.svg",
    },
    {
      iphone: "./argosIphone.svg",
      ipad: "./argosIpad.svg",
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpeza na saída
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#9D60CC",
      }}
      navigation={windowSize}
      pagination={true}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      className="w-full h-[380px] md:h-[470px] cursor-grab"
    >
      {projects.map((project) => (
        <SwiperSlide className="">
          <IphoneIpad iphone={project.iphone} ipad={project.ipad} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSwiper;
