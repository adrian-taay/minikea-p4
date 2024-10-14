"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";

import React from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function ToggleWishlistButton({
  cardData,
}: {
  cardData: DummyProductType;
}) {
  const wishlist = useUserStore(state => state.wishlist);
  const addToWishlist = useUserStore(state => state.addToWishlist);
  const removeFromWishlist = useUserStore(state => state.removeFromWishlist);

  const findWishlistItem = wishlist.some(item => item.id === cardData.id);

  function handleToggle() {
    if (findWishlistItem) {
      removeFromWishlist(cardData.id);
    } else {
      addToWishlist(cardData);
    }
  }

  return (
    <button onClick={handleToggle}>
      {findWishlistItem ? (
        <GoHeartFill
          fill={"#E22B22"}
          size={24}
        />
      ) : (
        <GoHeart size={24} />
      )}
    </button>
  );
}
