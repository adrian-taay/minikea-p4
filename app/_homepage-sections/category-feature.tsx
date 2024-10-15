import React from "react";
import Image from "next/image";
import { feature_christmas } from "../_shared/constants/images";
import { DisplayProductsType } from "./display-products";
import DisplayProducts from "./display-products";

export default function CategoryFeatureSection() {
  const christmasPicks: DisplayProductsType = {
    headline: "Christmas Picks",
    products: [47, 66, 178, 156, 44, 126],
  };

  const WriteupsWrapper = (
    <div className="space-y-4">
      <h2 className="uppercase">Santa Deals</h2>
      <h1 className="text-2xl font-semibold tracking-wide">
        Fill your home with joy this Christmas!
      </h1>
      <p className="w-full xl:w-3/4 max-lg:text-justify text-pretty">
        Celebrate the longest Christmas season in the world, Filipino style!
        From bright parols lighting up the streets to festive Noche Buena
        feasts, it&apos;s the time to share joy, gifts, and love. Whether
        you&apos;re decorating your home or shopping for thoughtful presents,
        our Santa Deals have everything you need to make this season
        unforgettable. Enjoy special discounts and exclusive offers as you
        prepare for a season filled with warmth, laughter, and the true spirit
        of Christmas.
      </p>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-8 my-30 h-full flex flex-col gap-10 mt-10">
      <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-10">
        <div className="relative w-full lg:w-3/4 h-[25vh] md:h-[50vh]">
          <Image
            src={feature_christmas}
            alt="Christmas"
            fill
            className="object-cover bg-center absolute"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-8 w-full lg:w-1/2">
          {WriteupsWrapper}
        </div>
      </div>
      <DisplayProducts displayProductObject={christmasPicks} />
    </div>
  );
}
