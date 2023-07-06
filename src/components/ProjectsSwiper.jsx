import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import IphoneIpad from "./IphoneIpad";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsSwiper = () => {
  const [projects, setProjects] = useState([
    {
      iphone: "./argosIphone.svg",
      ipad: "./argosIpad.svg",
    },
    {
      iphone: "./argosIphone.svg",
      ipad: "./argosIpad.svg",
    },
    {
      iphone: "./argosIphone.svg",
      ipad: "./argosIpad.svg",
    },
    {
      iphone: "./argosIphone.svg",
      ipad: "./argosIpad.svg",
    },
  ]);
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      slidesPerView={1}
      className="w-full h-[470px]"
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
