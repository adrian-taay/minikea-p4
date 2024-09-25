"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types";
import React from "react";

export default function ToggleWishlistBtn({
  cardData,
}: {
  cardData: DummyProductType;
}) {
  const wishlist = useUserStore((state) => state.wishlist);
  const addToWishlist = useUserStore((state) => state.addToWishlist);
  const removeFromWishlist = useUserStore((state) => state.removeFromWishlist);

  const findWishlistItem = wishlist.some((item) => item.id === cardData.sku);

  function handleToggle() {
    if (findWishlistItem) {
      removeFromWishlist(cardData.sku);
    } else {
      addToWishlist(cardData);
    }
  }

  return (
    <button onClick={handleToggle}>
      {findWishlistItem ? "remove" : "add"}
    </button>
  );
}
