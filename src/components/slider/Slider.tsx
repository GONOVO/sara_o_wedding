
"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider({ elements }: { elements: string[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerGroup={3}
        spaceBetween={30}
        speed={3000}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

          1124: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper max-w-[1250px] mx-auto h-[600px] -mt-[60px]"
      >
        {elements.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center"
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className={`relative bg-white z-[3] shadow-md transition-all duration-[2000ms] ease-in-out
              ${
                index % 2 !== 0 ? "w-[400px] h-[550px]" : "w-[350px] h-[490px]"
              } p-4 sm:p-[10px] max-sm:p-[10px] flex justify-center items-center`}
            >
              <Image
                src={item}
                alt="portfolio image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1124px) 50vw, 33vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
