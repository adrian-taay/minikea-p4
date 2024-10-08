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
      className="w-full md:w-[300px] lg:w-[400px] xl:w-[600px]"
      onSwiper={setSwiper}
      onSlideChange={(slide) => setActiveImage(slide.realIndex)}
    >
      <div className="w-full">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full aspect-square">
              <Image
                src={image}
                fill
                alt="Product image"
                className="bg-stone-200 bg-cover bg-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );

  const ThumbNav = (
    <div className="w-full flex gap-1 mt-2 md:mt-0 md:gap-2 lg:gap-3 items-center md:flex-col flex-shrink md:w-auto">
      {images.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "bg-stone-200",
            "w-[100px]",
            "relative",
            "aspect-square",
            activeImage === index && "ring-1 ring-black"
          )}
          onClick={() => {
            setActiveImage(index);
            swiper?.slideTo(index);
          }}
        >
          <Image src={image} fill alt="Product image" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full md:flex flex-row-reverse gap-2 lg:gap-3 flex-shrink">
      {DisplayedImage}
      {ThumbNav}
    </div>
  );
}
