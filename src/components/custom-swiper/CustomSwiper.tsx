import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CustomSwiper.scss";

// import required modules
import { Pagination } from "swiper";

const CustomSwiper: React.FC<{}> = () => {
  return (
    <div className="swiper-wrapper">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>多肉植物 1</SwiperSlide>
        <SwiperSlide>多肉植物 2</SwiperSlide>
        <SwiperSlide>多肉植物 3</SwiperSlide>
        <SwiperSlide>多肉植物 4</SwiperSlide>
        <SwiperSlide>多肉植物 5</SwiperSlide>
        <SwiperSlide>多肉植物 6</SwiperSlide>
        <SwiperSlide>多肉植物 7</SwiperSlide>
        <SwiperSlide>多肉植物 8</SwiperSlide>
        <SwiperSlide>多肉植物 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomSwiper;
