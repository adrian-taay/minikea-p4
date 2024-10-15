import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import {
  article_anna,
  article_cosmetics,
  article_home_christmas,
  article_tech,
  feature_clothing,
} from "../_shared/constants/images";
import ActionButton from "./_action-button";

type Article = {
  title: string;
  description: string;
  img: StaticImageData | string;
};

const articles: Article[] = [
  {
    title: "Home Essentials for the Holiday Season",
    description:
      "Get your home Christmas-ready with cozy décor and festive accents. Explore our selection of furniture, lighting, and more to create a joyful atmosphere.",
    img: article_home_christmas,
  },
  {
    title: "Style Insights with Anna Dela Cruz",
    description:
      "Fashion expert Anna Dela Cruz talks about the latest trends in summer fashion, from sustainable materials to timeless pieces. Discover her tips for staying stylish while keeping warm this season.",
    img: article_anna,
  },
  {
    title: "Beauty Gifts to Pamper Your Loved Ones",
    description:
      "Indulge your friends and family with luxurious beauty sets this Christmas. Discover skincare, makeup, and more with exclusive holiday bundles.",
    img: article_cosmetics,
  },
  {
    title: "Top Tech Gadgets to Upgrade Your Home",
    description:
      "Explore the latest in home tech, from smart gadgets to entertainment systems. Find the perfect gift for tech lovers and bring innovation into your space.",
    img: article_tech,
  },
];

export default function ArticlesToRead() {
  const ArticlesCard = (
    <>
      {articles.map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            <div className="space-y-4">
              <div className="w-full relative aspect-square bg-stone-200">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover bg-center absolute"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-xl">{item.title}</span>
                <span className="text-justify">{item.description}</span>
                <Link href="#" className="underline">
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );

  const FullWidthWrapper = (
    <div className="w-full relative bg-slate-200 flex justify-center items-center text-white">
      <div className="w-full relative h-[50vh]">
        <Image
          src={feature_clothing}
          alt="article"
          fill
          className="absolute object-cover bg-center"
        />
      </div>
      <div className="absolute w-full h-full p-10 text-neutral-700 bg-white/50 space-y-4">
        <p className="uppercase text-sm">Feature</p>
        <p className="w-full md:w-1/2 text-5xl text-pretty">Back to Basics</p>
        <p className="w-full md:w-2/5 text-pretty tracking-tighter leading-snug">
          Discover the simplicity of a capsule wardrobe, a curated collection of
          timeless, versatile pieces that work for any occasion. By focusing on
          quality over quantity, you can create countless outfits while reducing
          decision fatigue and embracing sustainable fashion.
        </p>
        <ActionButton
          title="Learn more"
          href="#"
          style={{
            bgColor: "#fff",
            textColor: "#404040",
            rounded: "none",
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="w-full pt-10 space-y-10">
      {FullWidthWrapper}
      <h1 className="text-3xl text-center">Worth Reading</h1>
      <div className="w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-8">
        {ArticlesCard}
      </div>
    </section>
  );
}
