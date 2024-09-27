import { DummyProductType } from "@/types";
import Image from "next/image";
import React from "react";
import AddItemBtn from "../add-item-buttons/AddItemBtn";
import Link from "next/link";
import ToggleWishlistButton from "../buttons/toggle-wishlist-button";
import { createSlug } from "@/utils/createSlug";

export default function ProductCard({
  cardData,
}: {
  cardData: DummyProductType;
}) {
  const productTitle = (
    <div className="flex flex-col items-center">
      <span>{cardData.category}</span>
      <span className="w-3/5 text-center">{cardData.title}</span>
      <span>$ {cardData.price.toFixed(2)}</span>
    </div>
  );

  const slug = createSlug(cardData);

  return (
    <div className="flex flex-col items-center bg-slate-300">
      <div className="min-w-[250px] min-h-[250px] overflow-hidden">
        <Image
          src={cardData.images[0]}
          alt={cardData.title}
          width={250}
          height={250}
          className="bg-cover bg-center hover:scale-125 transition-transform ease-in-out"
          loading="lazy"
        />
      </div>
      <Link href={slug} className="font-bold">
        {productTitle}
      </Link>
      <AddItemBtn item={cardData} qty={1} />
      <ToggleWishlistButton cardData={cardData} />
    </div>
  );
}
