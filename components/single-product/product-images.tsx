"use client";

import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import clsx from "clsx";

export default function ProductImages({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const DisplayedImage = (
    <Swiper
      slideToClickedSlide
      slidesPerView={1}
      spaceBetween={10}
      className="w-full"
      onSwiper={setSwiper}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image}
            width={500}
            height={500}
            alt="Product image"
            className="bg-stone-200 bg-cover bg-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const ThumbNav = (
    <div className="w-full m-1 flex gap-1 md:flex-col items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "bg-stone-200",
            activeImage === index && "ring-1 ring-black"
          )}
          onClick={() => {
            setActiveImage(index);
            swiper?.slideTo(index);
          }}
        >
          <Image src={image} width={100} height={100} alt="Product image" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col md:flex-row-reverse">
      {DisplayedImage}
      {ThumbNav}
    </div>
  );
}
