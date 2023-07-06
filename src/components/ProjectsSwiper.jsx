import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import IphoneIpad from "./IphoneIpad";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsSwiper = () => {
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

  const [breakpoints, setBreakpoints] = useState({
    320: {
      navigation: {
        enabled: false,
      },
    },
    768: {
      navigation: {
        enabled: true,
      },
    },
  });

  return (
    <Swiper
      breakpoints={breakpoints}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#9D60CC",
      }}
      navigation
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
