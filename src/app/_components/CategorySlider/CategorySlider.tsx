"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import { Autoplay } from "swiper/modules";
import Image from "next/image";
import GetAllGategories from "@/Actions/GetAllGategories";
import { useEffect, useState } from "react";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function CategorySlider() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      let res = await GetAllGategories();
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-6">
      <Swiper
        spaceBetween={15}
        slidesPerView={7}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((cat: any) => (
          <SwiperSlide key={cat._id}>
            <Image
              src={cat.image}
              alt={cat.name}
              width={200}
              height={200}
              className="h-[120px] w-full object-cover"
            />
            <p className="text-center text-sm mt-2">{cat.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
