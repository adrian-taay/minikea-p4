"use client";

import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import clsx from "clsx";
// import useChangeSwiperDirection from "@/utils/useChangeSwiperDirection";

export default function ProductImages({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  // const { isWidthSufficient } = useChangeSwiperDirection();

  const DisplayedImage = (
    <Swiper
      slideToClickedSlide
      slidesPerView={1}
      spaceBetween={10}
      className="w-full"
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Thumbs]}
      // onSlideChange={(swiper) => setActiveImage(swiper.realIndex)}
      onSwiper={(swiper) => setThumbsSwiper(swiper)}
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

  const ThumbnailNav = (
    <Swiper
      onSwiper={(swiper) => setThumbsSwiper(swiper)}
      className="flex items-center w-full"
      breakpoints={{
        320: {
          slidesPerView: 4,
        },
      }}
      // direction={isWidthSufficient ? "vertical" : "horizontal"}
      freeMode={true}
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className={clsx(
            "bg-stone-200",
            "mr-2",
            "my-2",
            activeImage === index && "ring-1 ring-neutral-800"
          )}
          onClick={() => {
            setActiveImage(index);
            thumbsSwiper?.slideTo(activeImage);
          }}
        >
          <Image src={image} width={100} height={100} alt="Product image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const ThumbNav = (
    <div
      className="flex md:flex-col items-center w-full"
      // direction={isWidthSufficient ? "vertical" : "horizontal"}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={clsx(
            "bg-stone-200",
            "mr-2",
            "my-2"
            // activeImage === index && "ring-1 ring-neutral-800"
          )}
          onClick={() => thumbsSwiper?.slideTo(index)}
        >
          <Image src={image} width={100} height={100} alt="Product image" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col md:flex-row-reverse">
      {DisplayedImage}
      {/* {ThumbnailNav} */}
      {ThumbNav}
    </div>
  );
}
