"use client";

import Image from "next/image";
import img1 from "../../../../public/img/8f9ee8f41cc2d72369a71134d471b443.jpg";
import img2 from "../../../../public/img/a254ab3176f62d952a39db1c7a2a6a2b.jpg";
import img3 from "../../../../public/img/56279cf36064fa5f80f43268aff774c8.jpg";
import img4 from "../../../../public/img/ba18c6554999efb66aa1386b7179a207.jpg";
import MySlider from "../My-Slider/MySlider";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MainSlider() {
  const sliderImages = [img1, img2, img3];

  return (
    <div className="container w-[90%] mx-auto">
      <div className="flex gap-2">
        <div className="w-3/4">
          <MySlider imglist={sliderImages} />
        </div>

        <div className="w-1/4 flex flex-col gap-2">
          <Image
            src={img3}
            className="h-[150px] w-full object-cover"
            alt="Slider Image 3"
          />
          <Image
            src={img4}
            className="h-[150px] w-full object-cover"
            alt="Slider Image 4"
          />
        </div>
      </div>
    </div>
  );
}
