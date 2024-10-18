"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  splash_apparel,
  splash_cosmetics,
  splash_grocery,
  splash_home,
  splash_street,
  splash_tech,
} from "../_shared/constants/images";
import { StaticImageData } from "next/image";
import Image from "next/image";
import clsx from "clsx";
import ActionButton from "./_action-button";

type SplashImageCardType = {
  subtext: string;
  headline: string;
  content: string;
  img: StaticImageData | string;
  textColor: "white" | "black";
  xposition: "left" | "right";
  yposition: "top" | "center" | "bottom";
  actionButton?: boolean;
};

const splashImages: SplashImageCardType[] = [
  {
    subtext: "Exclusive Offer",
    headline: "Transform Your Home",
    content:
      "Elevate your living space with stylish furniture and décor. Enjoy up to 50% off on select interior design essentials.",
    img: splash_home,
    textColor: "white",
    xposition: "right",
    yposition: "center",
    actionButton: true,
  },
  {
    subtext: "Tech Sale",
    headline: "Next Gen Devices",
    content:
      "Upgrade your life with cutting-edge technology at unbeatable prices.",
    img: splash_tech,
    textColor: "white",
    xposition: "right",
    yposition: "bottom",
    actionButton: true,
  },
  {
    subtext: "Fresh Groceries",
    headline: "Eat Fresh, Stay Healthy",
    content:
      "Enjoy our fresh grocery selection, delivered straight to your door.",
    img: splash_grocery,
    textColor: "white",
    xposition: "right",
    yposition: "top",
  },
  {
    subtext: "Beauty Essentials",
    headline: "Glow Like Never Before",
    content: "Unlock radiant skin with our premium beauty products.",
    img: splash_cosmetics,
    textColor: "white",
    xposition: "left",
    yposition: "top",
    actionButton: true,
  },
  {
    subtext: "New Collection",
    headline: "Step Up Your Wardrobe",
    content: "Find your perfect outfit from our latest apparel collection.",
    img: splash_apparel,
    textColor: "white",
    xposition: "right",
    yposition: "center",
    actionButton: true,
  },
  {
    subtext: "Streetwear Special",
    headline: "Own the Streets",
    content: "Get exclusive streetwear styles at limited-time prices.",
    img: splash_street,
    textColor: "white",
    xposition: "left",
    yposition: "top",
    actionButton: true,
  },
];

export default function HeroSection() {
  return (
    <div className="w-full">
      <Swiper
        direction="horizontal"
        spaceBetween={0}
        style={{
          width: "100%",
          maxWidth: "100%",
        }}
        className="w-full"
        slidesPerView={1}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 6500,
        }}
        loop
        effect="fade"
      >
        {splashImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex flex-col h-full relative">
              <div className="w-full h-[50vh] lg:h-[75vh] relative flex justify-center items-center">
                <Image
                  src={item.img}
                  alt="Minikea"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover bg-center absolute"
                />
              </div>
              <div
                className={clsx(
                  "absolute",
                  "w-full",
                  "h-full",
                  "flex",
                  "flex-col",
                  "p-8",
                  "md:p-20",
                  "gap-8",
                  "bg-neutral-700/60",
                  item.textColor === "white"
                    ? "text-white"
                    : "text-neutral-800",
                  item.xposition === "left"
                    ? "items-start text-left"
                    : "items-end text-right",
                  item.yposition === "top"
                    ? "justify-start"
                    : item.yposition === "center"
                    ? "justify-center"
                    : "justify-end"
                )}
              >
                <p className="uppercase text-sm">{item.subtext}</p>
                <p className="w-full md:w-1/2 text-5xl text-pretty">
                  {item.headline}
                </p>
                <p className="w-full md:w-1/5 text-pretty tracking-tighter leading-snug">
                  {item.content}
                </p>
                {item.actionButton && (
                  <ActionButton
                    title="Learn more"
                    href="#"
                    style={{
                      bgColor: "#fff",
                      textColor: "#404040",
                      rounded: "none",
                    }}
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
