"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import img1 from "../../../../public/img/8f9ee8f41cc2d72369a71134d471b443.jpg";
import img2 from "../../../../public/img/a254ab3176f62d952a39db1c7a2a6a2b.jpg";
import img3 from "../../../../public/img/56279cf36064fa5f80f43268aff774c8.jpg";
import img4 from "../../../../public/img/ba18c6554999efb66aa1386b7179a207.jpg";

type Props = {
  imglist: string[];
};

export default function MySlider({ imglist = [] }: Props) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 1500 }}
    >
      {imglist.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img}
            alt="category"
            width={1200}
            height={300}
            className="h-[300px] w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
