import Image from "next/image";
import React from "react";
import { brandLogos } from "../_shared/constants/brand-logos";

export default function InStoreBrandsSection() {
  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-24 space-y-6 md:space-y-12">
      <h1 className="text-center text-3xl">In-Store Brands</h1>
      <div className="w-full flex gap-1 sm:gap-8 flex-wrap justify-center items-center">
        {brandLogos.map((item) => (
          <div
            className="max-sm:h-[50px] h-[100px] aspect-square relative"
            key={item.brand}
          >
            <Image
              src={item.img}
              alt={item.brand}
              fill
              className="object-contain bg-center saturate-0 opacity-40"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
