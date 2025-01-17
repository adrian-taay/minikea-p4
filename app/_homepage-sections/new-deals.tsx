import React from "react";
import {
  feature_apparel,
  feature_beauty,
  feature_gift,
  feature_home,
  feature_tech,
  feature_watches,
} from "../_shared/constants/images";
import Image, { StaticImageData } from "next/image";
import DisplayProducts, {
  DisplayProductsType,
} from "../_shared/display-products/display-products";
import Link from "next/link";

type ImageCardType = {
  category: string;
  headline: string;
  href: string;
  img: StaticImageData | string;
};

const newDeals: ImageCardType[] = [
  {
    category: "Furniture",
    headline: "Refresh Your Space: Up to 40% Off Furniture",
    href: "furniture",
    img: feature_home,
  },
  {
    category: "Mens Shoes",
    headline: "Buy 1 Get 1 Free on Select Fashion Items",
    href: "mens-shoes",
    img: feature_apparel,
  },
  {
    category: "Beauty",
    headline: "Exclusive: Free Skincare Set with Orders Over $50",
    href: "beauty",
    img: feature_beauty,
  },
  {
    category: "Smartphones",
    headline: "Upgrade Your Gadgets: 30% Off Latest Tech",
    href: "smartphones",
    img: feature_tech,
  },
  {
    category: "Mens Watches",
    headline: "Timeless Elegance: 25% Off Premium Watches",
    href: "mens-watches",
    img: feature_watches,
  },
  {
    category: "Gift",
    headline: "Free Gift Wrapping on All Orders",
    href: "",
    img: feature_gift,
  },
];

const topPicks: DisplayProductsType = {
  headline: "Minikea Top Picks",
  products: [160, 94, 92, 73, 2, 157],
};

export default function NewDealsSection() {
  const NewDealsWrapper = (
    <>
      {newDeals.map((item, index) => (
        <Link
          href={`/products/${item.href}`}
          className="flex flex-col h-full relative"
          key={index}
        >
          <div className="bg-stone-300 aspect-square relative flex flex-col">
            <Image
              src={item.img}
              alt={item.headline}
              fill
              sizes="350px, (min-width: 1440px) 480px"
              className="absolute object-cover bg-center"
            />
          </div>
          <div className="absolute w-full h-full flex flex-col justify-center items-center gap-4 text-white bg-neutral-700/40">
            <span className="uppercase max-xs:text-sm text-base">
              {item.category}
            </span>
            <span className="w-10/12 font-semibold max-xs:text-xl text-3xl text-center">
              {item.headline}
            </span>
          </div>
        </Link>
      ))}
    </>
  );

  return (
    <div className="w-full px-4 md:px-8 space-y-10 mt-10">
      <div className="text-center space-y-0 md:space-y-4">
        <h1 className="text-3xl sm:text-5xl">New Deals</h1>
        <p className="text-sm uppercase tracking-wider">
          Products of the season
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {NewDealsWrapper}
      </div>
      <DisplayProducts displayProductObject={topPicks} />
    </div>
  );
}
