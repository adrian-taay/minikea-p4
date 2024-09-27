"use client";

import WishlistItemCard from "@/components/cards/wishlist-item-card";
import { useUserStore } from "@/lib/useUserStore";
import React from "react";

export default function WishlistPage() {
  const wishlist = useUserStore((state) => state.wishlist);

  return (
    <section>
      <h1>Wishlist</h1>
      <div className="flex flex-col gap-4">
        {wishlist.map((item, index) => (
          <WishlistItemCard wishlistItem={item} key={index} />
        ))}
      </div>
    </section>
  );
}
