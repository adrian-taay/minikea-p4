"use client";

import { useUserStore } from "@/lib/useUserStore";
import React from "react";
import WishlistItemCard from "./wishlist-item-card";

export default function WishlistPage() {
  const wishlist = useUserStore((state) => state.wishlist);

  return (
    <section>
      <h1 className="font-bold text-2xl">Wishlist</h1>
      <p>
        Total Items: {wishlist.length}{" "}
        {wishlist.length === 1 ? "item" : "items"}
      </p>
      <div className="flex flex-col gap-4 mt-8">
        {wishlist.map((item, index) => (
          <WishlistItemCard wishlistItem={item} key={index} />
        ))}
      </div>
    </section>
  );
}
