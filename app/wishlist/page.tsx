"use client";

import { useUserStore } from "@/lib/useUserStore";
import Link from "next/link";
import React from "react";

export default function WishlistPage() {
  const wishlist = useUserStore((state) => state.wishlist);
  const removeFromWishlist = useUserStore((state) => state.removeFromWishlist);

  return (
    <div className="flex flex-col">
      {wishlist.map((item, index) => (
        <div key={index} className="flex gap-4">
          <Link href={item.id}>{item.title}</Link>
          <span
            onClick={() => removeFromWishlist(item.id)}
            className="cursor-pointer"
          >
            remove
          </span>
        </div>
      ))}
    </div>
  );
}
