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

  const ProductDetail = (
    <div className="flex flex-col xs:flex-row gap-3">
      <div className="bg-stone-200 flex-start">
        <Image
          src={wishlistItem.thumbnail}
          width={100}
          height={100}
          alt={wishlistItem.title}
          className="mx-auto"
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
          <div className={clsx(!outOfStock && "font-semibold")}>
            $ {wishlistItem.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );

  const FloatingHeartButton = (
    <div className="absolute right-6 top-6 xs:right-4 xs:top-4">
      <ToggleWishlistButton cardData={wishlistItem} />
    </div>
  );

  const AddButtonWrapper = (
    <div className="flex flex-col items-start xs:items-end">
      {outOfStock ? null : <AddItemBtn item={wishlistItem} qty={1} />}
    </div>
  );

  return (
    <div
      className={clsx(
        "relative",
        "flex",
        "flex-col",
        "gap-3",
        "justify-between",
        "items-stretch",
        "border",
        "rounded-md",
        "p-4",
        outOfStock && "text-neutral-400"
      )}
    >
      {ProductDetail}
      {AddButtonWrapper}
      {FloatingHeartButton}
    </div>
  );
}
