import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import React from "react";
import { Pagination } from "swiper/modules";
import water1 from "/water1.jpg";
import water2 from "/water2.jpg";
import water3 from "/water3.jpg";
import water4 from "/water4.jpg";
import water5 from "/water5.jpg";
import water7 from "/water7.png";
function SwiperCarousel() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper max-h-[70vh] "
    >
      <SwiperSlide>
        <img
          src={water3}
          alt=""
          className="object-cover  max-h-[70vh] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={water2}
          alt=""
          className="object-cover  max-h-[70vh] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={water3}
          alt=""
          className="object-cover  max-h-[70vh] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={water4}
          alt=""
          className="object-cover  max-h-[70vh] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={water5}
          alt=""
          className="object-cover  max-h-[70vh] w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          src={water7}
          alt=""
          className="object-cover  max-h-[70vh] w-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperCarousel;
