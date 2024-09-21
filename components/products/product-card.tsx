import { DummyProductType } from "@/types";
import Image from "next/image";
import React from "react";
import { useShoppingCart } from "@/lib/useShoppingCart";

export default function ProductCard({
  cardData,
}: {
  cardData: DummyProductType;
}) {
  const addItem = useShoppingCart((state) => state.addItem);
  const productTitle = (
    <div className="flex flex-col items-center">
      <span>{cardData.category}</span>
      <span className="w-3/5 text-center">{cardData.title}</span>
      <span>$ {cardData.price.toFixed(2)}</span>
    </div>
  );

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
      {productTitle}
      <button className="p-4" onClick={() => addItem(cardData)}>
        Add To Cart
      </button>
    </div>
  );
}
