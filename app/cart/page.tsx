"use client";

import React from "react";
import CartItemView from "./cart-item-view";
import WishlistItemView from "./wishlist-item-view";
import CheckoutSummary from "./checkout-summary";
import useViewportResize from "@/lib/useViewportResize";

export default function CartPage() {
  const isWidthSmall = useViewportResize();

  return (
    <div className="w-full flex flex-col p-4 md:p-8 max-w-screen-2xl mx-auto">
      <h1 className="font-semibold text-2xl my-4 ">Your Cart</h1>
      <div className="w-full flex flex-col lg:flex-row lg:gap-10 ">
        <CartItemView />
        {isWidthSmall && <WishlistItemView />}
        {!isWidthSmall && <CheckoutSummary />}
      </div>
      <div className="w-full">
        {isWidthSmall && <CheckoutSummary />}
        {!isWidthSmall && <WishlistItemView />}
      </div>
    </div>
  );
}
