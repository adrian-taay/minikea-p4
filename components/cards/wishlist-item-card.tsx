import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddItemBtn from "../buttons/add-cart-quantity/add-item-button";
import ToggleWishlistButton from "../buttons/toggle-wishlist-button";
import clsx from "clsx";
import { DummyProductType } from "@/types/dummy-products-type";
import { createSlug } from "@/utils/createSlug";

export default function WishlistItemCard({
  wishlistItem,
}: {
  wishlistItem: DummyProductType;
}) {
  const outOfStock = wishlistItem.stock === 0;
  const lowStock = wishlistItem.stock < 10;
  const slug = createSlug(wishlistItem);

  return (
    <div
      className={clsx(
        "flex",
        "gap-3",
        "justify-between",
        "items-stretch",
        "border",
        "rounded-md",
        "p-4",
        outOfStock && "text-neutral-400"
      )}
    >
      <div className="bg-stone-200">
        <Image
          src={wishlistItem.thumbnail}
          width={100}
          height={100}
          alt={wishlistItem.title}
        />
      </div>
      <div className="flex flex-col items-start flex-1">
        <div>
          <Link
            href={`/products/${wishlistItem.category}/${slug}`}
            className="font-semibold text-lg"
          >
            {wishlistItem.title}
          </Link>
          <div className="text-sm">
            {outOfStock
              ? "Out of Stock"
              : lowStock
              ? `${wishlistItem.stock} items left!`
              : "In Stock"}
          </div>
        </div>
        {outOfStock ? null : <AddItemBtn item={wishlistItem} qty={1} />}
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className={clsx(!outOfStock && "font-semibold")}>
          $ {wishlistItem.price.toFixed(2)}
        </div>
        <ToggleWishlistButton cardData={wishlistItem} />
      </div>
    </div>
  );
}
