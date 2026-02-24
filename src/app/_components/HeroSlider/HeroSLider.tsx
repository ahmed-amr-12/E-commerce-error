"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import img1 from "../../../../public/img/8f9ee8f41cc2d72369a71134d471b443.jpg";
import img2 from "../../../../public/img/a254ab3176f62d952a39db1c7a2a6a2b.jpg";
import img3 from "../../../../public/img/56279cf36064fa5f80f43268aff774c8.jpg";
import img4 from "../../../../public/img/ba18c6554999efb66aa1386b7179a207.jpg";

export default function MySlider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={7}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 1500 }}
      >
        <SwiperSlide>
          <Image
            src={img2}
            className="h-[300] object-cover"
            alt="Slider Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img1}
            className="h-[300] object-cover"
            alt="Slider Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={img2}
            className="h-[300] object-cover"
            alt="Slider Image 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
