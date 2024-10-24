"use client";

import { useUserStore } from "@/lib/useUserStore";
import { DummyProductType } from "@/types/dummy-products-type";

import React from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

export default function ToggleTempWishlistButton({
  cardData,
}: {
  cardData: DummyProductType;
}) {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const tempWishlist = useUserStore((state) => state.tempWishlist);
  const addToTempWishlist = useUserStore((state) => state.addToTempWishlist);
  const removeFromTempWishlist = useUserStore(
    (state) => state.removeFromTempWishlist
  );

  const findTempWishlistItem = tempWishlist.some(
    (item) => item.id === cardData.id
  );

  function handleToggle() {
    if (findTempWishlistItem) {
      removeFromTempWishlist(cardData.id);
    } else {
      addToTempWishlist(cardData);
    }
  }

  return (
    isLoggedIn === 0 && (
      <button onClick={handleToggle}>
        {findTempWishlistItem ? (
          <GoHeartFill fill={"#E22B22"} size={24} />
        ) : (
          <GoHeart size={24} />
        )}
      </button>
    )
  );
}
