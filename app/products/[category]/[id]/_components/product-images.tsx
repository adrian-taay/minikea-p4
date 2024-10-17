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
      className="w-full md:w-[350px] lg:w-[400px] xl:w-[600px]"
      onSwiper={setSwiper}
      onSlideChange={(slide) => setActiveImage(slide.realIndex)}
    >
      <div className="w-full">
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full aspect-square bg-stone-200 ">
              <Image
                src={image}
                fill
                priority
                sizes="350px, (min-width: 1024px) 400px, (min-width: 1440px) 600px"
                alt="Product image"
                className="absolute object-cover bg-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );

  const ThumbNav = (
    <div className="w-full flex gap-1 mt-2 xl:mt-0 md:gap-2 xl:gap-3 items-center xl:flex-col flex-shrink md:w-auto">
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
          <Image src={image} fill sizes="100px" alt="Product image" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full xl:flex flex-row-reverse gap-2 lg:gap-3 flex-shrink">
      {DisplayedImage}
      {ThumbNav}
    </div>
  );
}
