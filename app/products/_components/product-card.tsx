import Image from "next/image";
import React from "react";
import Link from "next/link";
import { createSlug } from "@/utils/createSlug";
import { DummyProductType } from "@/types/dummy-products-type";
import QuickAddButton from "./quick-add-button";
import ToggleWishlistButton from "@/app/user/wishlist/toggle-wishlist-button";

export default function ProductCard({
  cardData,
}: {
  cardData: DummyProductType;
}) {
  const slug = createSlug(cardData);

  const ProductTitle = (
    <div className="flex flex-col items-start my-3">
      <span className="uppercase font-light">{cardData.brand}</span>
      <span className="text-xl">{cardData.title}</span>
      <span className="font-light text-xl mt-2">
        $ {cardData.price.toFixed(2)}
      </span>
    </div>
  );

  const CartWishlistWrapper = (
    <div className="absolute right-4 top-4 flex-center flex-col gap-3">
      <QuickAddButton item={cardData} qty={1} />
      <ToggleWishlistButton cardData={cardData} />
    </div>
  );

  return (
    <div className="relative w-full flex flex-col items-start">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={cardData.images[0]}
          alt={cardData.title}
          fill
          sizes="350px"
          className="rounded-sm object-cover bg-center hover:scale-125 transition-transform ease-in-out bg-stone-200"
          loading="lazy"
        />
      </div>
      <Link
        href={`/products/${cardData.category}/${slug}`}
        className="font-bold"
      >
        {ProductTitle}
      </Link>
      {CartWishlistWrapper}
    </div>
  );
}
